import React from 'react'
import './style.css';

 const ComponenteA = ( {lastName} ) => {
  return (
      <>
        <h5>Contenido del componente A</h5>
        <h5>{lastName}</h5>   
      </>
    
  )
}

export default ComponenteA;
