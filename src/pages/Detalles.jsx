import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../componentes/Navbar'
import { getOneProductRequest } from '../api/products'
import { useEffect } from 'react'

export const Detalles = () => {
    const [product, setProduct] = useState({});

    const params = useParams();

    useEffect(() => {
        const { id } = params;

        getOneProductRequest(id).then((response) => {
            setProduct(response);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>

            <Navbar />

            <div class="container overflow-hidden">
                <div class="row gy-5">
                    <div class="col-6 det">


                        <div className='marginImg'>

                            <img className='imgProdDetalles' src={product.image?.url} alt="" />


                        </div>

                    </div>
                    <div class="col-6 cardDetalles">
                        <div class="p-3 border bg-light DetallesInfo cardDetalles">
                            <h1>{product.name}</h1>
                            <hr />
                            PRECIO $ {product.price}
                            <br />
                            <br />
                            Cantidad  <input type="number" id="quantity" name="quantity" min="1" max="1000" />

                            <br />
                            <br />
                            <button type="button" class="btn  btnDetalles" data-bs-toggle="modal" data-bs-target="#comprar">Comprar</button>
                            <button type="button" class="btn  btnDetalles">Agregar al carrito</button>


                        </div>
                    </div>

                    <div className='descContent'>
                        <div class="p-3 border bg-light cardDetalles2">

                            <h1>Descripción</h1>
                            <hr />
                            <p>
                                {product.description}
                            </p>
                        </div>
                    </div>




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

        </>
    )
}
