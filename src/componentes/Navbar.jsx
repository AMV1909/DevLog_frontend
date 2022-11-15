import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTypeUserRequest, getNameUserRequest } from '../api/users';

export const Navbar = () => {
  const [typeUser, setTypeUser] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    getTypeUserRequest().then((response) => {
      switch (response) {
        case "admin":
          setTypeUser(true);
          break;
        case "vendedor":
          setTypeUser(true);
          break;
        case "user":
          setTypeUser(false);
          break;
        default:
          break;
      }
    }).catch(() => {
      window.location.href = "/login";
    })

    getNameUserRequest().then((response) => {
      setUser(response);
    })
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("Authorization");
    window.location.href = "/login";
  }

  return (
    <>

      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">

          <Link className="navbar-brand texto" to="/">
            {window.location.pathname.startsWith('/Detalles') ? <img  className='logo'  src="../Loguito.png" alt="logo" /> : <img  className='logo'  src="Loguito.png" alt="logo" /> }
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active texto" to="/">Inicio</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link texto" to="/Monitorear">Monitorear</Link>
              </li>

              {typeUser ? (
                <li className="nav-item">
                  <Link id='admin' className="nav-link texto" to="/Administrar">Administrar</Link>
                </li>
              ) : null}
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle texto" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-fill IconNav"> <a class="texto"></a> </i>
                </a>
                <ul className="dropdown-menu a" aria-labelledby="navbarDropdownMenuLink">
                  <li><h4 className='text-center texto'>{user}</h4></li>
                  <li> <button className='dropdown-item text-center texto' onClick={handleLogout}>Cerrar Sesión</button>  </li>
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


