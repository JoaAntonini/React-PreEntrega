
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../../ItemCount/ItemCount'
import './ItemDetail.css';


const ItemDetail = ({producto}) => {

  const {agregarCarrito, cartList} = useCartContext()

  const [cart, setCart] = useState(true)

  const onAdd =(cant)=> {    
    setCart(false)
    console.log(`Desea sumar al carrito: ${cant}` )
    agregarCarrito({...producto, cantidad: cant})
  }
  console.log(cartList)
    
  return (
    <>
       <div  id="box">
                <div className="card" id="card" >
                     <img className="card-img-top" src={producto.imagen} alt="Card image cap"/>
                         <div className="card-body texto">
                            <p className="card-text texto">Modelo: {producto.nombre}</p>
                            <p className="card-text texto">Detalle: {producto.detalle}</p>
                            <p className="card-text texto">Precio: $ {producto.precio} </p>
                            {cart ?  
                            <ItemCount initial={1} stock={20} onAdd={onAdd}/>
                              :
                            <>
                            <Link to='/cart'><button className="btn btn-primary texto"> Finalizar Compra</button></Link>
                            <Link to='/'><button className="btn btn-primary texto"> Seguir comprando</button></Link>
                            </>
                          }
                        </div> 
                </div> 
             </div>
    </>   
    )
}

export default ItemDetail

