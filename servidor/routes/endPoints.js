const express=require("express")
const router = express.Router()
const { login, usuarios_login, updatePassword } = require("../controllers/loginController")
const { getRoles, getRolesId, updateRoles, postRoles, delRoles } = require("../controllers/rolesController");
const { getUsuarios, getUsuarioId, updateUsuario, postUsuario, delUsuario} = require("../controllers/usuarioController");
const { getEmpleados, getEmpleadoId, updateEmpleado, postEmpleado, delEmpleado, agregarEmpleado} = require("../controllers/empleadoController");
const { getRestaurantes, getRestauranteId, updateRestaurante, postRestaurante, delRestaurante} = require("../controllers/restauranteController");
const { getInventario, getProductoId ,agregarProducto, eliminarProducto, getProductos, editarProducto } =require("../controllers/inventarioController");
const { agregarCategoria, getCategorias } = require("../controllers/categoriaController");
const { agregarPlatillo, getPlatillos, eliminarPlatillo, editarPlatillo, getPlatilloId } = require("../controllers/platilloController");
const { CrearPedido, getPedidosEnProceso, updatePedidoEstado, getPedidosListo } = require("../controllers/pedidoController")
const { procesarPago } = require("../controllers/pagosController");
const { upload, uploadImage } = require("../controllers/imagenController");
const { getReportes, getProductosBajoStock, getPlatillosMasVendidos } = require("../controllers/reporteController");


//Login
router.post('/login', login);
router.get('/login-list', usuarios_login);
router.post('/login-update', updatePassword);

//Roles 
router.get('/getRoles', getRoles);
router.post('/postRoles', postRoles);
router.get('/getRolId/:id', getRolesId);
router.delete('/delRol/:id', delRoles);
router.post('/updateRoles/:id', updateRoles);


//Usuarios (Deshabilitado - ahora se usa Empleados)
// router.get('/getUsuarios', getUsuarios);
// router.get('/getUsuarioId/:id', getUsuarioId);
// router.post('/postUsuario', postUsuario);
// router.post('/updateUsuario/:id', updateUsuario);
// router.delete('/delUsuario/:id', delUsuario);


//Empleados
router.get('/getEmpleados', getEmpleados);
router.get('/getEmpleadoId/:id', getEmpleadoId);
router.post('/postEmpleado', postEmpleado);
router.post('/updateEmpleado/:id', updateEmpleado);
router.delete('/delEmpleado/:id', delEmpleado);
router.post('/agregar-empleado', agregarEmpleado);


//Restaurantes (Deshabilitado - tabla no existe en el nuevo esquema)
// router.get('/getRestaurantes', getRestaurantes);
// router.get('/getRestauranteId/:id', getRestauranteId);
// router.post('/postRestaurante', postRestaurante);
// router.post('/updateRestaurante/:id', updateRestaurante);
// router.delete('/delRestaurante/:id', delRestaurante);


//Inventario
router.get('/getInventario', getInventario);
router.get('/get-productos-nombre', getProductos);
router.post('/agregar-producto', agregarProducto);
router.delete('/eliminar-producto/:id', eliminarProducto);
router.get('/get-producto-id/:id', getProductoId);
router.post('/updateProducto/:id', editarProducto)

//Categoria
router.post('/agregar-categoria', agregarCategoria);
router.get('/getCategorias', getCategorias);


//Platillo
router.post('/agregar-platillo', agregarPlatillo);
router.get('/getPlatillos', getPlatillos);
router.delete('/eliminar-platillo/:id', eliminarPlatillo);
router.put('/editar-platillo/:id', editarPlatillo);
router.get('/get-platillo/:id', getPlatilloId);

//imagenes
router.post("/upload-image", upload.single("image"), uploadImage);


//Pedidos
router.post("/crear-pedido", CrearPedido);
router.get('/getPedidosEnProceso', getPedidosEnProceso);
router.put('/pedidos/:id/estado', updatePedidoEstado)
router.get('/getPedidosListo', getPedidosListo);


//Pagos
router.post('/realizar-pago', procesarPago);


//Reportes
router.post('/get-reportes', getReportes);
router.get('/productos-bajo-stock', getProductosBajoStock);
router.get('/platillos-mas-vendidos', getPlatillosMasVendidos);

module.exports = router;
