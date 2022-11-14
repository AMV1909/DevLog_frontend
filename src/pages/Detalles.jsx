import React from 'react'
import { Navbar } from '../componentes/Navbar'

export const Detalles = () => {
    return (
        <>

            <Navbar />

            <div class="container overflow-hidden">
                <div class="row gy-5">
                    <div class="col-6 det">
                        

                            <div className='marginImg'>

                                <img className='imgProdDetalles' src="https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwNFr4yljgp5JZKACcUSJ7ZY" class=" w-100" alt="..." />


                            </div>
                        
                    </div>
                    <div class="col-6 cardDetalles">
                        <div class="p-3 border bg-light DetallesInfo cardDetalles">
                            <h1>Nombre Producto</h1>
                            <hr />
                            PRECIO $ 1000
                            <br />
                            <br />
                            Cantidad  <input type="number" id="quantity" name="quantity" min="1" max="1000" />

                            <br />
                            <br />
                            <button type="button" class="btn  btnDetalles" data-bs-toggle="modal" data-bs-target="#comprar">Comprar</button>
                            <button type="button" class="btn  btnDetalles">Agregar al carrito</button>


                        </div>
                    </div>

                    <div >
                        <div class="p-3 border bg-light cardDetalles">

                            <h1>Descripcion</h1>
                            <hr />

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, architecto cumque rerum quasi quam assumenda eaque officia similique quidem dolor provident possimus quae a, laborum animi? Quidem debitis dolorem modi.
                                Enim quis irure cupidatat duis mollit laborum ex tempor consequat veniam quis nulla. Ipsum nisi sit nisi nostrud ex dolore magna ex veniam nulla. Est labore dolore reprehenderit ut qui. Proident ullamco consequat consequat enim proident culpa commodo dolor dolore.

                                Occaecat cupidatat proident sit irure tempor proident do et excepteur Lorem ex exercitation. Consequat dolore duis reprehenderit velit reprehenderit pariatur consequat aliqua nulla sint. Eu esse veniam amet pariatur anim deserunt consectetur velit amet pariatur magna et nostrud. Eu qui irure aliqua nostrud. Dolor excepteur cupidatat fugiat consectetur dolore occaecat. Laborum deserunt irure excepteur mollit aliquip excepteur eu aliquip eiusmod id laboris. Elit laborum commodo velit nisi quis ullamco fugiat sunt est veniam tempor proident.

                                Duis non est veniam aliquip aliqua sit minim exercitation. Sunt elit nostrud cupidatat reprehenderit sit do qui deserunt voluptate est quis magna exercitation. Ut et velit ea amet. Cillum occaecat consequat pariatur nisi deserunt sit nisi magna.

                                Proident eiusmod officia tempor laboris. Tempor nostrud nisi nulla elit veniam officia veniam officia qui sint ullamco dolore quis. Mollit velit nisi sit excepteur Lorem nostrud consectetur pariatur deserunt. Reprehenderit velit cillum occaecat cillum.
                                Magna aliquip anim consequat mollit incididunt cupidatat Lorem nisi nisi. Magna est excepteur officia et sit laboris non amet veniam irure id enim velit minim. Minim excepteur voluptate irure ullamco consectetur. Lorem voluptate fugiat eiusmod excepteur qui officia. Amet cupidatat esse do culpa. Nisi exercitation excepteur consequat fugiat deserunt sint.
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
