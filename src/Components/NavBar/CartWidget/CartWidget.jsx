
import carrito from '../../img/carrito.jpg'
import './CartWidget.css'


const CartWidget = () => {
  return (
    <img src={carrito} className="carrito" alt="carrito" />
  )
}

export default CartWidget