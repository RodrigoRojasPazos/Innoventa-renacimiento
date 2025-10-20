-- ======================================================
-- Datos de Ejemplo para Base de Datos: restaurante_db
-- ======================================================

USE restaurante_db;

-- ======================================================
-- Insertar Roles
-- ======================================================
INSERT INTO roles (rol_nombre, rol_descripcion) VALUES
('Administrador', 'Acceso completo al sistema, gestión de usuarios y configuración'),
('Supervisor', 'Supervisión de operaciones, reportes y gestión de inventario'),
('Cajero', 'Gestión de pagos, cobros y cierre de ventas'),
('Mesero', 'Toma de pedidos y atención al cliente')
ON DUPLICATE KEY UPDATE rol_nombre = rol_nombre;

-- ======================================================
-- Insertar Empleados
-- ======================================================
INSERT INTO empleados (empleado_nombre, empleado_apellido, empleado_contraseña, empleado_edad, empleado_genero, empleado_email, empleado_telefono, empleado_direccion, empleado_rfc, empleado_nss, empleado_activo, fk_roles) VALUES
('Juan', 'Pérez', 'admin123', 35, 'Masculino', 'juan.perez@restaurante.com', '5551234567', 'Av. Principal 123, CDMX', 'PEPJ850315ABC', '12345678901', 'Activo', 1),
('María', 'González', 'super123', 28, 'Femenino', 'maria.gonzalez@restaurante.com', '5552345678', 'Calle Reforma 456, CDMX', 'GOMA920820DEF', '23456789012', 'Activo', 2),
('Carlos', 'Ramírez', 'cajero123', 25, 'Masculino', 'carlos.ramirez@restaurante.com', '5553456789', 'Calle Juárez 789, CDMX', 'RAMC950512GHI', '34567890123', 'Activo', 3),
('Ana', 'Martínez', 'mesero123', 22, 'Femenino', 'ana.martinez@restaurante.com', '5554567890', 'Av. Insurgentes 321, CDMX', 'MAAA980730JKL', '45678901234', 'Activo', 4),
('Luis', 'Hernández', 'mesero123', 24, 'Masculino', 'luis.hernandez@restaurante.com', '5555678901', 'Calle Madero 654, CDMX', 'HERL960215MNO', '56789012345', 'Activo', 4),
('Sofia', 'López', 'cajero123', 26, 'Femenino', 'sofia.lopez@restaurante.com', '5556789012', 'Av. Universidad 987, CDMX', 'LOPS940908PQR', '67890123456', 'Activo', 3);

-- ======================================================
-- Insertar Categorías
-- ======================================================
INSERT INTO categorias (categoria_nombre, categoria_descripcion) VALUES
('Entradas', 'Platillos ligeros para comenzar la comida'),
('Sopas', 'Caldos y sopas tradicionales'),
('Platos Fuertes', 'Platillos principales con proteína'),
('Ensaladas', 'Ensaladas frescas y saludables'),
('Postres', 'Dulces y postres para finalizar'),
('Bebidas', 'Bebidas frías y calientes'),
('Especialidades', 'Platillos especiales de la casa'),
('Desayunos', 'Platillos para el desayuno');

-- ======================================================
-- Insertar Productos (Ingredientes)
-- ======================================================
INSERT INTO productos (producto_nombre, producto_stock, producto_minimo_stock, producto_fecha_actualizacion) VALUES
-- Carnes
('Carne de Res', 50, 10, CURDATE()),
('Pollo', 60, 15, CURDATE()),
('Cerdo', 40, 10, CURDATE()),
('Pescado', 30, 8, CURDATE()),
('Camarones', 25, 5, CURDATE()),

-- Vegetales
('Tomate', 100, 20, CURDATE()),
('Lechuga', 80, 15, CURDATE()),
('Cebolla', 70, 15, CURDATE()),
('Aguacate', 50, 10, CURDATE()),
('Pimiento', 40, 10, CURDATE()),
('Zanahoria', 60, 12, CURDATE()),
('Papa', 90, 20, CURDATE()),

-- Lácteos
('Queso', 40, 10, CURDATE()),
('Crema', 30, 8, CURDATE()),
('Leche', 50, 10, CURDATE()),

-- Granos y Cereales
('Arroz', 80, 15, CURDATE()),
('Frijoles', 70, 15, CURDATE()),
('Pasta', 60, 12, CURDATE()),
('Tortillas', 200, 50, CURDATE()),

-- Condimentos y Otros
('Aceite', 20, 5, CURDATE()),
('Sal', 30, 5, CURDATE()),
('Pimienta', 25, 5, CURDATE()),
('Ajo', 40, 10, CURDATE()),
('Limón', 50, 10, CURDATE()),
('Cilantro', 30, 8, CURDATE());

-- ======================================================
-- Insertar Platillos
-- ======================================================
INSERT INTO platillos (platillo_nombre, platillo_precio, platillo_disponible, platillo_img, fk_categoria) VALUES
-- Entradas
('Guacamole con Totopos', 85.00, 1, '/uploads/guacamole.jpg', 1),
('Quesadillas', 95.00, 1, '/uploads/quesadillas.jpg', 1),
('Nachos Supremos', 120.00, 1, '/uploads/nachos.jpg', 1),

