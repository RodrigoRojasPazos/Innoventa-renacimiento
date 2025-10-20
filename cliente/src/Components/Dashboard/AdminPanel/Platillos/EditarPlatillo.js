import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios'
import "./css_Platillos/Estilos-Platillos.css";
import Swal from 'sweetalert2';

function EditarPlatillo({ onRegresar, platilloId }) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [disponible, setDisponible] = useState(true);
    const [img, setImg] = useState('');
    const [fkCategoria, setFkCategoria] = useState('');
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [productosDisponibles, setProductosDisponibles] = useState([]);

    useEffect(() => {
        const fetchPlatillo = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/get-platillo/${platilloId}`);
                const data = response.data;

                setNombre(data.nombre);
                setPrecio(data.precio);
                setDisponible(data.disponible);
                setImg(data.img);
                setFkCategoria(data.fkcategoria);
                setProductos(data.productos || []);
            } catch (error) {
                console.error("Error al obtener los datos del platillo: ", error);
            }
        };

        const fetchCategorias = async () => {
            const response = await axios.get('http://localhost:4000/getCategorias');
            setCategorias(response.data)
        };

        const fetchProductos = async () => {
            const response = await axios.get('http://localhost:4000/get-productos-nombre');
            setProductosDisponibles(response.data);
        };

        fetchPlatillo();
        fetchCategorias();
        fetchProductos();
    }, [platilloId]);

    const actualizarProducto = (index, campo, valor) => {
        const nuevosProductos = [...productos];
        nuevosProductos[index][campo] = valor;
        setProductos(nuevosProductos);
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            const datosPlatillo = {
                nombre,
                precio,
                disponible,
                img,
                fkcategoria: fkCategoria,
                productos,
            };
            
            const respuesta = await axios.put(`http://localhost:4000/editar-platillo/${platilloId}`, datosPlatillo);
            Swal.fire("Éxito", "Platillo actualizado correctamente.", "success");
            onRegresar();
        } catch (error) {
            console.error('Error al actualizar el platillo: ', error);
            Swal.fire("Error", error.message, "error");
        }
    };

    const manejarDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append("image", file);

        axios.post("http://localhost:4000/upload-image", formData)
            .then((response) => {
                setImg(response.data.url);
            })
            .catch((error) => {
                console.error("Error al subir la imagen: ", error);
            });
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: manejarDrop,
        accept: 'image/*',
        multiple: false,
    });

    const agregarProducto = () => {
        setProductos([...productos, { id: '', cantidad: 1 }]);
      };

    const eliminarProducto = (index) => {
        setProductos(productos.filter((_, i) => i !== index));
      };

    return (
        <form onSubmit={manejarEnvio} className="formulario-platillo">
            <div>
                <div className="form-platillo-titulo">
                    <p>Datos del nuevo platillo</p>
                </div>
                <div className="form-nombre-platillo">
                    <div className="form-nombre-platillo-label">
                        <label>Nombre del platillo:</label>
                    </div>
                    <input type="text" className="form-nombre-platillo-input" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div className="form-precio-disponible-platillo">
                    <div>
                        <div>
                            <label className="form-platillo-label">Precio del platillo:</label>
                        </div>
                        <input className="form-precio-platillo-input" type="number" step="0.01" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                    </div>
                    <div>
                        <div>
                            <label className="form-platillo-label">Disponible:</label>
                        </div>
                        <div className="contenedor-select">
                            <select className="form-select-platillo" value={disponible} onChange={(e) => setDisponible(e.target.value === 'true')}>
                                <option value="true">Sí</option>
                                <option value="false">No</option>
                            </select>
                            <div className="contenedor-icono">
                                <i className="bi bi-caret-down-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-platillo-imagen'>
                    <label className='form-platillo-label'>Imagen:</label>
                    <div {...getRootProps()} style={{ border: '2px dashed gray', padding: '20px', textAlign: 'center' }}>
                        <input {...getInputProps()} />
                        {isDragActive ? <p>Suelta la imagen aquí...</p> : <p>Arrastra y suelta una imagen, o haz clic para seleccionar</p>}
                    </div>
                    {img && <img src={img} alt="Vista previa" style={{ width: '200px', marginTop: '10px' }} />}
                </div>
                <div className="form-categoria-restaurante-platillo">
                    <div>
                        <div>
                            <label className="form-platillo-label">Categoría:</label>
                        </div>
                        <div className="contenedor-select">
                            <select className="form-select-platillo" value={fkCategoria} onChange={(e) => setFkCategoria(e.target.value)} required>
                                <option value="">Selecciona una categoría</option>
                                {categorias.map((categoria) => (
                                    <option key={categoria.pk_categoria} value={categoria.pk_categoria}>
                                        {categoria.categoria_nombre}
                                    </option>
                                ))}
                            </select>
                            <div className="contenedor-icono">
                                <i className="bi bi-caret-down-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="form-platillo-subtitulo">
                        <p>Ingredientes</p>
                    </div>
                    <div className='subform-productos-platillo'>
                        {productos.map((producto, index) => (
                            <div key={index} className="subform-productos-platillo-opcion">
                                <div>
                                    <div className="form-nombre-platillo-label">
                                        <label>Producto:</label>
                                    </div>
                                    <div className="contenedor-select">
                                        <select
                                            className="form-select-platillo"
                                            value={producto.id}
                                            onChange={(e) => actualizarProducto(index, 'id', e.target.value)}
                                            required
                                        >
                                            <option value="">Selecciona un producto</option>
                                            {productosDisponibles.map((prod) => (
                                                <option key={prod.pk_productos} value={prod.pk_productos}>
                                                    {prod.producto_nombre}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="contenedor-icono">
                                            <i className="bi bi-caret-down-fill"></i>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-nombre-platillo-label">
                                        <label>Cantidad:</label>
                                    </div>
                                    <input
                                        type="number"
                                        className="subform-productos-platillo-input"
                                        value={producto.cantidad}
                                        onChange={(e) => actualizarProducto(index, 'cantidad', e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <button type="button" className="subform-eliminar-producto" onClick={() => eliminarProducto(index)}>Eliminar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button type="button" className="subform-agregar-producto-platillo" onClick={agregarProducto}>Agregar Producto <i className="bi bi-plus subform-icon-platillo"></i></button>
                    </div>
                </div>
                <div className="form-platillo-enviar-regresar">
                    <div>
                        <button type="submit" value="Regresar" className="boton-regresar" onClick={onRegresar}>Regresar</button>
                    </div>
                    <div>
                        <button type="submit" className="boton-ingresar">Ingresar <i className="bi bi-arrow-right estilo-icono"></i></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditarPlatillo;
