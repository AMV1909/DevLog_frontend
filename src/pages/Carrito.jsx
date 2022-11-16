import React, { useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { getCartRequest, deleteProductFromCartRequest } from '../api/cart'
import { useEffect } from 'react';

export const Carrito = () => {
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState([]);
    const total = [];

    useEffect(() => {
        getCartRequest().then((response) => {
            setCart(response);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const handleDeleteFromCart = (id) => {
        deleteProductFromCartRequest(id).then(() => {
            window.location.reload();
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>

            <Navbar />

            <div className="container">
                <div className="row  conterCarrito ">
                    <div class="card c">
                        {cart.length > 0 ? (
                            <>
                                {cart.map((carrito) => (
                                    <div key={carrito._id} className="row g-0">
                                        <div class="col-md-4 ">
                                            <img src={carrito.product.image.url} class="img-fluid rounded-start cardCarrito" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{carrito.product.name}</h5>
                                                <p class="card-text">{carrito.product.description}</p>
                                                <p class="card-text"><small class="text-muted"> Precio : {carrito.product.price}</small></p>
                                                <p>Cantidad :  <input type="number" name="" id="" min="1" max="99" defaultValue={carrito.amount} /></p>
                                                <p>Total : {carrito.total}</p>
                                                <div className='divBTN'>
                                                    <button className='btn btn-link eliminarCarrito' onClick={() => handleDeleteFromCart(carrito._id)}>Eliminar</button>

                                                </div>

                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className='btnCarrito btn btn-outline' data-bs-toggle="modal" data-bs-target="#comprar" >Commprar todo el carrito</button>
                            </>
                        ) : (
                            <div className='text-center'>
                                <h1>No hay productos en el carrito</h1>
                                <hr />
                            </div>
                        )}


                    <div class="modal fade" id="comprar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <form>
                                        <div class="mb-3">
                                            <label htmlFor="exampleInputEmail1" class="form-label">Numero de Tarjeta</label>
                                            <input type="Numero" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>


                                        <div class="mb-3">
                                            <label htmlFor="exampleInputPropietario1" class="form-label">Nombre del Propietario</label>
                                            <input type="Numero" class="form-control" id="exampleInputPropietario1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>

                                        <div>
                                            <label for="startDate">Fecha:</label>
                                            <input type="month" name="mes" min="2020-01" max="" value="2022-01" />

                                        </div>

                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                                    <button type="button" class="btn btn-primary">Añadir</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}
