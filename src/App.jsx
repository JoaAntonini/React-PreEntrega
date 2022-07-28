
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';

import './App.css';

//falta vincular BS como enseñaron en after


function App() {

  return (   
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>   
   
   )
}

export default App
