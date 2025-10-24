import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Planes.css';
import { Link } from 'react-router-dom';

function Planes(){
    return(
        <div className=" fondo-planes" id='planes'>
            <div className="container py-md-5 py-2 text-center prueba-plan">
                <h1 className="plan-title">Elige el plan perfecto para ti</h1>
                <p className="text-center plan-subtitle">Empieza con total tranquilidad. Si cambias de idea, tenemos garantía de reembolso por 30 días.</p>
                
                <div className="row justify-content-center  g-1 ">
                    <div className="col-md-4 mb-4 col-12 card-basic justify-content-center">
                        <div className="card shadow pricing-card basic-plan-card-completa">
                            
                            <div className="basic-plan-header text-uppercase fw-bold"><p></p></div>
                            <div className="card-body text-center price-section-basic">
                                <p className="plan-title-basic">BÁSICO</p>
                                <p className="price-basic my-3">$0 US</p>
                                
                            </div>
                            
                            <ul className="feature-list">
                                <li className="plan-list d-flex"><div className="col-10">Asignación de roles limitada</div><div className="col-2"><i className="bi bi-x icon-cancel-plan"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Acceso limitada al inventario</div><div className="col-2"><i className="bi bi-x icon-cancel-plan"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Reportes avanzados</div><div className="col-2"><i className="bi bi-x icon-cancel-plan"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Supervisión de ventas básica</div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Reportes básicos de ventas</div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Actualización manual de<br/>productos</div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>                               
                                <div>
                                    <Link to={"/login"} className="btn custom-btn">
                                        Comenzar
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>
        
                    <div className="col-md-4 mb-4 col-12 card-premiun justify-content-center">
                        <div className="card shadow pricing-card">
                            <div className="pro-plan-header text-uppercase fw-bold">Más Populares</div>
                            <div className="card-body text-center price-section-premiun">
                                <h3 className="plan-title-basic">PREMIUN</h3>
                                <p className="price-basic my-2">$50 US</p>
                                <p className="billing-text">Ahorro aproximado del 20%</p>
                                <p className="billing-text2">Por usuario al mes, facturado anualmente*</p>
                            </div>
                            <ul className="feature-list">
                                <li className="plan-list d-flex"><div className="col-10">Gestión avanzada de roles y<br/>permisos</div><div className="col-2"><i className="bi bi-check-lg icon-check-plan"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Gestión completa del<br/> inventario<br/><p className="plan-list-subtext">añadir, modificar y eliminar productos</p></div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Informes de ventas y<br/>productos<br/><p className="plan-list-subtext">(diarios, semanales y mensulaes)</p></div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Notificaciones de stock en<br/>tiempo real</div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Acceso a informes avanzados</div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Modificación rápida de<br/>precios y promociones</div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                
                                <div>
                                    <Link to={"/pagosTarjeta"} className="btn custom-btn">
                                        Membresía
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 card-elite justify-content-center">
                        <div className="card shadow pricing-card basic-plan-card-completa">
                            <div className="elite-plan-header text-uppercase fw-bold"><p></p></div>
                            <div className="card-body text-center price-section-elite">
                            
                                <p className="plan-title-basic">ÉLITE</p>
                                <p className="price-elite">(Personalizada)</p>
                                <a href="#" className="billing-text-elite">Contáctanos para Cotización</a>
                                <p className="billing-text-elite2">Hecho a la Medida de tu Marca</p>
                            </div>

                            <ul className="feature-list">
                                <li className="plan-list d-flex"><div className="col-10">Incluye todas las<br/>funcionalidades de <strong className="alert-text-caso">Premiun</strong></div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Personalización de diseño<br/><p className="plan-list-subtext">Adaptación de colores, logos y temas para reflejar la imagen de tú restaurante</p></div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Integración avanzada<br/><p className="plan-list-subtext">Opciones de Integración con otros sistemas de ventas o inventario</p></div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <li className="plan-list d-flex"><div className="col-10">Soporte exclusivo<br/><p className="plan-list-subtext">Atención personalizada para implementarfunciones adicionales</p></div><div className="col-2"><i className="bi bi-check-lg icon-check-plan mt-5"></i></div></li>
                                <div>
                                    <Link to={"/pagosTarjeta"} className="btn custom-btn">
                                        Membresía
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Planes;
