import React from 'react'
import { Navbar } from '../componentes/Navbar'

export const Carrito = () => {
    return (
        <>

            <Navbar />

            <div className="container">
                <div className="row  conterCarrito ">
                    <div class="card   c">
                        <div class="row g-0">
                            <div class="col-md-4 ">
                                <img src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq" class="img-fluid rounded-start cardCarrito" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Nombre del Producto</h5>
                                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, culpa sunt possimus, hic at doloribus porro, in harum deleniti minus eligendi quo ullam necessitatibus! Quaerat possimus quasi nisi earum explicabo?</p>
                                    <p class="card-text"><small class="text-muted"> Precio : 00000</small></p>
                                    <p>Cantidad :  <input type="number" name="" id="" min="1" max="99" placeholder='1' /></p>
                                    <br />
                                    <div className='divBTN'>
                                        <button className='btn btn-link eliminarCarrito'>Eliminar</button>

                                    </div>

                                    <hr />

                                </div>
                            </div>
                        </div>



                        <div class="row g-0">
                            <div class="col-md-4 ">
                                <img src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq" class="img-fluid rounded-start cardCarrito" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Nombre del Producto</h5>
                                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, culpa sunt possimus, hic at doloribus porro, in harum deleniti minus eligendi quo ullam necessitatibus! Quaerat possimus quasi nisi earum explicabo?</p>
                                    <p class="card-text"><small class="text-muted"> Precio : 00000</small></p>
                                    <p>Cantidad :  <input type="number" name="" id="" min="1" max="99" placeholder='1' /></p>
                                    <br />
                                    <div className='divBTN'>
                                        <button className='btn btn-link eliminarCarrito'>Eliminar</button>

                                    </div>

                                    <hr />
                                </div>
                            </div>
                        </div>





                        <div class="row g-0">
                            <div class="col-md-4 ">
                                <img src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq" class="img-fluid rounded-start cardCarrito" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Nombre del Producto</h5>
                                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, culpa sunt possimus, hic at doloribus porro, in harum deleniti minus eligendi quo ullam necessitatibus! Quaerat possimus quasi nisi earum explicabo?</p>
                                    <p class="card-text"><small class="text-muted"> Precio : 00000</small></p>
                                    <p>Cantidad :  <input type="number" name="" id="" min="1" max="99" placeholder='1' /></p>
                                    <br />
                                    <div className='divBTN'>
                                        <button className='btn btn-link eliminarCarrito'>Eliminar</button>
                                    </div>

                                    <hr />
                                </div>
                            </div>
                        </div>





                        <div class="row g-0">
                            <div class="col-md-4 ">
                                <img src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq" class="img-fluid rounded-start cardCarrito" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Nombre del Producto</h5>
                                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, culpa sunt possimus, hic at doloribus porro, in harum deleniti minus eligendi quo ullam necessitatibus! Quaerat possimus quasi nisi earum explicabo?</p>
                                    <p class="card-text"><small class="text-muted"> Precio : 00000</small></p>
                                    <p>Cantidad :  <input type="number" name="" id="" min="1" max="99" placeholder='1' /></p>
                                    <br />
                                    <div className='divBTN'>
                                        <button className='btn btn-link eliminarCarrito'>Eliminar</button>
                                    </div>

                                    <hr />
                                </div>
                            </div>
                        </div>

                        <button className='btnCarrito btn btn-outline' data-bs-toggle="modal" data-bs-target="#comprar" >Commprar todo el carrito</button>


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
