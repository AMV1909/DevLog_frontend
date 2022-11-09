import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { loginRequest } from '../api/login';

export const Login = () => {
  const [error, setError] = useState({
    show: false,
    text: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("exampleDropdownFormEmail1").value;
    const password = document.getElementById("exampleDropdownFormPassword1").value;

    await loginRequest(email, password).then((response) => {
      if (response.token) {
        localStorage.setItem("token", response.token);
        window.location.href = "/";
      } else {
        setError({
          show: true,
          text: response.err
        })

        setTimeout(() => {
          setError({
            show: false,
            text: ""
          })
        }, 5000);
      }
    });
  }

  return (
    <>

      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body className='colorFondo'>
          <div className='container conterLog' >
            <div className='card cardLog'>
              <h1 className="titleText">Login</h1>
              <div className='card-body'>
                <form className="px-4 py-3" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleDropdownFormPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" required />
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                      <label className="form-check-label" for="dropdownCheck">
                        Recordarme
                      </label>
                    </div>
                  </div>

                  {error.show ? <p className='text-danger text-center'>{error.text}</p> : null}

                  <button type="submit" className="btn btn-outline colorBtnCard">Ingresar</button>

                </form>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/Register" >Eres nuevo aqui? Registrate</Link>
              </div>

            </div>
          </div>
        </body>
      </html>

    </>
  );
};
