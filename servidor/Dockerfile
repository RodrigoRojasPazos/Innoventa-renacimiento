# Dockerfile para el Backend (Node.js/Express)
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código
COPY . .

# Crear directorio para uploads si no existe
RUN mkdir -p uploads

# Exponer el puerto
EXPOSE 4000

# Variables de entorno (serán sobrescritas por docker-compose)
ENV PORT=4000
ENV NODE_ENV=production

# Comando para iniciar la aplicación
CMD ["npm", "start"]
