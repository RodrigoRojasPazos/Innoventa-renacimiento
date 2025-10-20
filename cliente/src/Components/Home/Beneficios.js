import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Casos.css';
import Vector from "../../Assets/Img_Home_new/Vector.png"
import Vector2 from "../../Assets/Img_Home_new/Vector2.png"
import Vector3 from "../../Assets/Img_Home_new/Vector3.png"
import './css/Beneficios.css'

 
function Beneficios(){
    return(
        <div className="innoventa-container" id='beneficios'>
            <h1 className="innoventa-title">Beneficios de Innoventa Punto de Venta</h1>
            <div className="innoventa-cards-container row">
                <div className="innoventa-card col-12">
                    <img src={Vector} alt="Imagen 1" className="innoventa-card-image"/>
                    <h3 className="innoventa-card-title">Fácil De Usar</h3>
                    <p className="innoventa-card-description">Interfaz Intuitiva Que Te Permite A Ti Y A Tus Empleados Comenzar A Operar Rápidamente.</p>
                </div>
                <div className="innoventa-card col-12">
                    <img src={Vector2} alt="Imagen 1" className="innoventa-card-image"/>
                    <h3 className="innoventa-card-title">El Mejor Soporte</h3>
                    <p className="innoventa-card-description">Equipo De Soporte Disponible Todos Los Días Para Atender Cualquier Duda O Problema.</p>
                </div>
                <div className="innoventa-card col-12">
                    <img src={Vector3} alt="Imagen 1" className="innoventa-card-image"/>
                    <h3 className="innoventa-card-title">Gestiona</h3>
                    <p className="innoventa-card-description">Minimiza Errores Y Asegura Que Cada Orden Sea Exacta = Cliente Feliz.</p>
                </div>
            </div>
        </div>
    )
}

export default Beneficios;
