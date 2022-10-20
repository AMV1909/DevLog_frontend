import React from 'react'
import { Link } from 'react-router-dom';
export const Register = () => {
    return (
        <>
            <div className='container conterReg' >
                <div className='card cardReg'>
                    <h1 className="titleText">Sing Up</h1>
                    <div className='card-body'>
                        <form className="px-4 py-3">


                            <div className='row'>
                                <div className='col' >
                                    <label htmlFor="exampleDropdownFormName1" className="form-label">Nombres</label>
                                    <input type="name" className="form-control inputRegistro" id="exampleDropdownFormName1" placeholder="Nombres" />
                                </div>

                                <div className='col'>
                                    <label htmlFor="exampleDropdownFormName2" className="form-label inputRegistro2">Apellidos</label>
                                    <input type="lastname" className="form-control inputRegistro2" id="exampleDropdownFormName2" placeholder="Apellidos" />
                                </div>
                            </div>
                            <br />
                            <div className="mb-3">
                                <label htmlFor="exampleDropdownFormNumber" className="form-label ">Número</label>
                                <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="Número" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleDropdownFormEmail1" className="form-label ">Email</label>
                                <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Repetir Contraseña</label>
                                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                            </div>
                            

                            <Link className="btn btn-outline colorBtnCard" to="/">Registrarse</Link>

                        </form>
                        
                       
                    </div>

                </div>
            </div>
        </>

    )
}
