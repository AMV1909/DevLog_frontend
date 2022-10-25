import React from 'react'
import { Navbar } from '../componentes/Navbar'

export const Administrar = () => {
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
                                        <input type="month" name="mes"  min="2020-01" max="" value="2022-01" />

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

                    <tr>
                        <td>Nombre Producto</td>
                        <td>Precio Productos</td>
                        <td>Cantidad Producto</td>
                        <td>
                            <button className='btn btn-primary '>Editar</button>
                            <button className='btn btn-danger'>Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Nombre Producto</td>
                        <td>Precio Productos</td>
                        <td>Cantidad Producto</td>
                        <td>
                            <button className='btn btn-primary '>Editar</button>
                            <button className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                    <tr>
                        <td>Nombre Producto</td>
                        <td>Precio Productos</td>
                        <td>Cantidad Producto</td>
                        <td>
                            <button className='btn btn-primary '>Editar</button>
                            <button className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                    <tr>
                        <td>Nombre Producto</td>
                        <td>Precio Productos</td>
                        <td>Cantidad Producto</td>
                        <td>
                            <button className='btn btn-primary '>Editar</button>

                            <button className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                    <tr>
                        <td>Nombre Producto</td>
                        <td>Precio Productos</td>
                        <td>Cantidad Producto</td>
                        <td>
                            <button className='btn btn-primary '>Editar</button>
                            <button className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                    <tr>
                        <td>Nombre Producto</td>
                        <td>Precio Productos</td>
                        <td>Cantidad Producto</td>
                        <td>
                            <button className='btn btn-primary '>Editar</button>
                            <button className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                    <tr>
                        <td>Nombre Producto</td>
                        <td>Precio Productos</td>
                        <td>Cantidad Producto</td>
                        <td>
                            <button className='btn btn-primary '>Editar</button>
                            <button className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                    <tr>
                        <td>Nombre Producto</td>
                        <td>Precio Productos</td>
                        <td>Cantidad Producto</td>
                        <td>
                            <button className='btn btn-primary '>Editar</button>
                            <button className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                    <tr>
                        <td>Nombre Producto</td>
                        <td>Precio Productos</td>
                        <td>Cantidad Producto</td>
                        <td>
                            <button className='btn btn-primary '>Editar</button>
                            <button className='btn btn-danger'>Eliminar</button>

                        </td>

                    </tr>


                </table>



            </div>

        </>
    )
}
