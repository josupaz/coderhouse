import { React, useState, useEffect } from "react";
import ItemList from "../../components/ItemList";
import "./styles.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    //Funcion autoreferenciada - traigo datos del mock
    (async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setTimeout(()=>{
          setProducts(data);
        },2000);
      }catch (err) {
        console.log(err);
      }
    })()
  }, []);

 console.log(products);

 return (
  <div className="container">
    <h1>{greeting}</h1>
    <div className="row">
      <ItemList products={products}></ItemList>
    </div>
  </div>
)


};

export default ItemListContainer;
