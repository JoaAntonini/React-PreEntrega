
import { useCartContext } from '../Context/CartContext'

import './Cart.css';

const Cart = () => {

const {cartList, vaciarCarrito} = useCartContext()

  return (
    <div>
      <h1 className='titulo'>Productos Seleccionados</h1>
      <ul>
        {cartList.map(item => (
          <li className="texto" key={item.id}>
            <img className="card-img-top w-50" src= {item.imagen} alt="Card image cap"/>
            <a>Nombre:{item.nombre} </a>
            <a>Cantidad: {item.cantidad} </a>
            <a>Costo: $ {item.precio}      </a>   
          </li>
        ))}
      </ul>
      <button  className="btn btn-primary texto" onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart
