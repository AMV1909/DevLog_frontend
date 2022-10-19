import React from 'react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    
    <Link className="navbar-brand texto" to="/">Devlog</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active texto" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link texto" to="/Administrar">Administrar</Link>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto">
      <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle texto" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-person-fill IconNav"> <a class="texto"></a> </i>
          </a>
          <ul className="dropdown-menu a" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item texto" href="#">Acerca de</a></li>
            <li> <Link className="dropdown-item texto " to="/Login"> Cerrar Sesion </Link>   </li>
          </ul>
          </li>
        <li className="nav-item" >
          <Link className="nav-link texto" to="/Carrito">
          <i className="bi bi-cart4 IconNav "></i>
          </Link>
        
        </li>
        
           
        </ul>
    </div>
    </div>
    </nav>


    </>
  );
};


