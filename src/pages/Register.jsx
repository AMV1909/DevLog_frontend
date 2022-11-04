import React from 'react'
import { useState } from 'react';
import { registerUser, getUsers } from '../api/users';

export const Register = () => {

    const [error, setError] = useState({
        show: false,
        text: ""
    });

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        phone: 0,
        email: "",
        password: ""
    })

    const verifyPassword = () => {
        const pwd1 = document.getElementById("exampleFormPassword1").value;
        const pwd2 = document.getElementById("exampleFormPassword2").value;

        return pwd1 === pwd2;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (verifyPassword()) {
            const response = await registerUser(formData);
            if (response.message) {
                alert("Usuario registrado correctamente");
                window.location.href = "/login";
            } else {
                setError({
                    show: true,
                    text: response.err
                })
            }
        } else {
            setError({
                show: true,
                text: "Las contraseñas no coinciden"
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(() => ({ ...formData, [name]: value }));
    }

    return (
        <>
            <div className='container conterReg' >
                <div className='card cardReg'>
                    <h1 className="titleText">Sing Up</h1>
                    <div className='card-body'>
                        <form className="px-4 py-3" onSubmit={handleSubmit}>


                            <div className='row'>
                                <div className='col' >
                                    <label htmlFor="exampleFormName" className="form-label">Nombres</label>
                                    <input type="name" className="form-control inputRegistro" id="exampleFormName" placeholder="Nombres" name='name' onChange={handleChange} required />
                                </div>

                                <div className='col'>
                                    <label htmlFor="exampleFormLastname" className="form-label inputRegistro2">Apellidos</label>
                                    <input type="lastname" className="form-control inputRegistro2" id="exampleFormLastname" placeholder="Apellidos" name='lastname' onChange={handleChange} required />
                                </div>
                            </div>
                            <br />
                            <div className="mb-3">
                                <label htmlFor="exampleFormNumber" className="form-label ">Número</label>
                                <input type="number" className="form-control" id="exampleFormNumber" placeholder="Número" name='phone' onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleDropdownFormEmail" className="form-label ">Email</label>
                                <input type="email" className="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com" name='email' onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormPassword1" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="exampleFormPassword1" placeholder="Password" name='password' onChange={handleChange} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormPassword2" className="form-label">Repetir Contraseña</label>
                                <input type="password" className="form-control" id="exampleFormPassword2" placeholder="Password" onChange={handleChange} required />
                            </div>

                            {error.show ? <p className='text-danger text-center'>{error.text}</p> : null}

                            <button type='submit' className='btn btn-outline colorBtnCard'>Registrarse</button>

                        </form>


                    </div>

                </div>
            </div>
        </>

    )
}
