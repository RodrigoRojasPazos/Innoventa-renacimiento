import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Resenas.css'
import card1 from '../../Assets/Img_Home/card1-nueva.png';
import card2 from '../../Assets/Img_Home/card2-nueva.png';
import card3 from '../../Assets/Img_Home/card3-nueva.png';
import card4 from '../../Assets/Img_Home/card4-nueva.png';
import card5 from '../../Assets/Img_Home/card5-nueva.png';
import card6 from '../../Assets/Img_Home/card6-nueva.jpg';

import card1mobile from '../../Assets/Img_Home/card1-mobile.png';
import card2mobile from '../../Assets/Img_Home/card2-mobile.png';
import card3mobile from '../../Assets/Img_Home/card3-mobile.png';
import card4mobile from '../../Assets/Img_Home/card4-mobile.png';
import card5mobile from '../../Assets/Img_Home/card5-mobile.png';
import card6mobile from '../../Assets/Img_Home/card6-mobile.jpg';
 
function Resenas(){
    return(
        <div className="fondo-resenas" id='resenas'>
            <h2 className="section-title-resenas">Lea las reseñas que han dejado los usuarios del sistema InnoVenta</h2>
                <div className="row resenas">
                <div className="col-md-4 col-12 d-none d-md-block card-resena-completa">
                    <div className="review-card">
                        <div className="ajustes-card">
                            <img src={card1} alt="Foto de Alejandra Hernandez"/>
                            <p className="name-card">Paola Reyes</p>
                            <div className="stars">★★★★★</div>
                            <p className="text-card-reseña d-none d-md-block">Dueña y administradora del restaurante Rosa Negra</p>
                        </div>
                    </div>
                    <div className="d-grid gap-2 btn-mas card-pie-resenas">
                        <p className="color-btn">Más información</p>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center d-md-none prueba-mobile">
                    <div className="custom-card">
                        <img src={card1mobile} alt="Profile"/>
                        <p className="name-card-mobile-1">Paola Reyes</p>
                        <div className="star-rating">★★★★★</div>
                        <button className="info-button-mobile">Más información</button>
                    </div>
                </div>

                
        
                <div className="col-md-4  d-none d-md-block card-resena-completa">
                    <div className="review-card">
                        <div className="ajustes-card">
                            <img src={card2} alt="Foto de Raúl Gonzáles"/>
                            <p className="name-card">Raúl Gonzáles</p>
                            <div className="stars">★★★★<span className="star-off">★</span></div>
                            <p className="text-card-reseña d-none d-md-block">Dueño y administrador del restaurante Sabores del mar</p>
                        </div>
                        <div className="d-grid gap-2 btn-mas card-pie-resenas">
                            <p className="color-btn">Más información</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center d-md-none prueba-mobile">
                    <div className="custom-card">
                        <img src={card2mobile} alt="Profile"/>
                        <p className="name-card-mobile-2">Raúl Gonzáles</p>
                        <div className="star-rating">★★★★<span className="star-off">★</span></div>
                        <button className="info-button-mobile">Más información</button>
                    </div>
                </div>

                <div className="col-md-4  d-none d-md-block card-resena-completa">
                    <div className="review-card">
                        <div className="ajustes-card">
                            <img src={card3} alt="Foto de Mario y Rafael Suarez"/>
                            <p className="name-card">Mario y Rafael Suarez</p>
                            <div className="stars">★★★★★</div>
                            <p className="text-card-reseña d-none d-md-block">Dueños y administradores del restaurante Brother's Suarez</p>
                        </div>
                        <div className="d-grid gap-2 btn-mas card-pie-resenas">
                            <p className="color-btn">Más información</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center d-md-none prueba-mobile">
                    <div className="custom-card">
                        <img src={card3mobile} alt="Profile"/>
                        <p className="name-card-mobile-3">Mario y Rafael Suarez</p>
                        <div className="star-rating">★★★★★</div>
                        <button className="info-button-mobile">Más información</button>
                    </div>
                </div>

                

                <div className="col-md-4  d-none d-md-block card-resena-completa">
                    <div className="review-card">
                        <div className="ajustes-card">
                            <img src={card4} alt="Foto de Chris Jones"/>
                            <p className="name-card">Chris Jones</p>
                            <div className="stars">★★★★<span className="star-off">★</span></div>
                            <p className="text-card-reseña d-none d-md-block">Dueño y administrador del restaurante Kaajal</p>
                        </div>
                        <div className="d-grid gap-2 btn-mas card-pie-resenas">
                            <p className="color-btn">Más información</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center d-md-none prueba-mobile">
                    <div className="custom-card">
                        <img src={card4mobile} alt="Profile"/>
                        <p className="name-card-mobile-4">Chris Jones</p>
                        <div className="star-rating">★★★★<span className="star-off">★</span></div>
                        <button className="info-button-mobile">Más información</button>
                    </div>
                </div>
        
                <div className="col-md-4  d-none d-md-block card-resena-completa">
                    <div className="review-card">
                        <div className="ajustes-card">
                            <img src={card5} alt="Foto de Michael Williams"/>
                            <p className="name-card">Michael Williams</p>
                            <div className="stars">★★★★★</div>
                            <p className="text-card-reseña d-none d-md-block">Dueño y administrador del restaurante Rio’s</p>
                        </div>
                        <div className="d-grid gap-2 btn-mas card-pie-resenas">
                            <p className="color-btn">Más información</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center d-md-none prueba-mobile">
                    <div className="custom-card">
                        <img src={card5mobile} alt="Profile"/>
                        <p className="name-card-mobile">Michael Williams</p>
                        <div className="star-rating">★★★★★</div>
                        <button className="info-button-mobile">Más información</button>
                    </div>
                </div>


                <div className="col-md-4  d-none d-md-block card-resena-completa">
                    <div className="review-card">
                        <div className="ajustes-card">
                            <img src={card6} alt="Foto de Ana Martinez"/>
                            <p className="name-card">Ana Martinez</p>
                            <div className="stars">★★★★★</div>
                            <p className="text-card-reseña d-none d-md-block">Dueña y administradora del restaurante Tarasira</p>                            
                        </div>
                        <div className="d-grid gap-2 btn-mas card-pie-resenas">
                            <p className="color-btn">Más información</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center d-md-none">
                    <div className="custom-card">
                        <img src={card6mobile} alt="Profile"/>
                        <p className="name-card-mobile-2">Ana Martinez</p>
                        <div className="star-rating">★★★★★</div>
                        <button className="info-button-mobile">Más información</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resenas;
