import React from 'react'
import './styles.css';

const ItemDetail = ({product}) => {
    return (
        <div className="container">
            <img className='img'
            src={product.image}
            alt="product-img"
            />
            <div>
                <h2>{product.title}</h2>
                <h2>Descripcion: {product.description}</h2>
            </div>
        </div>
    )
}

export default ItemDetail