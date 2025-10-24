﻿import ClientAxios from "../../../../Config/axios";
import React, { useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import { Dropdown, DropdownButton} from 'react-bootstrap';
import AgregarEmpleado from "./AgregarEmpleado";
import './css_Empleado/Empleado.css';
import Swal from "sweetalert2";
import EditarEmpleado from "./EditarEmpleado";

function EmpleadosPanel(){
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [mostrarAddEmpleado, setMostrarAddEmpleado] = useState(false);
    const [mostrarEditarEmpleado, setMostrarEditarEmpleado] = useState(false);
    const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
    const [visibleColumns, setVisibleColumns] = useState([
        'Nombre',
        'Apellido',
        'Correo',
        'Opciones'
    ]);

    const URL = `${process.env.REACT_APP_API_URL || '/api'}/getEmpleados`

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
    }

    const deletEmpleado = async(id) => {
        try {
            await ClientAxios.delete(`/delEmpleado/${id}`);
            setUsers((prevUsers) => prevUsers.filter((row) => row.pk_empleado !== id));
            showData();
        } catch(error){
            console.error("Error al eliminar el empleado: ", error);
            Swal.fire('Error', 'Error al eliminar empleado', 'error');
        }
    };

    const mostrarAlerta = (id) =>{
        Swal.fire({
            title: 'Advertencia',
            text: '¿Está seguro que desea eliminar este empleado?',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            cancelButtonColor: "Red",
            cancelButtonText: "Cancelar" 
        }).then(response => {
            if(response.isConfirmed){
                deletEmpleado(id);
                Swal.fire('Éxito', 'El empleado se eliminó correctamente.', 'success');
            }
        });
    }

    const allColumns = [
        {
            name: 'Nombre',
            selector: (row) => row.empleado_nombre,
            sortable: true,
            center: true,
            id: 'Nombre',
            //width: '150px'
        },
        {
            name: 'Apellido',
            selector: row => row.empleado_apellido,
            center: true,
            sortable: true,
            id: 'Apellido',
            //width: '220px'
        },
        {
            name: 'Edad',
            selector: row => row.empleado_edad,
            center: true,
            sortable: true,
            id: 'Edad'
        },
        {
            name: 'Genero',
            selector: row => row.empleado_genero,
            center: true,
            sortable: true,
            id: 'Genero'
        },
        {
            name: 'Correo',
            selector: row => row.empleado_email,
            sortable: true,
            center: true,
            width: '280px',
            id: 'Correo'
        },
        {
            name: 'Teléfono',
            selector: row => row.empleado_telefono,
            center: true,
            id: 'Teléfono'
        },
        {
            name: 'RFC',
            selector: row => row.empleado_rfc,
            center: true,
            id: 'RFC'
        },
        {
            name: 'NSS',
            selector: row => row.empleado_nss,
            center: true,
            id: 'NSS',
        },
        {
            name: 'Opciones',
            cell: (row) => (
                <div style={{ display: "flex", gap:'10px'}}>
                    <button
                        className="edit-btn-button"
                        onClick={() => {setEmpleadoSeleccionado(row.pk_empleado);
                                        setMostrarEditarEmpleado(true);
                                        console.log(row.pk_empleado);
                        }}
                    >
                        Editar
                    </button>
                    <button
                        className="delete-btn-button"
                        onClick={() => mostrarAlerta(row.pk_empleado)}
                    >
                        Eliminar
                    </button>
                </div>
            ),
            ignoreRowClick: true,
            id: 'Opciones'
        }
    ];

    const columns = allColumns.filter((column) => visibleColumns.includes(column.id));

    const handleColumnToggle = (columnId) => {
        setVisibleColumns((prevState) => 
            prevState.includes(columnId)
                ? prevState.filter((col) => col !== columnId)
                : [...prevState, columnId] 
        );
        showData();
    };

    useEffect(() => {
        showData();
    }, []);

    return(
        <div className="empleado-panel">
            {!mostrarAddEmpleado && !mostrarEditarEmpleado? (
                <>
                    <div className="header-empleados">
                        <p className="titulo-dashboard-empleado">Lista de empleados</p>
                        <button
                            className="add-btn-button"
                            onClick={() => setMostrarAddEmpleado(true)}
                        >
                            Agregar nuevo empleado
                        </button>
                    </div>

                    <div className="columnas-btn">
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Seleccionar columnas"
                            variant="secondary"
                            className="columnas-btns"
                            style={{ marginLeft: "10px"}}
                        >
                        {allColumns.map((col) => (
                            <Dropdown.Item key={col.id}>
                                <label className="columnas-btn-contenido">
                                    <input
                                        type="checkbox"
                                        checked={visibleColumns.includes(col.id)}
                                        onChange={() => handleColumnToggle(col.id)}
                                        style={{ marginRight: '5px' }}
                                    />
                                    {col.name}
                                </label>
                            </Dropdown.Item>
                        ))}
                        </DropdownButton>
                    </div>

                    

                    <DataTable
                        columns={columns}
                        data={filteredUsers}
                        paginationPerPage={10}
                        pagination
                        highlightOnHover
                        responsive
                        customStyles={{
                            headRow: { style: {borderTopLeftRadius:'20px', borderTopRightRadius:'20px', border: 'none'}},
                            table: { style:{ border:'1.5px #070C33 solid', height: '800px', borderRadius: '20px', backgroundColor: '#070C33'}},
                            headCells: {style:{backgroundColor:'#FFFFF', color:'#00000', fontWeight: '700', fontFamily:'Roboto', fontSize: '24px'}},  
                            rows:{style: {fontSize:'24px', fontWeight:'400', fontFamily: 'Roboto', paddingTop: '16px', paddingBottom:'16px'}}  
                        }}
                    />
                </>
            ) : mostrarAddEmpleado ? (
                <div className="agregar-empleado-panel">
                    <AgregarEmpleado onRegresar={() => setMostrarAddEmpleado(false)}/>   
                </div>
            ) : (
                <div className="editar-empleado-panel">
                    <EditarEmpleado onRegresar={() => {
                                                            setEmpleadoSeleccionado(null); 
                                                            setMostrarEditarEmpleado(false);
                                                            showData();}} 
                                    empleadoPk={empleadoSeleccionado} 
                                    />
                </div>
             )}
        </div>
    )
}

export default EmpleadosPanel;
