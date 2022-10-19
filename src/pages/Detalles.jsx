import React from 'react'
import { Navbar } from '../componentes/Navbar'

export const Detalles = () => {
    return (
        <>

            <Navbar />

            <div class="container overflow-hidden">
                <div class="row gy-5">
                    <div class="col-6">
                        <div className='card DetallesImg'>
                            <div id="carouselExampleInterval" class="carousel slide sliderimg" data-bs-ride="carousel">
                                <div class="carousel-inner sliderimg">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                        <img src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                        <img src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
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
                            <button type="button" class="btn  btnDetalles">Comprar</button>
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




                          

                </div>
            </div>

        </>
    )
}
