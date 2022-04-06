import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount";

import "./styles.css";

const ItemDetail = ({ product }) => {
    const stock = 10;
    const navigate = useNavigate;
    const [displayItemCount, setDisplayItemCount] = useState(true);

    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`);
        setDisplayItemCount(false);
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
        <button onClick={() => navigate(`/cart`)} className="btn btn-primary"> Finalizar compra </button>
        }
        
      </div>
    </div>
  );
};

export default ItemDetail;
