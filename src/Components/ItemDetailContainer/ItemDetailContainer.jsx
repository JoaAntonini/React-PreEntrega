import React from 'react'
import {useParams } from 'react-router-dom'
import {getFetch} from '../../Helpers/getfetch'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState([])    
  const {detalleId} = useParams() 
  const [ loading, setLoading ] = useState(true)
 useEffect(()=>{
 if (detalleId){ 
    getFetch(detalleId)  
    .then(respuesta => setProducto(respuesta)) 
    .catch( err => console.log(err) )
    .finally(()=> setLoading(false) )
} else {
      getFetch()
      .then(respuesta => setProductos(respuesta))    
      .catch( err => console.log(err) )
      .finally(()=> setLoading(false) )
  }
 }, [detalleId])

 
 const Loading = () =>{
  useEffect (() => {
    return() => console.log ('desmonto')
  })
  return <h1>Cargando detalle</h1> 
 }


  return (
    <div>      
       {loading ? 
        <Loading/> 
                    : 
                    <ItemDetail producto={producto}/>
                }      
    </div>
  )
}

export default ItemDetailContainer
