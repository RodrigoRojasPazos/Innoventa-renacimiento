import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Casos.css';
import imagen13 from '../../Assets/Img_Home/caso2-editada.JPG';
import imagen7 from '../../Assets/Img_Home/caso1-editada.JPG';
import imagen14 from '../../Assets/Img_Home/caso3-editada.JPG';
import { Link } from 'react-router-dom';
 
function Casos(){
    return(
        <div className="fondo-casos" id='casos'>
            <div className="seccion-casos py-5 ">
                <div className="container text-center">
                    <p className="caso-top-text d-none d-md-block">Innoventa Premium</p>
                    <p className="titulo-seccion-caso d-none d-md-block">Restaurantes que Crecen con InnoVenta</p>
                    <p className="titulo-seccion-caso d-md-none d-md-block">Restaurantes que Crecen con <span className="caso-mobile-color">InnoVenta</span></p>
                    <p className="subtitulo-seccion-caso">¿Quieres que tu restaurante sea nuestro próximo caso de éxito?</p>
        
                    <div className="row justify-content-center ">

                        <div className="col-md-4 mb-4">
                            <div className="card caso-card">
                                <img src={imagen7} alt="Parrilla La Tradición" className="card-img-top rounded-circle mx-auto mt-3 caso-img"/>
                                <div className="card-body">
                                    <p className="card-title-caso">Parrilla La Tradición</p>
                                    <p className="card-text"><strong className="caso-alert">20%</strong> de Reducción en</p>
                                    <p className="card-text2">Pérdidas de Inventario</p>
                                    <i className="bi bi-clipboard2-data caso-icon"></i>
                                    <p className="card-text">Calificación de <strong className="caso-alert">4.8/5</strong> en</p> 
                                    <p className="card-text2">Reseñas</p>
                                    <p className="btn btn-link caso-link">Ver Historia Completa</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card caso-card">
                                <img src={imagen13} alt="Cafetería La Playa" className="card-img-top rounded-circle mx-auto mt-3 caso-img"/>
                                <div className="card-body">
                                    <p className="card-title-caso">Cafetería La Playa, Cancún, México</p>
                                    <p className="card-text">Disminución del <strong className="caso-alert">15%</strong> en</p>
                                    <p className="card-text2">tiempos de espera</p>
                                    <i className="bi bi-alarm-fill caso-icon"></i>
                                    <p className="card-text">Incremento del <strong className="caso-alert">20%</strong> por</p>
                                    <p className="card-text2">Ventas Matutinas</p>
                                    <p className="btn btn-link caso-link">Ver Historia Completa</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card caso-card">
                                <img src={imagen14} alt="Bistró Gourmet" className="card-img-top rounded-circle mx-auto mt-3 caso-img"/>
                                <div className="card-body">
                                    <p className="card-title-caso">Bistró Gourmet</p>
                                    <p className="card-text"><strong className="caso-alert">40%</strong> Optimización en </p>
                                    <p className="card-text2">Pérdidas por Exceso de Stock</p>
                                    <i className="bi bi-exclamation-circle-fill caso-icon"></i>
                                    <p className="card-text"><strong className="caso-alert">20%</strong> menos en gastos</p>
                                    <p className="card-text2">operativos</p>
                                    <p className="btn btn-link caso-link">Ver Historia Completa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={"/pagosTarjeta"}>
                    <button className="btn btn-warning-caso mt-4">Membresía</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Casos;
