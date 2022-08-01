import React from 'react'
import {useState} from 'react'
import './ItemCount.css';

const ItemCount = ({initial=1, stock=20, onAdd}) => {
    const [count, setCount] = useState(initial);

  
    const handleSuma = () => {
      if (count < stock) {
      setCount(count + 1)
      }
    }

    const handleResta = () => {
      if (count > initial) {
      setCount(count - 1)
      }
   }

   const handleAddToCart = () => {
    if (count < stock) {
      onAdd(count)
    }
 }

  
    return (
      <>
           <div className="card-body tamañoSelector">
              <button onClick={handleResta} className=" btn btn-dark margen"> -</button>
              { count}
              <button onClick={handleSuma} className=" btn btn-dark margen"> +</button>
            </div>  
            <div className="card-body tamañoSelector">
            <button id="addCart" className="btn btn-secondary" onClick={handleAddToCart}>Agregar al Carrito</button>
            </div>
    
      </>
    );
  
}

export default ItemCount