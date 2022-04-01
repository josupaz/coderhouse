import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import "./styles.css";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams();

    useEffect(()=> {

        ( async ()=> {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [id])

    return (
        <div className="container">
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer