import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount";
import { Shop } from "../../context/ShopProvider"

import "./styles.css";

const ItemDetail = ({ product }) => {
    const navigate = useNavigate();
    const {addItem} = useContext(Shop);

    const [displayItemCount, setDisplayItemCount] = useState(true);
    const [quantity, setQuantity] = useState(0);


    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`);
        setQuantity(quantity);
        addItem(product, quantity);
        setDisplayItemCount(false);
    }

    const finalizarCompra = () => {
      navigate('/cart');
    }

    const goHome = () => {
      navigate('/');
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
          <div className="container-buttons">
          <button onClick={finalizarCompra} className="btn btn-primary"> Finalizar compra </button>
          <button onClick={goHome} className="btn btn-primary"> Seguir navegando </button>
          </div>
        </>
        }
      </div>
    </div>
  );
};

export default ItemDetail;
