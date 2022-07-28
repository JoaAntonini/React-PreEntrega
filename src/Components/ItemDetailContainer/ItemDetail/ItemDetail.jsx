
import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({producto}) => {
    
  return (
    <>
       <div  id="box">
                <div className="card" id="card" >
                     <img className="card-img-top" src={producto.imagen} alt="Card image cap"/>
                         <div className="card-body texto">
                            <p className="card-text texto">Modelo: {producto.nombre}</p>
                            <p className="card-text texto">Detalle: {producto.detalle}</p>
                            <p className="card-text texto">Precio: $ {producto.precio} </p>
                        </div> 
                </div> 
             </div>
    </>   
    )
}

export default ItemDetail

