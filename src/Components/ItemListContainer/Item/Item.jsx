

import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({product}) => {



  return (				
				   
               <div className="card" id="card" >
                <img className="card-img-top" src={product.imagen} alt="Card image cap"/>
                    <div className="card-body texto">
                      <p className="card-text texto">{product.categoria}</p>
                       <p className="card-text texto">{product.nombre}</p>
                   </div>
                   <div className='texto'>
                      <Link to = {`/detalle/${product.id}`}>
                          < button className="btn btn-primary texto">Detalle</button>
                        </Link>
                    </div>                   
                </div>

  )

}
export default Item

