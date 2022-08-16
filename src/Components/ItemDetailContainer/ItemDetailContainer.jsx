import React from 'react'
import {useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState([])    
  const {detalleId} = useParams() 
  const [ loading, setLoading ] = useState(true)

  useEffect(()=>{
    const db = getFirestore() //trae firestore
    const queryProducto = doc(db,'Productos', detalleId) //importa un producto especifico
    getDoc (queryProducto)  //traer documento
    .then(resp => setProducto({ id: resp.id, ...resp.data()}))
    .catch( err => console.log(err) )
    .finally(()=> setLoading(false) )
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
