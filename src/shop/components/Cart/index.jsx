import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../../context/ShopProvider';
import CartProduct from '../CartProduct';
import Checkout from '../Checkout';
import './styles.css';

const Cart = () => {
  const navigate = useNavigate();           
  const { cart, sumaTotal, clear, deleteProduct } = useContext(Shop)
  const [suma, setSuma] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setSuma(sumaTotal())
  }, [sumaTotal])

  const handleCheckout = () => {
    if(suma === 0){
      alert("No posee productos en el carrito!")
      navigate(`/`);
    }else{
      setModal(true);
    }

  }

  const handleClose = () => {
    setModal(false)
  }

  return (
    <div className="container">
      {cart.map(item => <CartProduct deleteProduct={deleteProduct}product={item} key={item.id} />)}
      <h3>Total: {suma}</h3>
      <button className='btn btn-primary m-2' onClick={handleCheckout}>Checkout</button>
      {modal && <Checkout
        handleClose={handleClose}
        cart={cart}
        total={suma}
        clear={clear}
      />}
    </div>
  )
}

export default Cart