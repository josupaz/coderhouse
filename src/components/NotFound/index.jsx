import React from 'react'
import { useNavigate } from 'react-router-dom';
import robot from "../../assets/images/robot.png";

const NotFound = () => {
  const navigate = useNavigate();
  
  const goHome = () => {
    navigate('/');
  }

  return (
    <div>
        <h2>Algo no ha salido bien: Ruta no encontrada</h2>
        <img src={robot} alt="img-SM" width="300" height="300" />
        <button onClick={goHome} className="btn btn-primary"> Seguir navegando </button>
    </div>
  )
}

export default NotFound

