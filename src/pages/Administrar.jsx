import React from 'react'
import { Navbar } from '../componentes/Navbar'

export const Administrar = () => {
    return (
        <>
            <Navbar />



                   <div>
                   <button type="button" class="btn btn-success btnAgregar"> Agregar Producto </button>

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
