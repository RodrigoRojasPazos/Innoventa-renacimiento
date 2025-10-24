import './css/InicioDefault.css';
import Logo from "../../../Assets/Logo/logo-login.png"
import advertencia from "../../../Assets/Img_Home_new/advertencia.png";

function InicioDefault(){

    return(
        <div className="container vh-90 d-flex justify-content-center align-items-center default-container">
            <div className="text-center default-informacion">
                <div className="mb-4">
                    <img src={Logo} className='logo-default'/>
                    <p className='default-title'>Bienvenido a Innoventa</p>
                    <p className="mt-2 default-subtitle">Donde podrás:</p>
                </div>
                <div className="row row-cols-2 g-4 mb-4">
                    <div className="col columna-default">
                    <h5 className="card-title-default">Modificación rápida de precios y promociones</h5>
                        <div className="card-default text-center">
                            <div className="card-body">
                                <div className='pao'><i className="bi bi-patch-exclamation-fill logo-default"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col columna-default-2">
                    <h5 className="card-title-default ">Acceso a informes avanzados</h5>
                        <div className="card-default2  text-center">
                            <div className="card-body">
                                <div className='pao'><i className="bi bi-bar-chart-line-fill logo-default"></i></div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col columna-default">
                    <h5 className="card-title-default">Gestionar roles y permisos de tus empleados</h5>
                        <div className="card-default-3  text-center">
                            <div className="card-body">
                                <div className="pao"><i className="bi bi-file-person-fill logo-default"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col columna-default-2">
                    <h5 className="card-title-default">Administrar tu inventario y exportarla</h5>
                        <div className="card-default4 text-center">
                            <div className="card-body">
                                <div className="pao"><i className="bi bi-folder-fill logo-default"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-comenzar-default">Comenzar</button>
            </div>
        </div>
    )
}

export default InicioDefault;
