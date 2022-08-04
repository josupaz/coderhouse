import React, { useState } from 'react';
import './styles.css';

const ItemCount = ({ stock, onAdd}) => {

    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAdd = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    return (
        <div className='container-count'>
            <div className='buttons'>
                <button onClick={handleDecrement} type="button" className="btn btn-danger btn-sm"> - </button>
                <span>  {quantity}  </span>
                <button onClick={handleAdd} type="button" className="btn btn-primary btn-sm"> + </button>
            </div>
            <button onClick={()=> onAdd(quantity) } type="button" className="btn btn-success btn-sm">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;