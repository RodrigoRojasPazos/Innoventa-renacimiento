﻿import ClientAxios from "../../../../Config/axios";
import React, { useEffect, useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Swal from "sweetalert2";
import AgregarRol from "./agregar-roles";
import EditarRol from "./EditarRol"; // Importa el componente EditarRol

function RolesPanel() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [mostrarAddEmpleado, setMostrarAddEmpleado] = useState(false);
    const [editarRolId, setEditarRolId] = useState(null); 
    const [visibleColumns, setVisibleColumns] = useState([
        "Nombre",
        "Descripcion",
        "Opciones",
    ]);
    const [tableKey, setTableKey] = useState(0);

    const URL = `${process.env.REACT_APP_API_URL || '/api'}/getRoles`;

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUsers(data);
    };

    const deletEmpleado = async (id) => {
        try {
            await ClientAxios.delete(`/delRol/${id}`);
            setUsers((prevUsers) => prevUsers.filter((row) => row.pk_rol !== id));
            showData();
        } catch (error) {
            console.error("Error al eliminar el empleado: ", error);
            Swal.fire('Error', 'Error al eliminar el ro', 'error');
        }
    };

    const mostrarAlerta = (id) => {
        Swal.fire({
            title: "Advertencia",
            text: "¿Está seguro que desea eliminar este empleado?",
            icon: "warning",
            confirmButtonText: "Aceptar",
            showCancelButton: true,
            cancelButtonColor: "Red",
            cancelButtonText: "Cancelar",
        }).then((response) => {
            if (response.isConfirmed) {
                deletEmpleado(id);
                Swal.fire("Éxito", "El empleado se eliminó correctamente.", "success");
            }
        });
    };

    const allColumns = [
        {
            name: "ID",
            selector: (row) => row.pk_rol,
            center: true,
            sortable: true,
            id: "ID",
            width: "90px",
        },
        {
            name: "Nombre",
            selector: (row) => row.rol_nombre,
            sortable: true,
            center: true,
            id: "Nombre",
            width: "200px",
        },
        {
            name: "Descripcion",
            selector: (row) => row.rol_descripcion,
            center: true,
            sortable: true,
            id: "Descripcion",
        },
        {
            name: "Opciones",
            cell: (row) => (
                <div style={{ display: "flex", gap: "10px" }}>
                    <button
                        className="edit-btn-button"
                        onClick={() => setEditarRolId(row.pk_rol)}
                    >
                        Editar
                    </button>
                    <button
                        className="delete-btn-button"
                        onClick={() => mostrarAlerta(row.pk_rol)}
                    >
                        Eliminar
                    </button>
                </div>
            ),
            ignoreRowClick: true,
            id: "Opciones",
            width: "350px",
        },
    ];

    const columns = useMemo(() => {
        return allColumns.filter((col) => visibleColumns.includes(col.id));
    }, [visibleColumns]);

    const handleColumnToggle = (columnId) => {
        setVisibleColumns((prevState) => {
            if (prevState.includes(columnId)) {
                return prevState.filter((col) => col !== columnId);
            } else {
                return [...prevState, columnId];
            }
        });
        setTableKey((prevKey) => prevKey + 1); // Forzar re-render
    };
    

    useEffect(() => {
        showData();
    }, []);

    return (
        <div className="empleado-panel">
            {!mostrarAddEmpleado && editarRolId === null ? (
                <>
                    <div className="header-empleados">
                        <p className="titulo-dashboard-empleado">Lista de roles de usuarios</p>
                        <button
                            className="add-btn-button"
                            onClick={() => setMostrarAddEmpleado(true)}
                        >
                            Agregar nuevo rol
                        </button>
                    </div>

                    <div className="columnas-btn">
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Seleccionar columnas"
                            variant="secondary"
                            className="columnas-btns"
                            style={{ marginLeft: "10px" }}
                        >
                            {allColumns.map((col) => (
                                <Dropdown.Item key={col.id}>
                                    <label className="columnas-btn-contenido">
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.includes(col.id)}
                                            onChange={() => handleColumnToggle(col.id)}
                                            style={{ marginRight: "5px" }}
                                        />
                                        {col.name}
                                    </label>
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </div>

                    <DataTable
                        key={tableKey}
                        columns={columns}
                        data={users}
                        paginationPerPage={9}
                        pagination
                        highlightOnHover
                        responsive
                        customStyles={{
                            headRow: {
                                style: {
                                    borderTopLeftRadius: "20px",
                                    borderTopRightRadius: "20px",
                                    border: "none",
                                },
                            },
                            table: {
                                style: {
                                    border: "1.5px #070C33 solid",
                                    height: "800px",
                                    borderRadius: "20px",
                                    backgroundColor: "#070C33",
                                    width: "1410px",
                                },
                            },
                            headCells: {
                                style: {
                                    backgroundColor: "#FFFFF",
                                    color: "#00000",
                                    fontWeight: "700",
                                    fontFamily: "Roboto",
                                    fontSize: "24px",
                                },
                            },
                            rows: {
                                style: {
                                    fontSize: "24px",
                                    fontWeight: "400",
                                    fontFamily: "Roboto",
                                    paddingTop: "16px",
                                    paddingBottom: "16px",
                                },
                            },
                        }}
                    />
                </>
            ) : mostrarAddEmpleado ? (
                <div className="agregarRol">
                    <AgregarRol onRegresar={() => setMostrarAddEmpleado(false)} />
                </div>
            ) : (
                <div className="editarRol">
                    <EditarRol onRegresar={() => setEditarRolId(null)} rolId={editarRolId} />
                </div>
            )}
        </div>
    );
}

export default RolesPanel;
