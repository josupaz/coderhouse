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
      console.log("Terminó la compra")
      addItem(product, quantity);
      navigate('/cart');
  }



  return (
    <div className="container">
      <div className="detail">
      <img className="img" src={product.image} alt="product-img" />
        <h2>{product.title}</h2>
        <h2>Descripcion: {product.description}</h2>
      </div>
      <div>
        {displayItemCount ? <ItemCount stock={stock} onAdd = {onAdd} /> : 
        <button onClick={handleTerminate} className="btn btn-primary"> Finalizar compra </button>
        }
        
      </div>
    </div>
  );
};

export default ItemDetail;
