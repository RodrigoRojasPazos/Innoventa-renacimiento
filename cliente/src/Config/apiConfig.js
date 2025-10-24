// Configuración centralizada de la API
const API_CONFIG = {
    // En producción usa /api (nginx redirige), en desarrollo usa REACT_APP_API_URL
    BASE_URL: process.env.REACT_APP_API_URL || '/api',
    ENDPOINTS: {
        // Auth
        LOGIN: '/login',
        LOGIN_LIST: '/login-list',
        LOGIN_UPDATE: '/login-update',
        
        // Platillos
        GET_PLATILLOS: '/getPlatillos',
        AGREGAR_PLATILLO: '/agregar-platillo',
        ELIMINAR_PLATILLO: '/eliminar-platillo',
        EDITAR_PLATILLO: '/editar-platillo',
        
        // Productos/Inventario
        GET_INVENTARIO: '/getInventario',
        AGREGAR_PRODUCTO: '/agregar-producto',
        GET_PRODUCTOS_NOMBRE: '/get-productos-nombre',
        
        // Categorías
        GET_CATEGORIAS: '/getCategorias',
        
        // Pedidos
        GET_PEDIDOS_EN_PROCESO: '/getPedidosEnProceso',
        GET_PEDIDOS_LISTO: '/getPedidosListo',
        CREAR_PEDIDO: '/crear-pedido',
        PEDIDOS_ESTADO: '/pedidos',
        
        // Pagos
        REALIZAR_PAGO: '/realizar-pago',
        
        // Uploads
        UPLOAD_IMAGE: '/upload-image',
    }
};

export default API_CONFIG;
