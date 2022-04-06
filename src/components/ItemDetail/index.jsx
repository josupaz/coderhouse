import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount";
import { Cart } from "../../context/CartContext"

import "./styles.css";

const ItemDetail = ({ product }) => {
    const stock = 10;
    const navigate = useNavigate();
    const {addItem} = useContext(Cart);

    const [displayItemCount, setDisplayItemCount] = useState(true);
    const [quantity, setQuantity] = useState(0);


    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`);
        setQuantity(quantity);
        setDisplayItemCount(false);
    }

    const handleTerminate = () => {
      addItem(product, quantity);
      navigate('/cart');
  }



  return (
    <div className="container">
      <img className="img" src={product.image} alt="product-img" />
      <div className="detail">
        <h2>{product.title}</h2>
        <h2>Descripcion: {product.description}</h2>
        <h3>Precio: {product.price}</h3>
      </div>
      <div>
        {displayItemCount ? <ItemCount stock={product.stock} onAdd = {onAdd} /> : 
        <>
          <h2> Se agrego {quantity} producto/s al carrito</h2>
          <button onClick={handleTerminate} className="btn btn-primary"> Finalizar compra </button>
        </>
        }
      </div>
    </div>
  );
};

export default ItemDetail;
