import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Presentacion.css';
import { Button } from 'bootstrap';
import imagen1 from "../../Assets/Img_Home/imagen1_editada_presentacion.JPG"
import imagen2 from "../../Assets/Img_Home/imagen2_editada.JPG"
import imagen3 from "../../Assets/Img_Home/presentacion-imagen.jpg"
import { Link as ScrollLink } from 'react-scroll';
import imagen1mobile from "../../Assets/Img_Home/presentacion-mobile.jpg"
import imagen2mobile from "../../Assets/Img_Home/presentacion-mobile2.jpg"
import imagen3mobile from "../../Assets/Img_Home/presentacion-mobile3.jpg"
import { Link } from 'react-router-dom';


function Presentacion(){

    const handleOpenMenus = () => {
        console.log("Botón de abrir menú clickeado");
    };

    return(
        <div className="presentacion-fondo">
            <div className="container mx-[252px]">
                <div className="row align-items-center mx-md-3">        
                    <div className="col-md-7 col-12 text-left">
                        <p className="display-4 presentacion-title prueba ">Gestiona tu negocio como<br/>un profesional.</p>
                        <p className="presentacion-text  d-none d-md-block">InnoVenta: Gestión que se adapta, resultados que<br/>crecen.</p>

                        <p className="presentacion-text d-md-none d-md-block">InnoVenta: Gestión que se adapta, resultados que crecen.</p>
                        
                        <p className="presentacion-subtext1 ">La solución definitiva para restaurantes: controla ventas,<br/> automatiza pago, gestiona inventarios y accede a reportes.</p>
                        
                        <Link to={"/login"}>
                            <button className="btn btn-warnings" onClick={handleOpenMenus}>Probar Gratis Ahora</button>
                        </Link>
                        
                        <ScrollLink
                            to="footer"
                            smooth={true}
                            duration={1500}
                        >
                            <button className="btn btn-warnings-2" onClick={handleOpenMenus}>Contáctanos</button>
                        </ScrollLink>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="image-grid">                  
                            <img src={imagen1} alt="Imagen 1" className="grid-image presentacion-imagen-1 d-none d-md-block"/>
                            <img src={imagen1mobile} alt="Imagen 1" className="grid-image presentacion-imagen-1-mobile d-md-none w-100"/>

                            <img src={imagen2} alt="Imagen 2" className="grid-image presentacion-imagen-2 d-none d-md-block"/>
                            <img src={imagen2mobile} alt="Imagen 1" className="grid-image presentacion-imagen-2-mobile d-md-none w-100"/>

                            <img src={imagen3} alt="Imagen 3" className="grid-image presentacion-imagen-3 d-none d-md-block"/>
                            <img src={imagen3mobile} alt="Imagen 1" className="grid-image presentacion-imagen-3-mobile d-md-none w-100"/>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default Presentacion;
