import React, { useState } from 'react';
import './styles.css'
import {db} from '../../Firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ handleClose, products, total, clear}) => {

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("")
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || direccion === ""){
            return
        }
        const order = {
            buyer: {
                nombre: nombre,
                direccion: direccion
            },
            items: {
                products: products
            },
            total: total
        }

        if(order.items.products !== undefined){
            const orderCollection = collection(db, 'orders');
            addDoc(orderCollection, order).then(({id})=> alert(`Order generada con id ${id}`))
            clear();
            navigate(`/postorder`);

        }else{
            alert("El carrito se encuentra vacio, volver al inicio.");
            navigate(`/`);
        }

        
    }

    return (
        <div className="modalContainer">
            <div className="modal">
                <h2>Finalizar compra</h2>
                <button
                    className='btn btn-large btn-danger'
                    style={
                        { position: 'absolute', top: '20px', right: '20px' }
                    }
                    onClick={handleClose}
                >X
                </button>
                <form onSubmit={onSubmit}>
                    <input
                        placeholder='Nombre'
                        id="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <input
                        placeholder='Direccion'
                        id="direccion"
                        value={direccion}
                        onChange={e => setDireccion(e.target.value)}
                    />
                    <button type='submit' className='btn btn-primary'>Confirmar compra</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout