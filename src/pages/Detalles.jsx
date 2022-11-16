import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../componentes/Navbar'
import { getOneProductRequest } from '../api/products'
import { addProductToCartRequest } from '../api/cart'
import { useEffect } from 'react'

export const Detalles = () => {
    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(1);
    const total = product.price * amount;

    const params = useParams();

    useEffect(() => {
        const { id } = params;

        getOneProductRequest(id).then((response) => {
            setProduct(response);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const handleAddToCart = () => {
        const productCart = { product, amount, total };

        addProductToCartRequest(productCart).then(() => {
            alert("Producto agregado al carrito");
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>

            <Navbar />

            <div class="container overflow-hidden">
                <div class="row gy-5">
                    <div class="col-6 det">

                       
                            <div className='marginImg '>

                                <img className='imgProdDetalles' src={product.image?.url} alt="" />


                            </div>
                       


                    </div>
                    <div class="col-6 cardDetalles">
                        <div class="p-3 border bg-light DetallesInfo cardDetalles">
                            <h1>{product.name}</h1>
                            <hr />
                            <p>PRECIO $ {product.price}</p>
                            <p>Cantidad  <input type="number" id="quantity" name="quantity" min="1" max="1000" defaultValue={amount} onChange={(e) => setAmount(e.target.value)} /></p>
                            <p>Total $ {total}</p>
                           
                            <button type="button" class="btn  btnDetalles" data-bs-toggle="modal" data-bs-target="#comprar">Comprar</button>
                            <button type="button" class="btn  btnDetalles" onClick={() => handleAddToCart()}>Agregar al carrito</button>
                            
                            


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
                                    <h5 class="modal-title" id="exampleModalLabel">Comprar Producto</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <form>
                                        <div class="mb-3">
                                            <label htmlFor="Direccion" class="form-label">Direccion del Pedido</label>
                                            <input type="text" class="form-control" id="DireccionPedido" aria-describedby="DireccionHelp" />
                                            <div id="emailHelp" class="form-text">Mire dos veces antes de confirmar el pago</div>
                                        </div>


                                        <div class="mb-3">
                                            <label htmlFor="exampleInputPropietario1" class="form-label">Nombre del Destinatario</label>
                                            <input type="text" class="form-control" id="exampleInputPropietario1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>

                                        <div className='continuarPago'>
                                            confirmar compra de {product.name} por un total de $ {total} ? 
                                        </div>

                                        <div className='continuarPago'>
                                        <button type="button " class="btn btnDetalles2">Continuar con el Pago</button>

                                        

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
