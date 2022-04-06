import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import "./styles.css";

import { db } from '../../Firebase/config';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams();

    useEffect(()=> {

        (async () => {
            try {
                const docRef = doc(db, "productos", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setProduct({id: docSnap.id, ...docSnap.data()})
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
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