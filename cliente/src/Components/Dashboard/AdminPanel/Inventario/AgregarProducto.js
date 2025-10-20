import React, { useState } from "react";
import "./css_Inventario/AgregarProducto.css";
import { Link } from "react-router-dom";

function AgregarProducto({ onRegresar}){


    const [formData, setFormData] = useState({
        nombre:'',
        stock: 0,
        stock_minimo: 0,
    });

    const handleChanges = (e) => {
        const { id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:4000/agregar-producto",{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: formData.nombre,
                    stock: parseInt(formData.stock),
                    stock_minimo: parseInt(formData.stock_minimo),
                    fecha_actualizado: new Date().toISOString(),
                }),
            });
            const result = await response.json();
            if (response.status === 200) {
                alert("Producto agregado correctamente.");
                onRegresar();
            } else {
                alert("Error al agregar producto al inventario: " + result.message);
            }
        } catch(error){
            console.error("Error al enviar los datos: ", error);
            alert("Error interno. Por favor, intenta más tarde.");
        }
    };

    return(
        <section className="panel">
        <form  className="formulario" onSubmit={handleSubmit}  style={{ borderRadius: "24px" }}>
            <div className="caja-informacion separacion-cajaI-cajaB ">
                <div className="caja-titulo margen-vertical">
                    <p className="Titulo">Información del producto</p>
                </div>
                <div className="caja-grandes margen-vertical">
                    <div className="label-grande">
                        <label  className="estilo-label">Nombre del producto:</label>
                    </div>
                    <input type="text" 
                            className="estilo-input input-grande" 
                            id="nombre" 
                            value={formData.nombre} 
                            onChange={handleChanges}
                    />
                </div>
                <div className="caja-medianos margen-vertical">
                    <div className="margen-horizontal">
                        <div className="label-mediano margen-entre-medianas">
                            <label className="estilo-label">Stock entrante:</label>
                        </div>
                        <input type="number" 
                                min="0" 
                                id="stock" 
                                max="100" 
                                step="1" 
                                className="estilo-input input-mediano" 
                                value={formData.stock} 
                                onChange={handleChanges}
                        />
                    </div>
                    <div>
                        <div className="label-mediano margen-entre-medianas">
                            <label className="estilo-label">Stock mínimo:</label>
                        </div>
                        <input type="number"
                            id="stock_minimo"
                               min="0" 
                               max="100" 
                               step="1"  
                               className="estilo-input input-mediano" 
                               value={formData.stock_minimo} 
                               onChange={handleChanges}
                        />
                    </div>
                </div>
                
            </div>
            <div className="caja-botones">
                <div className="caja-boton separacion-botones">
                    <button type="button" className="boton-regresar" onClick={onRegresar}>Regresar</button>
                
                </div>
                <div className="caja-boton">
                    <button type="submit" value="Ingresa" className="boton-ingresar">Ingresar datos</button>
                </div>
            </div>
        </form>
    </section>
    )
}

export default AgregarProducto;
