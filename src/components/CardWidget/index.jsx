import React from "react";
import "./styles.css";
import cart from '../../assets/images/cart.png';


const CartWidget = () => {


  return (
    <>
    <img className="cart" alt="cart-widget" src={cart} width="60" height="40" />
    </>
  );
};

export default CartWidget;
