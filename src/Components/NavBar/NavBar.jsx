
//con rafce abro el modelo basico

import {Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import logo from '../img/logo-min.jpg'
import CartWidget from '../NavBar/CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
	const {cantidadTotal} = useCartContext()
  return (
	<>	

		<nav className="navbar navbar-expand-md navbar-light fondoIndex sticky-top w-100" id="navHeader">
  			<div className="container-fluid">
			  <Link to = '/'>
					<img className="navbar-brand" src={logo} alt="logo de Tucasa" />
			</Link>
				<button className="navbar-toggler bg-light p-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
   				</button>
    			<div className="collapse navbar-collapse" id="navbarNav">
      				<ul className="navbar-nav ms-auto">
					  <NavLink to = "/categoria/sillones" 
					  className= {({isActive})=>isActive? 'boton-dark' :'boton-light'} >
						<li className="nav-item opciones">Sillones</li>
					</NavLink>
					<NavLink to = "/categoria/mesas ratonas" ><li className="nav-item opciones">Mesas Ratonas</li></NavLink>
					<NavLink to = "/categoria/lamparas" ><li className="nav-item opciones">Lamparas</li></NavLink>
					<NavLink to = "/categoria/alfombras" ><li className="nav-item opciones">Alfombras</li></NavLink>
					               
					</ul>                    
				</div>
                <div id="sesion">
                    <button id="myBtn" className="btn btn-dark btn-lg active botonSesion" role="button" aria-pressed="true">Iniciar Sesión</button>
                </div>
				<div >
					<Link to = '/cart'>
					<div  className='opciones'>
						{cantidadTotal()}
					</div>
						<CartWidget/>  
					</Link>       
				</div>				
			</div>
		</nav>
		</>

  )
}

export default NavBar
