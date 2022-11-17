import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../componentes/Navbar'
import { getOneProductRequest } from '../api/products'
import { addProductToCartRequest } from '../api/cart'
import { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { payment } from '../api/payment'

const stripePromise = loadStripe("pk_test_51M2m6uDLYESPPfVdUO58dq0fV9gZ5HbKTDWzsBZ3BGLKEOZDcU7RJvxovMdT2f32eqj9eNnMuM6T4SnceGkkdWSb00twEoEpcR");

const CheckoutForm = ({ product, amount, total }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        points: false,
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true)

        await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        }).then(async ({ paymentMethod }) => {
            const { id } = paymentMethod;

            console.log(amount, total)

            await payment(id, product, amount, total, formData)
                .then(res => {
                    setLoading(false)
                    alert('Pago realizado con exito');
                    window.location.href = '/';
                })
        }).catch((error) => {
            console.log(error)
        })

        setLoading(false)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === "points" ? setFormData({ ...formData, [name]: !formData.points }) : setFormData({ ...formData, [name]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label htmlFor="exampleInputPropietario1" class="form-label">Nombre del Destinatario</label>
                <input name='name' type="text" class="form-control" id="exampleInputPropietario1" aria-describedby="emailHelp" onChange={handleChange} required />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label htmlFor="Direccion" class="form-label">Direccion del Pedido</label>
                <input name='address' type="text" class="form-control" id="DireccionPedido" aria-describedby="DireccionHelp" onChange={handleChange} required />
                <div id="emailHelp" class="form-text">Mire dos veces antes de confirmar el pago</div>
            </div>

            <div className='continuarPago'>
                confirmar compra de {product.name} por un total de $ {total} ?
            </div>

            <div className='continuarPago'>
                <input name='points' class="form-check-input" type="checkbox" onChange={handleChange} ></input>
                <label className="form-check-label mx-2" for="flexCheckDefault" >Utilizar sus puntos</label>
            </div>
            <CardElement className='form-control p-2' />
            <button disabled={!stripe} type="submit" className='btn btnDetalles'>
                {loading ? (
                    <div className="spinner-border text-dark" role="status">
                        <span className="sr-only"></span>
                    </div>
                ) : 'Pagar'}
            </button>
        </form>
    );
}

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

    const handleAmount = (e) => {
        const { value } = e.target;
        if (value > product.stock) {
            alert("No hay suficientes productos en stock");
            document.getElementById("quantity").value = product.stock;
            setAmount(product.stock);
            return;
        } else {
            setAmount(value);
        }
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
                            {product.stock > 0 ? (
                                <>
                                    <p>PRECIO $ {product.price} <br /> Cantidad Disponible: {product.stock}</p>
                                    <p>Cantidad  <input type="number" id="quantity" name="quantity" min="1" max="1000" defaultValue={amount} onChange={handleAmount} /></p>
                                    <p>Total $ {total}</p>

                                    <button type="button" class="btn  btnDetalles" data-bs-toggle="modal" data-bs-target="#comprar">Comprar</button>
                                    <button type="button" class="btn  btnDetalles" onClick={() => handleAddToCart()}>Agregar al carrito</button>
                                </>
                            ) : (
                                <h3 className='text-center'>Producto sin stock</h3>
                            )}

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

                                    {product.name && (
                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm product={product} amount={amount} total={total} />
                                        </Elements>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
