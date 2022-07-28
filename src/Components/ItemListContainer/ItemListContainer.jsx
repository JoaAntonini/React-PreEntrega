
import React from 'react'
import ItemList from './ItemList/ItemList'
import {useEffect , useState } from 'react'
import {getFetch} from '../../Helpers/getfetch'
import { useParams } from 'react-router-dom'

import './ItemListContainer.css'

const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])    
  const [ loading, setLoading ] = useState(true)


  const { categoriaId } = useParams()

  
  useEffect(()=>{
    if (categoriaId){ 
      getFetch()
      .then(respuesta => setProductos(respuesta.filter(producto => producto.categoria === categoriaId)))  
      .catch( err => console.log(err) )
      .finally(()=> setLoading(false) )
    } else {
          getFetch()
          .then(respuesta => setProductos(respuesta))    
          .catch( err => console.log(err) )
          .finally(()=> setLoading(false) )
      }
     }, [categoriaId])
  


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
        <h1>Cargando productos</h1> 
                    : 
                    <ItemList productos={productos} />
                }
    </>
  )
}

export default ItemListContainer