import React, { useState } from "react";
import DashboardLayout from "../AdminPanel/Layout/DashboardLayout";
import InventarioPanel from "./Inventario/Inventario.js";
import PagosPanel from "./Pagos/Pagos.js";
import PlatillosPanel from "./Platillos/Platillo.js";
import OrdenesVentasPanel from "./Ordenes/Ordenes_Ventas.js";



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
        }
    }

    return(
        <DashboardLayout 
            activeView={activeView}
            onViewChange={handleViewChange}
            userRole="supervisor"
        >
            {renderContent()}
        </DashboardLayout>
    )
}

export default InicioAdmin;
