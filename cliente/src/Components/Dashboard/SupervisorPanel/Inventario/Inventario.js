import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ClientAxios from '../../../../Config/axios';
import AgregarProducto from './AgregarProducto';

function InventarioPanel() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [mostrarAddProducto, setMostrarAddProducto] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        nombre: '',
        categoria: '',
        stock: '',
        disponibilidad: ''
    });

    const itemsPerPage = 10;
    const URL = `/getInventario`;

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
    };

    const deleteProduct = async (id) => {
        try {
            await ClientAxios.delete(`/eliminar-producto/`);
            setProducts((prevProducts) => prevProducts.filter((row) => row.pk_productos !== id));
            Swal.fire('Éxito', 'El producto se eliminó correctamente.', 'success');
            showData();
        } catch (error) {
            console.error('Error al eliminar el producto: ', error);
            Swal.fire('Error', 'No se pudo eliminar el producto.', 'error');
        }
    };

    const mostrarAlerta = (id) => {
        Swal.fire({
            title: 'Advertencia',
            text: 'Está seguro que desea eliminar este producto?',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            cancelButtonColor: "#ef4444",
            cancelButtonText: "Cancelar"
        }).then(response => {
            if (response.isConfirmed) {
                deleteProduct(id);
            }
        });
    };

    const toggleDisponibilidad = async (producto) => {
        console.log('Toggle disponibilidad para:', producto);
    };

    useEffect(() => {
        showData();
    }, []);

    useEffect(() => {
        let filtered = [...products];
        
        if (filters.nombre) {
            filtered = filtered.filter(p => 
                p.producto_nombre.toLowerCase().includes(filters.nombre.toLowerCase())
            );
        }
        
        if (filters.stock) {
            filtered = filtered.filter(p => p.producto_stock >= parseInt(filters.stock));
        }

        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [filters, products]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="p-8">
            {!mostrarAddProducto ? (
                <>
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-light text-gray-800">Inventario</h1>
                        <button
                            onClick={() => setMostrarAddProducto(true)}
                            className="bg-[#1a2744] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#2a3854] transition"
                        >
                            <i className="fas fa-plus-circle"></i>
                            <span>Agregar Platillo</span>
                        </button>
                    </div>

                    <div className="flex gap-6 mb-6 border-b border-gray-300">
                        <button className="pb-2 px-1 border-b-2 border-[#1a2744] text-[#1a2744] font-medium">
                            Platillos
                        </button>
                        <button className="pb-2 px-1 text-gray-600 hover:text-gray-800">
                            Ingredientes
                        </button>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                            <select 
                                value={filters.nombre}
                                onChange={(e) => setFilters({...filters, nombre: e.target.value})}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                            >
                                <option>Texto Ejemplo</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                            <select 
                                value={filters.categoria}
                                onChange={(e) => setFilters({...filters, categoria: e.target.value})}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                            >
                                <option>Texto Ejemplo</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                            <select 
                                value={filters.stock}
                                onChange={(e) => setFilters({...filters, stock: e.target.value})}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                            >
                                <option>Texto Ejemplo</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Disponibilidad</label>
                            <select 
                                value={filters.disponibilidad}
                                onChange={(e) => setFilters({...filters, disponibilidad: e.target.value})}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
                            >
                                <option>Texto Ejemplo</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="w-8 px-4 py-3"></th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                                        Nombre <i className="fas fa-sort text-xs ml-1"></i>
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                                        Categoria <i className="fas fa-sort text-xs ml-1"></i>
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                                        No. Ingredientes <i className="fas fa-sort text-xs ml-1"></i>
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                                        Precio <i className="fas fa-sort text-xs ml-1"></i>
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                                        Disponibilidad <i className="fas fa-sort text-xs ml-1"></i>
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {currentItems.map((producto) => (
                                    <tr 
                                        key={producto.pk_productos}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-3">
                                            <input type="checkbox" className="w-4 h-4 text-[#1a2744] border-gray-300 rounded" />
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{producto.producto_nombre}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">-</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">-</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{producto.producto_stock}</td>
                                        <td className="px-4 py-3">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    defaultChecked
                                                    onChange={() => toggleDisponibilidad(producto)}
                                                />
                                                <div className="w-11 h-6 bg-green-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                                            </label>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => console.log('Editar', producto.pk_productos)}
                                                    title="Editar"
                                                    className="text-gray-600 hover:text-[#1a2744]"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button
                                                    onClick={() => mostrarAlerta(producto.pk_productos)}
                                                    title="Eliminar"
                                                    className="text-red-400 hover:text-red-600"
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="px-6 py-4 flex items-center justify-between border-t">
                            <div className="text-sm text-gray-600">
                                Mostrando {indexOfFirstItem + 1} de {filteredProducts.length} artículos
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600"
                                >
                                    <i className="fas fa-chevron-left text-sm"></i>
                                </button>
                                
                                {[...Array(Math.min(totalPages, 3))].map((_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => paginate(i + 1)}
                                        className={`px-3 py-1 rounded font-medium `}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                
                                {totalPages > 3 && <span className="px-2 text-gray-600">...</span>}
                                
                                {totalPages > 3 && (
                                    <button
                                        onClick={() => paginate(totalPages)}
                                        className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600"
                                    >
                                        {totalPages}
                                    </button>
                                )}
                                
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600"
                                >
                                    <i className="fas fa-chevron-right text-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <AgregarProducto onRegresar={() => setMostrarAddProducto(false)} />
            )}
        </div>
    );
}

export default InventarioPanel;
