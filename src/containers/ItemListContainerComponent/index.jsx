import React from "react";
import ItemCount from '../../components/ItemCount'
import "./styles.css";



const ItemListContainer = ({greeting}) => {


  const onAdd = (count) => {
    console.log(` ${count}`);
}

return (
    <div>
        <h2>{greeting}</h2>
        <ItemCount stock={10} onAdd={onAdd}/>
        <ItemCount stock={15} onAdd={onAdd}/>
    </div>
)
};

export default ItemListContainer;
