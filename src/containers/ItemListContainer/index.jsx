import { React, useState, useEffect } from "react";
import ItemList from "../../components/ItemList";
import "./styles.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    //Funcion autoreferenciada - traigo datos del mock
    (async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setTimeout(()=>{
          setProducts(data);
        },2000);
      }catch (err) {
        console.log(err);
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
