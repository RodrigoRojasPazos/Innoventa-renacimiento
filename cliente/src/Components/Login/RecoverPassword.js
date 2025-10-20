import 'bootstrap/dist/css/bootstrap.min.css';
import './RecoverPassword.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from "./logo-login.png";
import Swal from "sweetalert2";
import NavBar from '../Home/Navbar';
import Footer from '../Home/Footer';

function RecoverPassword(){
    
    const [email, setEmail] = useState("");

    const handleRecoverPassword = async (e) => {
        e.preventDefault();

        if (!email) {
            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, ingresa tu email.",
            });
            return;
        }

        try {
            // Placeholder for password recovery logic
            console.log(`Password recovery email would be sent to: ${email}`);
            Swal.fire({
                icon: "success",
                title: "Correo enviado",
                text: "Hemos enviado un enlace de recuperación a tu email.",
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Ocurrió un error al enviar el correo.",
            });
        }
    };
    

    return(
        <>
            <NavBar/>
            <div className="container-custom-repass">
                <img src={Logo} alt="Logo" className="logo-repass"/>
                <p className="reupdate-pass-title">¿Has olvidado tu contraseña?</p>
                <p className="reupdate-pass-subtitle">¡No te preocupes! Escribe tu email y recibirás instrucciones para recuperarla</p>
                <form onSubmit={handleRecoverPassword}>
                    <p className="col-12 relabel-pass-update">Email</p>
                    <input
                        type="email"
                        className="col-12 reform-control-pass"
                        placeholder="Ingresa tu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                
                    <button type="submit" className="btn rebtn-custom-pass">Recuperar contraseña</button>
                </form>
                <button className="reback-link-pass" onClick={() => window.location.href = '/login'}>
                    Volver
                </button>
            </div>
            <Footer/>
        </>
    );
}

export default RecoverPassword;
