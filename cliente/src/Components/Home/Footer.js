import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Footer.css';
import logo from '../../Assets/Img_Home/footer-mobile.png'

function Footer(){
    return(
        <footer className="footer " id='footer'>
            <div className="container py-5 prueba-footer">
                <div className="row mx-md-5 mx-5">
                    <div className="col-12 d-md-none">
                        <img src={logo} alt="Imagen 1" className="logo-mobile d-md-none"/>
                        <p className="logo-footer-mobiler d-md-none">nnoventa</p>
                    </div>
                    <div className="col-md-3 mb-3">
                        <p className="text-white footer-izq">Menú</p>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Inicio</a></li>
                            <li><a href="#" className="footer-link">Registro</a></li>
                            <li><a href="#" className="footer-link">Demo</a></li>
                            <li><a href="#" className="footer-link">Membresía</a></li>
                            <li><a href="#" className="footer-link">Descuentos</a></li>
                        </ul>
                    </div>
                    <div className="col-md-5 mb-3">
                        <p className="text-white footer-cen">Contáctanos</p>
                        <div className="d-flex gap-5">
                            <a><i className="bi bi-facebook social-icon"></i></a>
                            <a><i className="bi bi-instagram social-icon"></i></a>
                            <a><i className="bi bi-twitter-x social-icon"></i></a>
                        </div>
                        <p className="text-white mt-4 footer-subtext d-none d-md-block">
                            InnoVenta                        
                        </p>
                        <p className="footer-text">
                        Somos un equipo desarrollador, con el objetivo de ayudar a cubir la mayor cantidad de necesidades que
                        pueden afrontar las empresas y requerir automatizar procesos con mayor efectividad en un sistema.
                        </p>
                    </div>

                    <div className="col-md-4 col-12 mb-3">
                        <p className="text-white footer-cen">Suscríbete</p>
                        <p className="text-white footer-der">Suscríbete para recibir notificaciones</p>
                        <form className="">
                            <input type="email" className="form-control me-2" placeholder="Correo electrónico"/>
                      
                            <button type="submit" className="btn btn-warning-footer">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
