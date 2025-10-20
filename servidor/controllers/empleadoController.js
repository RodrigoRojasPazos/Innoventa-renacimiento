const express=require("express")
const app=express();
const dotenv= require ("dotenv");
dotenv.config();

const connection = require("../config/config.db");
const { request, response } = require("..");

const getEmpleados= (request, response) => {
    connection.query("SELECT * FROM empleados",
    (error,results)=>{
        if(error)
        throw error;
    response.status(200).json(results);
    });
};

const getEmpleadoId= (request, response) => {
    const id = request.params.id;
    connection.query("SELECT * FROM empleados WHERE pk_empleado = ?",
    [id],
    (error,results)=>{
        if(error)
        throw error;
    response.status(200).json(results);
    });
};

const updateEmpleado = (request, response) => {
    const id = request.params.id;
    const { nombre, apellido, contraseña, edad, genero, email, telefono, direccion, rfc, nss, fk_roles} = request.body;

    connection.query(
        "UPDATE empleados SET empleado_nombre = ?, empleado_apellido = ?, empleado_contraseña = ?, empleado_edad = ?, empleado_genero = ?,empleado_email = ?, empleado_telefono = ?, empleado_direccion = ?, empleado_rfc = ?, empleado_nss = ?, fk_roles = ? WHERE pk_empleado = ?",
        [nombre, apellido, contraseña, edad, genero, email, telefono, direccion, rfc, nss, fk_roles, id],
        (error, results) => {
            if (error) {
                console.error("Error al actualizar el empleado:", error);
                response.status(500).json({ error: "Error interno del servidor" });
            } else {
                if (results.affectedRows > 0) {
                    response.status(200).json({ message: "Empleado actualizado correctamente" });
                } else {
                    response.status(404).json({ error: "Empleado no encontrado" });
                }
            }
        }
    );
}

const postEmpleado = (request, response) => {
    const { id, nombre, apellido, contraseña, edad, genero, email, telefono, direccion, rfc, nss, fecha_alta, activo, fk_roles, action } = request.body;

    if (action === "insert") {
        connection.query(
            "INSERT INTO empleados (empleado_nombre, empleado_apellido, empleado_contraseña, empleado_edad, empleado_genero, empleado_email, empleado_telefono, empleado_direccion, empleado_rfc, empleado_nss, empleado_fecha_alta, empleado_activo, fk_roles) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [nombre, apellido, contraseña, edad, genero, email, telefono, direccion, rfc, nss, fecha_alta, activo, fk_roles],
            (error, results) => {
                if (error)
                    throw error;
                response.status(201).json({ "Empleado añadido correctamente": results.affectedRows });
            }
        );
    }else if (action === "update") {
        connection.query(
            "UPDATE empleados SET empleado_nombre = ?, empleado_apellido = ?, empleado_contraseña = ?, empleado_edad = ?, empleado_genero = ?, empleado_email = ?, empleado_telefono = ?, empleado_direccion = ?, empleado_rfc = ?, empleado_nss = ?, empleado_activo = ?, fk_roles = ? WHERE pk_empleado = ?",
            [nombre, apellido, contraseña, edad, genero, email, telefono, direccion, rfc, nss, activo, fk_roles, id],
            (error, results) => {
                if (error)
                    throw error;
                response.status(201).json({ "Empleado actualizado correctamente": results.affectedRows });
            }
        );
    }
};

const delEmpleado = (request, response)=>{
    const id =request.params.id;
    connection.query("DELETE FROM empleados WHERE pk_empleado = ?",[id],
    (error, results)=>{
        if(error)
            throw error;
        response.status(201).json({"Empleado eliminado":results.affectedRows});
    });
};



const agregarEmpleado = (request, response) =>{
    const { nombre, apellido, contraseña, edad, genero, telefono, email, direccion, rfc, nss, fecha_alta, activo, fk_roles} = request.body;

     // Convertir fecha_alta al formato 'YYYY-MM-DD HH:MM:SS'
     const fechaAltaFormateada = new Date(fecha_alta).toISOString().slice(0, 19).replace('T', ' ');

    connection.query(
        "INSERT INTO empleados (empleado_nombre, empleado_apellido, empleado_contraseña, empleado_edad, empleado_genero, empleado_telefono, empleado_email, empleado_direccion, empleado_rfc, empleado_nss, empleado_fecha_alta, empleado_activo, fk_roles) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [nombre, apellido, contraseña, edad, genero, telefono, email, direccion, rfc, nss, fechaAltaFormateada, activo, fk_roles],
        (error, results) => {
            if (error) {
                console.error("Error al agregar el empleado:", error);
                response.status(500).json({ error: "Error interno del servidor" });
            } else {
                if (results.affectedRows > 0) {
                    response.status(200).json({ message: "Empleado agregado correctamente" });
                } else {
                    response.status(404).json({ error: "Empleado no agregado, no fue posible realizar el insert." });
                }
            }
        }
    )
};

module.exports = {getEmpleados, getEmpleadoId, postEmpleado, updateEmpleado, delEmpleado, agregarEmpleado};
