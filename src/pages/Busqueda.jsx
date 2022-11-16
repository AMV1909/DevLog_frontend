import React, { useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchProductsRequest } from '../api/products';

export const Busqueda = () => {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const search  = searchParams.get("search");

        searchProductsRequest(search).then((response) => {
            setProducts(response);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <Navbar />


            <div className="container ">
                <div className="row   cotenedorbusqueda">
                    <div class="card   c">
                        <div class="row g-0">
                            <div class="col-md-4 ">
                                <img className='imgBusqueda' src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq" class="img-fluid rounded-start cardCarrito" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Nombre del Producto</h5>
                                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, culpa sunt possimus, hic at doloribus porro, in harum deleniti minus eligendi quo ullam necessitatibus! Quaerat possimus quasi nisi earum explicabo?</p>
                                    <p class="card-text"> Precio : 00000</p>
                                    
                                   
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card   c">
                        <div class="row g-0">
                            <div class="col-md-4 ">
                                <img className='imgBusqueda' src="https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq" class="img-fluid rounded-start cardCarrito" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Nombre del Producto</h5>
                                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, culpa sunt possimus, hic at doloribus porro, in harum deleniti minus eligendi quo ullam necessitatibus! Quaerat possimus quasi nisi earum explicabo?</p>
                                    <p class="card-text"> Precio : 00000</p>
                                    
                                   
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    

                    


                    
                </div>

                
                
            </div>
        </>
    )
}
