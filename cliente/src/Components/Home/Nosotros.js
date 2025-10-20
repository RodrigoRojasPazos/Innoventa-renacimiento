import 'bootstrap/dist/css/bootstrap.min.css';
import VectorPalomita from "../../Assets/Img_Home_new/Vectordepalomita.png";
import venta1 from "../../Assets/Img_Home_new/venta1.png";
import './css/Nosotros.css';
import { Link } from 'react-router-dom';


function Nosotros() {
  return (
    <section className="sales-section" id='nosostros1'>
      <div className="header-content">
        <h1 className="main-title">Vender nunca fue tan fácil</h1>
        <p className="subtitle">Olvídate de capacitaciones y problemas con tu sistema</p>
      </div>
      <img
        loading="lazy"
        src={venta1}
        className="hero-image"
        alt="Sistema de punto de venta"
      />
      <div className="features-container">
        <h2 className="features-title">Punto de venta eficiente</h2>
        <div className="feature-item">
          <img
            loading="lazy"
            src={VectorPalomita}
            className="feature-icon"
            alt="Intuitivo"
          />
          <p className="feature-text">Intuitivo y fácil de usar</p>
        </div>
        <div className="feature-item">
          <img
            loading="lazy"
            src={VectorPalomita}
            className="feature-icon"
            alt="Teclado numérico"
          />
          <p className="feature-text">Teclado numérico eficiente</p>
        </div>
        <div className="feature-item">
          <img
            loading="lazy"
            src={VectorPalomita}
            className="feature-icon"
            alt="Métodos de pago"
          />
          <p className="feature-text">Métodos de pago flexibles</p>
        </div>
        <div className="feature-item">
          <img
            loading="lazy"
            src={VectorPalomita}
            className="feature-icon"
            alt="Resumen"
          />
          <p className="feature-text">Todo Resumido</p>
        </div>
        <div className="cta-wrapper">
          <Link to={"/login"}>
            <button className="cta-button" tabIndex="0">Comenzar</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Nosotros;
