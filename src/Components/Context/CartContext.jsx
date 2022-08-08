

import {createContext,  useState, useContext} from 'react'

export const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

const [cartList, setCartList] = useState ([])

const agregarCarrito = (prod) => {
    const index = cartList.findIndex(item => item.id === prod.id)
    if(index !== -1){
        let cant = cartList[index].cantidad
        cartList[index].cantidad += cant + prod.cantidad 
        setCartList([...cartList])
    } else {
    setCartList([
        ...cartList,
        prod
    ])}
}

const vaciarCarrito = () => {
    setCartList([])

}

const precioTotal = () =>{
    return cartList.reduce((acumPrecio, prodObj) => acumPrecio = acumPrecio + (prodObj.precio * prodObj.cantidad), 0)
   
}


const cantidadTotal = () =>{
    return cartList.reduce ((contador, produObject) => contador += produObject.cantidad, 0)
}

const eliminarProducto = (id)=>{
    setCartList(cartList.filter(prod => prod.id !== id))

 }
return (
    <CartContext.Provider value = {{
        cartList,
        agregarCarrito ,
        vaciarCarrito,
        precioTotal,
        cantidadTotal,
        eliminarProducto
  
    }}>
        {children}
    </CartContext.Provider>

)
}

export default CartContextProvider