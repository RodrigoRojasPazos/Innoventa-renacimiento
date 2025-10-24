import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardLayout({ children, activeView, onViewChange, userRole = "admin" }) {
    const [isMenuActive, setMenuActive] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    // Menús según rol
    const menuItems = {
        admin: [
            { id: 'ordenes', label: 'Ordenar', icon: 'fa-list' },
            { id: 'inventario', label: 'Inventario', icon: 'fa-box' },
            { id: 'usuarios', label: 'Usuarios', icon: 'fa-user' },
            { id: 'reportes', label: 'Reportes', icon: 'fa-chart-bar' },
        ],
        supervisor: [
            { id: 'ordenes', label: 'Ordenar', icon: 'fa-list' },
            { id: 'inventario', label: 'Inventario', icon: 'fa-box' },
            { id: 'usuarios', label: 'Usuarios', icon: 'fa-user' },
            { id: 'reportes', label: 'Reportes', icon: 'fa-chart-bar' },
        ],
        cajero: [
            { id: 'ordenes', label: 'Ordenar', icon: 'fa-list' },
            { id: 'inventario', label: 'Inventario', icon: 'fa-box' },
            { id: 'cobro', label: 'Cobro', icon: 'fa-cash-register' },
        ],
        mesero: [
            { id: 'ordenes', label: 'Ordenar', icon: 'fa-list' },
            { id: 'inventario', label: 'Inventario', icon: 'fa-box' },
        ],
    };

    const currentMenu = menuItems[userRole] || menuItems.admin;

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className={`w-48 bg-[#1a2744] text-white flex flex-col fixed h-screen left-0 top-0 overflow-y-auto transition-transform duration-300 z-50 ${isMenuActive ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                {/* Logo */}
                <div className="p-4 flex items-center gap-2">
                    <div className="flex flex-col gap-0.5">
                        <div className="flex gap-0.5">
                            <div className="w-1 h-3 bg-yellow-400"></div>
                            <div className="w-1 h-3 bg-yellow-400"></div>
                        </div>
                        <div className="flex gap-0.5">
                            <div className="w-1 h-3 bg-yellow-400"></div>
                            <div className="w-1 h-3 bg-yellow-400"></div>
                        </div>
                        <div className="flex gap-0.5">
                            <div className="w-1 h-3 bg-yellow-400"></div>
                            <div className="w-1 h-3 bg-yellow-400"></div>
                        </div>
                    </div>
                    <span className="text-xl font-semibold text-yellow-400">InnoVenta</span>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 px-3 py-6 space-y-2">
                    {currentMenu.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onViewChange(item.id)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition w-full text-left ${
                                activeView === item.id 
                                    ? 'bg-yellow-400 text-[#1a2744] font-medium' 
                                    : 'hover:bg-[#2a3854]'
                            }`}
                        >
                            <i className={`fas ${item.icon}`}></i>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                {/* Logout Button */}
                <div className="p-3">
                    <button 
                        onClick={handleLogout} 
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#2a3854] transition w-full text-left"
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Salir</span>
                    </button>
                </div>
            </aside>

            {/* Overlay para móvil */}
            {isMenuActive && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setMenuActive(false)}
                />
            )}

            {/* Main Content Area */}
            <main className="flex-1 overflow-auto md:ml-48">
                {/* Top Bar */}
                <header className="bg-[#1a2744] text-white px-8 py-4 flex justify-end items-center">
                    <button 
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#2a3854] transition-colors md:hidden mr-auto"
                        onClick={() => setMenuActive(!isMenuActive)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="flex items-center gap-2">
                        <span>
                            {userRole === 'admin' ? 'Admistrador' : userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                        </span>
                        <i className="fas fa-user-circle text-2xl"></i>
                    </div>
                </header>

                {/* Content */}
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default DashboardLayout;
