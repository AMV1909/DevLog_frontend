import React, { useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { searchProductsRequest } from '../api/products';

export const Busqueda = () => {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get("search");

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
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div class="card   c">
                                <div class="row g-0">
                                    <div class="col-md-4 ">
                                        <img className='imgBusqueda' src={product.image.url} class="img-fluid rounded-start cardCarrito" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{product.name}</h5>
                                            <p class="card-text">{product.description}</p>
                                            <p class="card-text"> Precio : {product.price}</p>


                                            <hr />
                                            <Link to={`/Detalles/${product._id}`} className="btn btn-outline colorBtnCard">Ver producto</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 card mt-5">
                            <h1 className='text-center'>No se encontraron productos</h1>
                        </div>
                    )}
                </div>



            </div>
        </>
    )
}
