import React from 'react'
import ItemCount from '../ItemCount';
import './styles.css'
function Item(props) {
    const stock = 10;

    const onAdd = (count) => {
        console.log(`Se agregaron ${count} productos al carrito`);
    } 

  return (
      <div className="tarjetaProducto col-sm-4">
        <div className="card minheight ">
          <div className="card-header">
            {props.title}
          </div>
          <div className="card-body">
            <img src={props.image} className="product-image" alt={props.title} />
          </div>
          <div className="card-footer text-muted">
            <p>Precio: <em><span>${props.price}</span></em></p>
          </div>
          <ItemCount {...stock}/>
        </div>

      </div>
  )
}

export default Item;