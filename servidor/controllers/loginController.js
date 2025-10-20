const connection = require('../config/config.db');

module.exports.login = (req, res) => {
    const { email, password } = req.body;

    console.log('=== LOGIN ATTEMPT ===');
    console.log('Email recibido:', email);
    console.log('Password recibido:', password);

    const query = `
        SELECT 
            e.pk_empleado, 
            e.empleado_nombre, 
            e.empleado_apellido, 
            e.empleado_email, 
            e.empleado_contraseña,
            r.rol_nombre
        FROM empleados e
        INNER JOIN roles r ON e.fk_roles = r.pk_rol
        WHERE e.empleado_email = ? AND e.empleado_activo = 'Activo'
    `;

    connection.query(query, [email], (error, results) => {
        if (error) {
            console.error('Error en la consulta:', error);
            return res.status(500).send({ message: 'Error en el servidor' });
        }

        console.log('Resultados encontrados:', results.length);
        
        if (results.length === 0) {
            console.log('Usuario no encontrado para email:', email);
            return res.status(401).send({ message: 'Usuario no encontrado o inactivo' });
        }

        const user = results[0];
        console.log('Usuario encontrado:', user.empleado_email);
        console.log('Password en BD:', user.empleado_contraseña);
        console.log('Password recibido:', password);
        console.log('¿Coinciden?:', user.empleado_contraseña === password);

        // Comparación directa de contraseña (sin hash)
        if (user.empleado_contraseña === password) {
            console.log('✅ Login exitoso para:', user.empleado_email);
            res.status(200).send({
                message: 'Inicio de sesión exitoso.',
                rol: user.rol_nombre,
                empleado: {
                    id: user.pk_empleado,
                    nombre: user.empleado_nombre,
                    apellido: user.empleado_apellido,
                    email: user.empleado_email
                }
            });
        } else {
            console.log('❌ Contraseña incorrecta para:', user.empleado_email);
            res.status(401).send({ message: 'Contraseña incorrecta' });
        }
    });
};

module.exports.usuarios_login = (req, res) => {
    const query = `
        SELECT 
            pk_empleado as id,
            empleado_email as email,
            empleado_nombre as nombre,
            empleado_apellido as apellido,
            r.rol_nombre as rol
        FROM empleados e
        INNER JOIN roles r ON e.fk_roles = r.pk_rol
        WHERE empleado_activo = 'Activo'
    `;

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error en la consulta:', error);
            return res.status(500).send({ message: 'Error en el servidor' });
        }
        res.status(200).json(results);
    });
};

module.exports.updatePassword = (req, res) => {
    const { email, nueva_password } = req.body;

    const query = `
        UPDATE empleados 
        SET empleado_contraseña = ? 
        WHERE empleado_email = ? AND empleado_activo = 'Activo'
    `;

    connection.query(query, [nueva_password, email], (error, results) => {
        if (error) {
            console.error('Error en la consulta:', error);
            return res.status(500).send({ message: 'Error en el servidor' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }

        res.status(200).send({ message: 'Contraseña actualizada con éxito' });
    });
};
