
import React, { memo } from 'react'

import Item from '../Item/Item'

const ItemList = memo(({ productos }) => {

  console.log('ItemList')
     
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
)


export default ItemList

