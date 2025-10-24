# Multi-stage build para frontend y backend combinados
FROM node:18-alpine AS frontend-build

# Build del frontend
WORKDIR /app/cliente
COPY cliente/package*.json ./
RUN npm install
COPY cliente/ ./
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# Backend con nginx para servir frontend
FROM node:18-alpine

# Instalar nginx
RUN apk add --no-cache nginx

# Configurar backend
WORKDIR /app
COPY servidor/package*.json ./
RUN npm install --production
COPY servidor/ ./
RUN mkdir -p uploads

# Copiar build del frontend
COPY --from=frontend-build /app/cliente/build /usr/share/nginx/html

# Configurar nginx
COPY <<EOF /etc/nginx/http.d/default.conf
server {
    listen 80;
    server_name _;
    
    # Frontend
    location / {
        root /usr/share/nginx/html;
        try_files \$uri \$uri/ /index.html;
    }
    
    # API Backend - proxy a Node.js (mantiene el prefijo /api)
    location /api/ {
        rewrite ^/api/(.*)$ /\$1 break;
        proxy_pass http://localhost:4000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Uploads del backend
    location /uploads/ {
        proxy_pass http://localhost:4000/uploads/;
    }
}
EOF

# Script de inicio para correr nginx en background y backend en foreground
RUN echo '#!/bin/sh' > /start.sh && \
    echo 'nginx -g "daemon off;" &' >> /start.sh && \
    echo 'cd /app && node index.js' >> /start.sh && \
    chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]
