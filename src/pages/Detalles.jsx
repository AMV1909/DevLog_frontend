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

                    <div className='descContent'>
                        <div class="p-3 border bg-light cardDetalles2">

                            <h1>Descripción</h1>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem inventore sunt laboriosam, voluptate cupiditate corrupti earum mollitia excepturi sapiente repudiandae quasi labore minima. Iure nihil ut deleniti quam minima nemo dolore illo illum consequatur hic, harum facere, minus ad dicta quod libero perspiciatis molestiae? Cumque eum quo obcaecati deserunt eveniet eos, voluptate inventore ad deleniti nulla doloremque sit, ipsa, rerum dolorum delectus? Facere, tempora? Eius saepe eos fugiat iste facere adipisci, fuga nam dignissimos deserunt optio nostrum expedita odio officiis veritatis natus voluptatibus alias impedit harum rem. Sit cum totam, non officia, dolore consequatur est dicta voluptatum nihil harum perspiciatis in consectetur dolores voluptas minima dolorum saepe ut quis. Similique nostrum blanditiis perferendis, accusamus corrupti officiis maiores incidunt expedita nobis sequi sunt fuga veritatis provident nemo quos molestias quia voluptas iusto in eos. Aspernatur deserunt voluptatibus necessitatibus alias quam quibusdam illo earum ullam id officia labore, ad tempora beatae officiis libero dolor quis nesciunt magnam quia. Vel, laudantium. Corporis iusto, enim maiores quaerat eius recusandae? Consequatur hic repellendus magnam delectus blanditiis eligendi minima rem ea reiciendis eos quae iure non, optio impedit neque excepturi earum quia eaque sed esse odio corrupti perferendis enim. Velit pariatur perspiciatis, deleniti labore mollitia aperiam.
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