-- Sopas
('Sopa de Tortilla', 75.00, 1, '/uploads/sopa-tortilla.jpg', 2),
('Crema de Champiñones', 85.00, 1, '/uploads/crema-champinones.jpg', 2),

-- Platos Fuertes
('Tacos de Carne Asada', 150.00, 1, '/uploads/tacos-carne.jpg', 3),
('Enchiladas Verdes', 135.00, 1, '/uploads/enchiladas.jpg', 3),
('Pollo a la Plancha', 145.00, 1, '/uploads/pollo-plancha.jpg', 3),
('Filete de Pescado', 180.00, 1, '/uploads/pescado.jpg', 3),
('Camarones al Ajillo', 195.00, 1, '/uploads/camarones.jpg', 3),
('Chiles Rellenos', 140.00, 1, '/uploads/chiles-rellenos.jpg', 3),

-- Ensaladas
('Ensalada César', 110.00, 1, '/uploads/ensalada-cesar.jpg', 4),
('Ensalada Mixta', 95.00, 1, '/uploads/ensalada-mixta.jpg', 4),

-- Postres
('Flan Napolitano', 65.00, 1, '/uploads/flan.jpg', 5),
('Pastel de Chocolate', 75.00, 1, '/uploads/pastel-chocolate.jpg', 5),
('Helado de Vainilla', 55.00, 1, '/uploads/helado.jpg', 5),

-- Bebidas
('Agua de Horchata', 35.00, 1, '/uploads/horchata.jpg', 6),
('Agua de Jamaica', 35.00, 1, '/uploads/jamaica.jpg', 6),
('Refresco', 30.00, 1, '/uploads/refresco.jpg', 6),
('Café Americano', 40.00, 1, '/uploads/cafe.jpg', 6),

-- Desayunos
('Huevos Rancheros', 85.00, 1, '/uploads/huevos-rancheros.jpg', 8),
('Chilaquiles', 90.00, 1, '/uploads/chilaquiles.jpg', 8),
('Molletes', 75.00, 1, '/uploads/molletes.jpg', 8);

-- ======================================================
-- Insertar Relaciones Platillos-Productos
-- ======================================================

-- Guacamole con Totopos (ID: 1)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(1, 9, 2),  -- Aguacate
(1, 6, 1),  -- Tomate
(1, 8, 0.5), -- Cebolla
(1, 24, 0.5), -- Limón
(1, 25, 0.2); -- Cilantro

-- Quesadillas (ID: 2)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(2, 13, 2),  -- Queso
(2, 19, 4);  -- Tortillas

-- Nachos Supremos (ID: 3)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(3, 13, 1.5), -- Queso
(3, 14, 0.5), -- Crema
(3, 9, 1),    -- Aguacate
(3, 6, 1);    -- Tomate

-- Sopa de Tortilla (ID: 4)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(4, 19, 3),   -- Tortillas
(4, 6, 2),    -- Tomate
(4, 8, 0.5),  -- Cebolla
(4, 9, 1);    -- Aguacate

-- Tacos de Carne Asada (ID: 6)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(6, 1, 3),    -- Carne de Res
(6, 19, 6),   -- Tortillas
(6, 8, 0.5),  -- Cebolla
(6, 25, 0.3), -- Cilantro
(6, 24, 1);   -- Limón

-- Enchiladas Verdes (ID: 7)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(7, 2, 2),    -- Pollo
(7, 19, 6),   -- Tortillas
(7, 13, 1),   -- Queso
(7, 14, 0.5), -- Crema
(7, 8, 0.5);  -- Cebolla

-- Pollo a la Plancha (ID: 8)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(8, 2, 2.5),  -- Pollo
(8, 16, 2),   -- Arroz
(7, 7, 1),    -- Lechuga
(8, 6, 1);    -- Tomate

-- Filete de Pescado (ID: 9)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(9, 4, 2),    -- Pescado
(9, 16, 2),   -- Arroz
(9, 7, 1),    -- Lechuga
(9, 24, 1);   -- Limón

-- Camarones al Ajillo (ID: 10)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(10, 5, 2),   -- Camarones
(10, 23, 0.5), -- Ajo
(10, 16, 2),   -- Arroz
(10, 24, 1);   -- Limón

-- Ensalada César (ID: 12)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(12, 7, 2),   -- Lechuga
(12, 2, 1),   -- Pollo
(12, 13, 0.5); -- Queso

-- Ensalada Mixta (ID: 13)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(13, 7, 1.5),  -- Lechuga
(13, 6, 1),    -- Tomate
(13, 8, 0.5),  -- Cebolla
(13, 11, 0.5), -- Zanahoria
(13, 9, 0.5);  -- Aguacate

-- Huevos Rancheros (ID: 21)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(21, 19, 4),  -- Tortillas
(21, 6, 1),   -- Tomate
(21, 17, 1);  -- Frijoles

