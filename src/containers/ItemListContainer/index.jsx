import { React, useState, useEffect } from "react";
import ItemList from "../../components/ItemList";
import "./styles.css";
import { db } from '../../Firebase/config';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = ({category}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const products = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            products.push({id: doc.id, ...doc.data()})
        });
        
        if (category === "all") {
            setProducts(products);
        } else {
            //Filtrar según la categoria
            const productsFiltrados = products.filter(products => products.category === category)
            setProducts(productsFiltrados);
        }
    } catch (error) {
        console.log(error);
    }
})()
  }, []);

 return (
  <div className="container">
      <ItemList products={products}></ItemList>
  </div>
)


};

export default ItemListContainer;
