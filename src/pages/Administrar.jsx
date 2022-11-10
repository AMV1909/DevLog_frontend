import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navbar } from '../componentes/Navbar'
import { getProductsRequest } from '../api/products'

export const Administrar = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductsRequest()
            .then((res) => {
                setProductos(res)
            })
            .catch(() => {
                window.location.href = "/login"
            })
    }, [])

    return (
        <>
            <Navbar />




            <div>

                <button type="button" class="btn btn-success btnAgregar" data-bs-toggle="modal" data-bs-target="#agregar">
                    Agregar Producto
                </button>


                <div class="modal fade" id="agregar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <form>
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputEmail1" class="form-label">Nombre Producto</label>
                                        <input type="Numero" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div class="invalid-feedback">
                                            Valor Obligatorio
                                        </div>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="CantidadProduct" class="form-label" >Precio</label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">$</span>
                                            <input type="text" class="form-control" aria-label="Cantidad" />

                                        </div>

                                    </div>



                                    <div class="mb-3">
                                        <label for="startDate">Cantidad:</label>
                                        <div className='cantidadProd' >
                                            <input type="number" className='cantidadProd' id="CantProd" name="tentacles" min="0" />
                                        </div>
                                        <div id="emailHelp" class="form-text">Tambien puedes utilizar el scroll para elegir la cantidad</div>
                                    </div>

                                    <div class="mb-3">
                                        <label htmlFor="ImagenProd">Imagen del Producto</label>
                                        <input class="form-control" type="file" id="ImagenProd" />
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


            <div className="container tableConteiner">


                <table className='table table-hover tableProductos'>

                    <thead className='table-dark'>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    {productos.length > 0 ? (
                        productos.map((producto) => {
                            <tr>
                                <td>{producto.name}</td>
                                <td>{producto.price}</td>
                                <td>{producto.available}</td>
                                <td>
                                    <button className='btn btn-primary '>Editar</button>
                                    <button className='btn btn-danger'>Eliminar</button>
                                </td>
                            </tr>
                        })
                    ) : (
                        <tr>
                            <td colSpan='4' className='text-center p-2'>No hay productos</td>
                        </tr>
                    )}
                </table>



            </div>

        </>
    )
}
