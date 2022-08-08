
import { useCartContext } from '../Context/CartContext'
import {Link, NavLink } from 'react-router-dom'
import './Cart.css';

const Cart = () => {

const {cartList, vaciarCarrito, precioTotal, eliminarProducto, cantidadTotal} = useCartContext()

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
      <div className="vaciarCarro">
          <h6 className='texto'>{precioTotal() !== 0 ? `Total compra: $ ${precioTotal()}`: <Link to = '/'> <h4 className='texto'>No hay items seleccionados aún</h4><button  className="btn btn-dark  vaciarCarro" >Volver al inicio</button></Link> } </h6>
      </div>
      <div className="vaciarCarro">
      <h6 className='texto'>{precioTotal() !== 0 ? <button  className="btn btn-light vaciarCarro" onClick={vaciarCarrito}>Vaciar Carrito</button> : ``} </h6>
      <h6 className='texto'>{precioTotal() !== 0 ? <button className="btn btn-dark texto">Comprar</button> : ``} </h6>
      </div>
    </div>
  )
}

export default Cart
