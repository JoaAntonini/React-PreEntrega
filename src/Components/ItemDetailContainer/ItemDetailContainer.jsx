import React from 'react'
import {useParams } from 'react-router-dom'
import {getFetch} from '../../Helpers/getfetch'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState([])    
  const {detalleId} = useParams() 

 useEffect(()=>{
 if (detalleId){ 
    getFetch(detalleId)  
    .then(respuesta => setProducto(respuesta)) 
    .catch( err => console.log(err) )
} else {
      getFetch()
      .then(respuesta => setProductos(respuesta))    
      .catch( err => console.log(err) )
  }
 }, [detalleId])



  return (
    <div>      
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
