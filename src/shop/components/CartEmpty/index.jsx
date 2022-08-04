import React from 'react'
import { useNavigate } from 'react-router-dom';
import cartempty from '../../../assets/images/cartempty.jpg';
import './styles.css'

function CartEmpty() {
  const navigate = useNavigate();  
  const goToHome = () => {
    navigate(`/`); 
  }

  return (
    <div className='container'>
      <h2 className='h2'>Su Carrito se encuentra vacio!</h2>
      <img src={cartempty} width="400"/>
      <button className="btn btn-primary btn-cart-empty" onClick={goToHome}> Continuar comprando</button>
      </div>
  )
}

export default CartEmpty