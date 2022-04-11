import React from 'react';
import './styles.css'

const CartProduct = ({ deleteProduct, product  }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        deleteProduct(product);
    }

    return (
        <div className="cartproduct">
            <img className='imagen' src={product.image} alt="cart-img" width={'100px'} />
            <h2>Cantidad: {product.quantity}</h2>
            <h2 style={{width: "20%"}}>{product.title}</h2>
            <h2>Valor Unitario: ${product.price}</h2>
            <h2>Valor x Cantidad: ${product.price * product.quantity}</h2>
            <button  onClick={onSubmit} className='btn btn-large btn-danger'>X</button>
        </div>
    )
}

export default CartProduct;



