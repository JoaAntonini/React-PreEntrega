
import { useCartContext } from '../Context/CartContext'

import './Cart.css';

const Cart = () => {

const {cartList, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()

  return (
    <div>
      <div>
      <h1 className='titulo'>Productos Seleccionados</h1>
      <div>
        {cartList.map(item => (
          <div className="texto formatoCompra" key={item.id}>
            <img className="card-img-top imagen" src= {item.imagen} alt="Card image cap"/>
            <div  className="formatoDetalle">
                <a>Nombre:{item.nombre} </a>
                <a>Cantidad: {item.cantidad} </a>
                <a>Costo: $ {item.precio}      </a>  
                <button className="btn btn-primary texto" onClick={() => eliminarProducto(item.id)}> Eliminar</button> 
              </div>   
          </div>
        ))}
      </div>
     
      </div>
      <div>
          <h6 className='texto'>Total compra: $ {precioTotal()}</h6>
      </div>
      <div className="vaciarCarro">
      <button  className="btn btn-primary vaciarCarro" onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    </div>
  )
}

export default Cart
