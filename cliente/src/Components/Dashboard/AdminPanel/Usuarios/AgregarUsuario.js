import "./css_Usuario/AgregarUsuario.css";
import React, { useState, useEffect } from "react";

function AgregarUsuario({ onRegresar }){

    const [formData, setFormData] = useState({
        nombre: "",
        password: "",
        fkrestaurante: "",
        fkempleado: "",
        fkrol: "",
    });

    const [empleados, setEmpleados] = useState([]);
    const [restaurantes, setRestaurantes] = useState([]);
    const [roles, setRoles] = useState([]);
    

    useEffect(() => {
        // Cargar opciones de empleados y roles (restaurantes table doesn't exist)
        const fetchData = async () => {
            try {
                const empleadosResponse = await fetch("http://localhost:4000/getEmpleados");
                const rolesResponse = await fetch("http://localhost:4000/getRoles");

                setEmpleados(await empleadosResponse.json());
                // setRestaurantes([{pk_restaurante: 1, nombre: 'Default'}]); // Default if needed
                setRoles(await rolesResponse.json());
            } catch (error) {
                console.error("Error al cargar opciones:", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validar campos requeridos
        if (!formData.fkempleado || !formData.fkrestaurante || !formData.fkrol) {
            formData.fkrestaurante = 1;
        }
    
        const nuevoUsuario = {
            ...formData,
            img: "",
            fecha_creacion: new Date().toISOString().slice(0, 19).replace("T", " "),
            activo: 1,
            action: "insert",
        };
    
        try {
            const response = await fetch("http://localhost:4000/postUsuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoUsuario),
            });
    
            if (response.ok) {
                alert("Usuario añadido correctamente.");
                onRegresar();
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error al añadir usuario:", error);
            alert("Ocurrió un error al añadir el usuario.");
        }
    };
    return(
        <section className="panel-agregar-usuario">
            <form onSubmit={handleSubmit} className="formulario-agregar-usuario">
                <div className="caja-informacion separacion-cajaI-cajaB">
                    <div className="caja-titulo margen-vertical">
                        <h1 className="titulo">Añadir a un nuevo usuario</h1>
                    </div>
                    <div className="caja-instrucciones margen-vertical">
                        <h2 className="subtitulo">Ingrese los datos solicitados:</h2>
                    </div>
                    <div className="caja-grandes margen-vertical">
                        <div className="label-grande-agregar-usuario">
                            <label htmlFor="NombreProducto" className="estilo-label">Nombre de usuario:</label>
                        </div>
                        <input 
                            type="text"
                            id="nombre" 
                            className="estilo-input input-grande input-texto" 
                            placeholder="Ejemplo: Raul Garcia" 
                            value={formData.nombre}
                            onChange={handleChange}
                            required/>
                    </div>
                    <div className="caja-grandes margen-vertical">
                        <div className="label-grande-agregar-usuario">
                            <label htmlFor="contraseña" className="estilo-label">Contraseña:</label>
                        </div>
                        <input 
                            type="password" 
                            id="password" 
                            className="estilo-input input-grande input-texto" 
                            placeholder="Ejemplo: Raul2005_G" 
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                </div>
                <div className="caja-medianos margen-vertical">
                    <div className="cajita-select margen-horizontal">
                        <div className="label-mediano margen-entre-medianas">
                            <label htmlFor="nombre" className="estilo-label">Nombre(s) del empleado:</label>
                        </div>
                        <select 
                            name="nombre" 
                            id="fkempleado" 
                            className="caja-select"
                            value={formData.fkempleado}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Seleccione una opción</option>
                            {empleados.map((empleado) => (
                                <option key={empleado.pk_empleado} value={empleado.pk_empleado}>
                                    {empleado.empleado_nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                </div>
                <div className="caja-medianos">
                    <div className="cajita-select margen-horizontal">
                        <div className="label-mediano margen-entre-medianas">
                            <label htmlFor="restaurante" className="estilo-label">Restaurante:</label>
                        </div>
                        <select 
                            name="restaurante" 
                            id="fkrestaurante" 
                            className="caja-select"
                            value={formData.fkrestaurante}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Seleccione una opción</option>
                            {restaurantes.map((restaurante) => (
                                <option key={restaurante.pk_restaurante} value={restaurantes.pk_restaurante}>
                                    {restaurante.restaunrate_nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="cajita-select">
                        <div className="label-mediano margen-entre-medianas">
                            <label htmlFor="rol" className="estilo-label">Rol del empleado:</label>
                        </div>
                        <select 
                            name="rol" 
                            id="fkrol" 
                            value={formData.fkrol}
                            onChange={handleChange}
                            className="caja-select"
                        >
                            <option value="" disabled>Seleccione una opción</option>
                            {roles.map((rol) => (
                                <option key={rol.pk_rol} value={rol.pk_rol}>
                                    {rol.rol_nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="caja-botones">
                <div className="caja-boton separacion-botones">
                    <button type="button" onClick={onRegresar} className="boton-regresar">
                        Regresar
                    </button>
                </div>
                <div className="caja-boton">
                    <button type="submit" className="boton-ingresar">
                        Ingresar <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </form>
    </section>
    )
}

export default AgregarUsuario;
