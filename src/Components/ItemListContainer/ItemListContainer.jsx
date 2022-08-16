
import React from 'react'
import ItemList from './ItemList/ItemList'
import {useEffect , useState } from 'react'
import {collection,  getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])    
  const [ loading, setLoading ] = useState(true)
  const { categoriaId } = useParams()
  
  

  const ObtenerProductosFirestore = (categoriaId) =>{    
    const db = getFirestore() //trae firestore
    const queryColeccion = collection(db,'Productos') //importa un producto especifico
    const queryFiltrada = categoriaId ?  query(queryColeccion, where('categoria', '==', categoriaId)) : queryColeccion 
    getDocs (queryFiltrada)  //traer documento
    .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data()})) ) )
    .catch( err => console.log(err) )
    .finally(()=> setLoading(false) )
  }

  useEffect(()=>{
    ObtenerProductosFirestore(categoriaId)    
}, [categoriaId])

  
     const Loading = () =>{
      useEffect (() => {
        return() => console.log ('desmonto')
      })
      return <h1>Cargando productos</h1> 
     }


     
  return (
    <>
      <div id="botonDoc">
				<div className="accordion" id="accordionPanelsStayOpenExample">
						<div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button" id="titulo" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">Productos
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body ">
                    <ol className='lista'>
                      <li>Sillones</li>
                      <li>Mesas Ratonas</li>
                      <li>Lamparas</li>
                      <li>Alfombras</li>
                    </ol>
                  </div>
                 
                </div>
            </div>
        </div>
      </div>
       { loading ? 
        <Loading/> 
                    : 
                    <ItemList productos={productos} />
                }
    </>
  )
}

export default ItemListContainer