-- Chilaquiles (ID: 22)
INSERT INTO platillos_productos (fk_platillo, fk_producto, platillo_producto_cantidad_producto) VALUES
(22, 19, 5),   -- Tortillas
(22, 13, 1),   -- Queso
(22, 14, 0.5); -- Crema

-- ======================================================
-- Insertar Pedidos de Ejemplo
-- ======================================================
INSERT INTO pedidos (pedido_fecha, pedido_monto, pedido_estado, pedido_cliente, fk_empleado) VALUES
(NOW() - INTERVAL 2 HOUR, 380.00, 'Entregado', 'Mesa 1 - Cliente A', 4),
(NOW() - INTERVAL 1 HOUR, 520.00, 'Entregado', 'Mesa 2 - Cliente B', 5),
(NOW() - INTERVAL 30 MINUTE, 295.00, 'En proceso', 'Mesa 3 - Cliente C', 4),
(NOW() - INTERVAL 15 MINUTE, 450.00, 'Pendiente', 'Mesa 4 - Cliente D', 5);

-- ======================================================
-- Insertar Detalles de Pedidos
-- ======================================================
-- Pedido 1
INSERT INTO pedidos_platillos (fk_pedido, fk_platillo, pedido_platillo_cantidad) VALUES
(1, 6, 2),  -- 2 Tacos de Carne Asada
(1, 12, 1), -- 1 Ensalada César
(1, 17, 2); -- 2 Aguas de Horchata

-- Pedido 2
INSERT INTO pedidos_platillos (fk_pedido, fk_platillo, pedido_platillo_cantidad) VALUES
(2, 8, 2),  -- 2 Pollo a la Plancha
(2, 10, 1), -- 1 Camarones al Ajillo
(2, 14, 2), -- 2 Flan Napolitano
(2, 19, 2); -- 2 Refrescos

-- Pedido 3
INSERT INTO pedidos_platillos (fk_pedido, fk_platillo, pedido_platillo_cantidad) VALUES
(3, 7, 2),  -- 2 Enchiladas Verdes
(3, 17, 2); -- 2 Aguas de Horchata

-- Pedido 4
INSERT INTO pedidos_platillos (fk_pedido, fk_platillo, pedido_platillo_cantidad) VALUES
(4, 21, 2), -- 2 Huevos Rancheros
(4, 22, 1), -- 1 Chilaquiles
(4, 20, 3); -- 3 Cafés Americanos

-- ======================================================
-- Insertar Ventas de Ejemplo
-- ======================================================
INSERT INTO ventas (venta_fecha_creacion, venta_fecha_cierre, venta_estado, fk_pedido, fk_empleado) VALUES
(NOW() - INTERVAL 2 HOUR, NOW() - INTERVAL 1 HOUR + INTERVAL 50 MINUTE, 'Cerrada', 1, 3),
(NOW() - INTERVAL 1 HOUR, NOW() - INTERVAL 50 MINUTE, 'Cerrada', 2, 6);

-- ======================================================
-- Insertar Pagos de Ejemplo
-- ======================================================
INSERT INTO pagos (pago_monto_total, pago_tipo, pago_fecha, fk_venta) VALUES
(440.80, 'Efectivo', NOW() - INTERVAL 1 HOUR + INTERVAL 50 MINUTE, 1),
(603.20, 'Tarjeta', NOW() - INTERVAL 50 MINUTE, 2);

-- ======================================================
-- Fin de Datos de Ejemplo
-- ======================================================

-- Consultas para verificar los datos insertados
SELECT 'Roles insertados:' as '';
SELECT * FROM roles;

SELECT 'Empleados insertados:' as '';
SELECT pk_empleado, empleado_nombre, empleado_apellido, empleado_email, 
       (SELECT rol_nombre FROM roles WHERE pk_rol = fk_roles) as rol
FROM empleados;

SELECT 'Categorías insertadas:' as '';
SELECT * FROM categorias;

SELECT 'Productos insertados:' as '';
SELECT pk_productos, producto_nombre, producto_stock, producto_minimo_stock FROM productos;

SELECT 'Platillos insertados:' as '';
SELECT pk_platillo, platillo_nombre, platillo_precio, 
       (SELECT categoria_nombre FROM categorias WHERE pk_categoria = fk_categoria) as categoria
FROM platillos;

SELECT 'Total de registros:' as '';
SELECT 
    (SELECT COUNT(*) FROM roles) as Roles,
    (SELECT COUNT(*) FROM empleados) as Empleados,
    (SELECT COUNT(*) FROM categorias) as Categorias,
    (SELECT COUNT(*) FROM productos) as Productos,
    (SELECT COUNT(*) FROM platillos) as Platillos,
    (SELECT COUNT(*) FROM platillos_productos) as 'Platillos-Productos',
    (SELECT COUNT(*) FROM pedidos) as Pedidos,
    (SELECT COUNT(*) FROM ventas) as Ventas,
    (SELECT COUNT(*) FROM pagos) as Pagos;
