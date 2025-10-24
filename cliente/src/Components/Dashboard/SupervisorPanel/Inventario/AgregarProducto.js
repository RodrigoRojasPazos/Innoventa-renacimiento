import React, { useState } from "react";

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
            const response = await fetch(`${process.env.REACT_APP_API_URL || '/api'}/agregar-producto`,{
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
            } else {
                alert("Error al agregar producto al inventario: " + result.message);
            }
        } catch(error){
            console.error("Error al enviar los datos: ", error);
            alert("Error interno. Por favor, intenta más tarde.");
        }
    };

    return(
        <div className="p-8">
            <div className="bg-white rounded-lg shadow p-8 max-w-3xl">
                <form onSubmit={handleSubmit}>
                    {/* Título */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-light text-gray-800">Información del producto</h2>
                    </div>

                    {/* Nombre del producto */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre del producto:
                        </label>
                        <input 
                            type="text" 
                            id="nombre" 
                            value={formData.nombre} 
                            onChange={handleChanges}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                            required
                        />
                    </div>

                    {/* Stock entrante y Stock mínimo */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Stock entrante:
                            </label>
                            <input 
                                type="number" 
                                id="stock" 
                                min="0" 
                                step="1" 
                                value={formData.stock} 
                                onChange={handleChanges}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Stock mínimo:
                            </label>
                            <input 
                                type="number"
                                id="stock_minimo"
                                min="0" 
                                step="1"  
                                value={formData.stock_minimo} 
                                onChange={handleChanges}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                                required
                            />
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-end gap-4">
                        <button 
                            type="button" 
                            onClick={onRegresar}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                        >
                            Regresar
                        </button>
                        <button 
                            type="submit" 
                            className="px-6 py-2 bg-[#1a2744] text-white rounded-lg hover:bg-[#2a3854] transition"
                        >
                            Ingresar datos
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AgregarProducto;
