import React, { useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { getCartRequest, deleteProductFromCartRequest } from '../api/cart'
import { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { paymentMany } from '../api/payment'

const stripePromise = loadStripe("pk_test_51M2m6uDLYESPPfVdUO58dq0fV9gZ5HbKTDWzsBZ3BGLKEOZDcU7RJvxovMdT2f32eqj9eNnMuM6T4SnceGkkdWSb00twEoEpcR");

const CheckoutForm = ({ cart }) => {
    let total = 0;
    cart.forEach(product => {
        total += product.product.price * product.amount
    })

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

            await paymentMany(id, cart, total, formData)
                .then(res => {
                    setLoading(false)
                    alert('Pago realizado con exito');
                    window.location.href = '/';
                })
        }).catch((error) => {
            setLoading(false)
            alert('Error al realizar el pago');
            window.location.reload();
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
                confirmar compra de {cart.length} productos
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

export const Carrito = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCartRequest().then((response) => {
            setCart(response);
        }).catch((error) => {
            alert('Error al obtener los productos del carrito');
            window.location.reload();
        })
    }, [])

    const handleDeleteFromCart = (id) => {
        deleteProductFromCartRequest(id).then(() => {
            window.location.reload();
        }).catch((error) => {
            alert('Error al eliminar el producto del carrito');
            window.location.reload();
        })
    }

    return (
        <>

            <Navbar />

            <div className="container">
                <div className="row  cotenedorbusqueda ">
                    <div class="card c">
                        {cart.length > 0 ? (
                            <>
                                {cart.map((carrito) => (
                                    <div key={carrito._id} className="row g-0">
                                        <div class="col-md-4 ">
                                            <img src={carrito.product.image.url} class="img-fluid rounded-start cardCarrito" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{carrito.product.name}</h5>
                                                <p class="card-text">{carrito.product.description}</p>
                                                <p class="card-text"><small class="text-muted"> Precio : {carrito.product.price}</small></p>
                                                <p>Cantidad :  <input type="number" name="" id="" min="1" max="99" defaultValue={carrito.amount} /></p>
                                                <p>Total : {carrito.total}</p>
                                                <div className='divBTN'>
                                                    <button className='btn btn-link eliminarCarrito' onClick={() => handleDeleteFromCart(carrito._id)}>Eliminar</button>

                                                </div>

                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className='btnCarrito btn btn-outline' data-bs-toggle="modal" data-bs-target="#comprar" >Commprar todo el carrito</button>
                            </>
                        ) : (
                            <div className='text-center'>
                                <h1>No hay productos en el carrito</h1>
                                <hr />
                            </div>
                        )}

                        <div class="modal fade" id="comprar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Comprar Producto</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">

                                        {cart && (
                                            <Elements stripe={stripePromise}>
                                                <CheckoutForm cart={cart} />
                                            </Elements>
                                        )}
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
