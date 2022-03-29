import React from "react";
import "./styles.css";
import cart from '../../assets/images/cart.png';


const Cart = () => {


  return (
    <>
    <img className="cart" src={cart} width="60" height="40" />
    </>
  );
};

export default Cart;
