import React, { useState } from "react";
import DashboardLayout from "./Layout/DashboardLayout";
import EmpleadosPanel from "./Empleados/Empleados";
import UsuariosPanel from "./Usuarios/Usuarios";
import InventarioPanel from "./Inventario/Inventario.js";
import PagosPanel from "./Pagos/Pagos.js";
import PlatillosPanel from "./Platillos/Platillo.js";
import OrdenesVentasPanel from "./Ordenes/Ordenes_Ventas.js";
import ReportePanel from "./Reports/Reporte.js";
import RolesPanel from "./Roles/roles.js";
import Graficas from "./graficas.js";
import InicioDefault from "./InicioDefault.js";

function InicioAdmin(){
    const [activeView, setActiveView] = useState("inicio");

    const handleViewChange = (view) => {
        setActiveView(view);
    };


    const renderContent = () => {
        switch (activeView){
            case "inicio":
                return  <div className="">
                            <img />
                        </div>;
            case "ordenes":
                return  <div>
                            <OrdenesVentasPanel/>
                        </div>
            case "cobro":
                return  <div>
                            <PagosPanel/>
                        </div>
            case "inventario":
                return  <div>
                            <InventarioPanel/>
                        </div>
            case "platillos":
                return  <div>
                            <PlatillosPanel/>
                        </div>
            case "empleados":
                return  <div>
                            <EmpleadosPanel/>
                        </div>
            case "usuarios":
                return  <div>
                            <UsuariosPanel/>
                        </div>
            case "reportes":
                return  <div>
                            <ReportePanel/>
                        </div>
            case "roles":
                return  <div>
                            <RolesPanel/>
                        </div>
            default :
                return <div>
                            <InicioDefault/>
                        </div>
        }
    }

    return(
        <DashboardLayout 
            activeView={activeView}
            onViewChange={handleViewChange}
            userRole="admin"
        >
            {renderContent()}
        </DashboardLayout>
    )
}

export default InicioAdmin;
