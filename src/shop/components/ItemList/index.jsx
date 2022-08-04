import React from 'react'
import Item from '../Item'

function ItemList({products}) {
  return (
    <div className="row">
        {products.map(product => {
          return <Item key={product.id} id={product.id} title={product.title} image={product.image} price={product.price}></Item>
        })}
    </div>
  )
}

export default ItemList