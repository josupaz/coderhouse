import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'


function PostOrder() {

    const navigate = useNavigate();

  
    const goHome = () => {
      navigate('/');
    }
      
  return (
      <div className="container">
          <h2>Gracias por su compra!</h2>
          <button onClick={goHome} className="btn btn-primary"> Seguir navegando </button>
      </div>
  )
}

export default PostOrder;