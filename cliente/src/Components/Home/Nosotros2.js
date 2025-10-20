import "./css/Nosotros2.css";
import Venta2 from "../../Assets/Img_Home_new/venta2.png";
import ventaPalomi from "../../Assets/Img_Home_new/Vectordepalomita.png";
import { Link } from "react-router-dom";

function Nosotros2(){
    return(
        <section className="features-section" id="nosotros2">
            <div className="features-content">
                <h2 className="features-title">Optimiza tus transacciones</h2>
      
                <div className="feature-item">
                    <img className="feature-icon" src={ventaPalomi} alt="" />
                    <p className="feature-text">Alerta de stock bajo</p>
                </div>
      
                <div className="feature-item">
                    <img className="feature-icon" src={ventaPalomi} alt="" />
                    <p className="feature-text">Gestión sencilla</p>
                </div>
      
                <div className="feature-item">
                    <img className="feature-icon" src={ventaPalomi} alt="" />
                    <p className="feature-text">Cálculo automático</p>
                </div>
      
                <div className="feature-item">
                    <img className="feature-icon" src={ventaPalomi} alt="" />
                    <p className="feature-text">Jerarquías claras</p>
                </div>
      
                <div className="cta-wrapper">
                    <Link to={"/login"}>
                    <button className="cta-button" tabIndex="0">Comenzar</button>
                    </Link>
                </div>
            </div>
    
            <img className="feature-image" src={Venta2} alt="Interfaz de optimización de transacciones" />
        </section>
    )
}

export default Nosotros2;
