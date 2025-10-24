import "./css/Descuentos.css";
import Logo from "../../Assets/Logo/logo-login.png"

function Descuentos(){

    return(
        <div className="popup-container .fondo-oscuro">

            <div className="promo-section">
                <div>
                    <p className="modal-nuevo">Ingresa el siguiente código de descuento</p>
                    <div className="coupon-code">IV583PV2024</div>
                    <p className="coupon-title">¡Ofertas Relámpago!</p>
                    <div className="discount-percentage">20%</div>
                    <p className="discount-description">
                        De descuento <br/>
                        al obtener tu membresía premium
                    </p>
                    <img src={Logo} alt="InnoVenta Logo"/>
                </div>
            </div>

            <div className="content-section">
                <h1>Prepárate para una Navidad de éxito masivo</h1>
                <h2>"Más clientes. Más ventas. Más Navidad".</h2>
                <p>¡Haz que esta Navidad sea la mejor para tu negocio! Eleva tus ventas con InnoVenta Premium y asegura el éxito en la temporada.</p>
                <div className="button-row">
                    <div className="expiry-date">Finaliza 30/12</div>
                    <button className="cta-button-2">Obtener</button>
                </div>
            </div>
        </div>
    )
}

export default Descuentos;
