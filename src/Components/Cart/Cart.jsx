
import { useCartContext } from '../Context/CartContext'
import {Link} from 'react-router-dom'
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import { useState } from 'react';

import './Cart.css';

const Cart = () => {
const [ id, setId ] = useState('')

const [formDatos, setFormDatos] = useState({
  email:'', 
  nombre:'', 
  telefono:'',
  rEmail:''
})

const {cartList, vaciarCarrito, precioTotal, eliminarProducto, cantidadTotal} = useCartContext()


//funcion para guardar la orden
const guardarOrden = async (e) => {
  e.preventDefault()
  const orden = {}//objeto vacio
  orden.comprador = formDatos
  orden.productos = cartList.map(prod => {
      return {
          producto: prod.nombre,
          id: prod.id,
          precio: prod.precio
      }
  })
  
  orden.total = precioTotal()

  //guardar orden en firebase
  const db = getFirestore() //conecta con firebase
  const queryOrdenes = collection(db, 'ordenes') //especifico que quiero guardar
  addDoc(queryOrdenes, orden) //funcion para insertar , si no existe la coleccion la crea
  .then(resp => setId(resp.id))
  .catch(err => console.log(err))
  .finally(()=> setFormDatos({
        email:'', 
        nombre:'', 
        telefono:'',
        rEmail:''
     })
    )

  // actualizar el stock 
  const queryColeccionStock = collection(db, 'Productos') //apunta a la coleccion de productos

  //armo el filtro
  const queryActulizarStock = query( //genero una query para hacer un consula filtrada
      queryColeccionStock,      //mi coleccion       
       where( documentId() , 'in', cartList.map(it => it.id) )    //filtro en base a una condición    
   )
   //documentid funcion de firestore que solo me va a traer el id
   //in condicion: esta en
   //trae nuevo array de ids que estan en mi carrito

   //importo, permite hacer varias acciones a la vvez
  const batch = writeBatch(db)

  //pide si o si un await para que sea una funcion asincronico porque debe hacer muchas consultas
   await getDocs(queryActulizarStock) //para traer varios docs
   .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
       stock: res.data().stock - cartList.find(prod => prod.id === res.id).cantidad
   }) ))
   .catch(err => console.log(err))
  .finally(()=> {
    vaciarCarrito()            
  })

  batch.commit()

}

const manejoCambios = (e) => {
  setFormDatos({
      ...formDatos,
      [e.target.name]: e.target.value
  })
}




  return (
    <div>
      <div>
      {id.length >0 && <h2 className='idCompra'>El codigo de tu orden es: ${id}</h2> }
      <h1 className='titulo'>Productos Seleccionados</h1>
        <div>
          {cartList.map(item => (
            <div className="texto formatoCompra" key={item.id}>
              <img className="card-img-top imagen" src= {item.imagen} alt="Card image cap"/>
              <div  className="formatoDetalle">
                  <a className= "margen texto">Nombre:{item.nombre} </a>
                  <a className= "margen texto">Cantidad: {item.cantidad} </a>
                  <a className= "margen texto">Costo: $ {item.precio}      </a>  
                  <button className="btn btn-primary texto" onClick={() => eliminarProducto(item.id)}> Eliminar</button> 
                </div>   
            </div>
          ))}
        </div>     
      </div>
      <div className="vaciarCarro">
          <h6 className='texto'>{precioTotal() !== 0 ? `Total compra: $ ${precioTotal()}`: <Link to = '/'> <h4 className='texto'>Productos: 0</h4><button  className="btn btn-dark  vaciarCarro" >Volver al inicio</button></Link> } </h6>
      </div>
      <div className="vaciarCarro">
      <h6 className='texto'>{precioTotal() !== 0 ? <button  className="btn btn-light vaciarCarro" onClick={vaciarCarrito}>Vaciar Carrito</button> : ``} </h6>
      <h6 className='texto'>{precioTotal() !== 0 ? <button className="btn btn-dark texto">Comprar</button> : ``} </h6>
      </div>
<div className="formatoDetalle">
  <form  onSubmit={ guardarOrden }  className="formulario" >
    <label className='texto'>Formulario compra</label>
    <div className="form-group margen">
        <label htmlFor="exampleInputEmail1">Nombre</label>
        <input type="text" className="form-control input" name="nombre"  placeholder="Ingrese su nombre" onChange={manejoCambios} value={formDatos.nombre}/>                       
      </div>
      <div className="form-group margen">
        <label htmlFor="exampleInputEmail1">Telefono</label>
        <input type="text" className="form-control input" name="telefono" onChange={manejoCambios}placeholder="Ingrese su teléfono"value={formDatos.telefono}/>                        
    </div>
     <div className="form-group margen">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input type="email" className="form-control input" name="email" onChange={manejoCambios} placeholder="Ingrese su email"  value={formDatos.email} />        
    </div>
    <div className="form-group margen">
        <label htmlFor="exampleInputPassword1">Repetir Email</label>
        <input type="email" className="form-control input" name="rEmail" placeholder="Ingrese nuevamente su email" onChange={manejoCambios}value={formDatos.rEmail}/>
    </div>
       <button type="submit" className="btn btn-primary input margen">Comprar</button>
  </form>
</div>    
</div>
  )
}

export default Cart
