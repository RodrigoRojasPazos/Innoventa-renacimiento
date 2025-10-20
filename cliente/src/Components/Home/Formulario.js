import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './css/Formulario.css';
 
function Formulario(){
    return(
        <div className="mt-5 formulario">
    <h1>Te contactamos</h1>
    <form className="">
        <div className="mb-3">
            <label for="nombre" className="form-label">Nombre(s):</label>
            <input type="text" className="form-control" id="nombre"/>
        </div>
        <div className="mb-3">
            <label for="apellido" className="form-label">Apellido(s):</label>
            <input type="text" className="form-control" id="apellido"/>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email"/>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password"/>
        </div>
        <button type="submit" className="btn btn-primary btn-enviar">Enviar</button>
      </form>
</div>
    
    )
}

export default Formulario;


