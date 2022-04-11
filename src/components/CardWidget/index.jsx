import React, { useContext } from "react";
import "./styles.css";
import cartimg from '../../assets/images/cart.png';
import { useNavigate } from "react-router-dom";
import { Shop } from '../../context/ShopProvider';



const CartWidget = () => {
  const { cart } = useContext(Shop)
  const length = cart.length;
  const navigate = useNavigate();       


  const goToCart = () =>{
    navigate(`/cart`); 
  } 

  return (
    <>
    <button onClick={goToCart}>
    <img className="cart" alt="cart-widget" src={cartimg} width="60" height="40" />
    <h2>{length}</h2>
    </button>
    </>
  );
};

export default CartWidget;
