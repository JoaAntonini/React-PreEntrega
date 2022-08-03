
import React from 'react'

import Item from '../Item/Item'

const ItemList = ({ productos }) => {



  return (
    <>
      <div id="box">
      <div className='container-fluid'>
      <div className="row">
    
        {productos?.map( product => <Item key={ product.id} product={product} /> )} 
        </div>

        </div>
        </div>
    </>
  )
}

export default ItemList

