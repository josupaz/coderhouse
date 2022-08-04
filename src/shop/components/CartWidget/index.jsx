import React, { useContext } from "react";
import "./styles.css";
import cartimg from '../../../assets/images/cart2.png';
import { useNavigate } from "react-router-dom";
import { Shop } from '../../../context/ShopProvider';



const CartWidget = () => {
  const { cart } = useContext(Shop)
  const length = cart.length;
  const navigate = useNavigate();       


  const goToCart = () =>{
    if(length){
      navigate(`/cart`); 
    }else{
      navigate(`/cartempty`)
    }

  } 

  return (
    <div className="cart">
    <button className="cart-button" onClick={goToCart}>
    <img className="cart" alt="cart-widget" src={cartimg} width="60" />
    </button>
    <h2 className="h2-cart">{length}</h2>
    </div>
  );
};

export default CartWidget;
