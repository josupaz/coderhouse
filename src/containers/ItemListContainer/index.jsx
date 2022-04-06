import { React, useState, useEffect } from "react";
import ItemList from "../../components/ItemList";
import "./styles.css";
import { db } from '../../Firebase/config';
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams() //Siempre trae un string

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const products = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            products.push({id: doc.id, ...doc.data()})
        });
        console.log(products);

        if (!id) {
            setProducts(products);
        } else {
            //Filtrar según el id
            const productsFiltrados = products.filter(products => products.category === id)
            console.log(productsFiltrados);
            setProducts(productsFiltrados);
        }
    } catch (error) {
        console.log(error);
    }
})()
  }, [id]);

 return (
  <div className="container">
      <ItemList products={products}></ItemList>
  </div>
)


};

export default ItemListContainer;
