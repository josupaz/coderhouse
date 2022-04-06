import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'


function Item(product) {

    const navigate = useNavigate();
    
  return (
      <div className="tarjetaProducto col-sm-4">
        <div className="card minheight ">
          <div className="card-header">
            {product.title}
          </div>
          <div className="card-body">
            <img src={product.image} className="product-image" alt={product.title} />
          </div>
          <div className="card-footer text-muted">
            <p>Precio: <em><span>${product.price}</span></em></p>
            
          </div>
          <button onClick={() => navigate(`/product/${product.id}`)}> Detalle </button>
        </div>

      </div>
  )
}

export default Item;