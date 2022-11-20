import React, { useEffect, useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { getPedidosRequest } from '../api/pedidos'
import { getAvailableDronesRequest, assignDronRequest } from '../api/drones'

export const Pedidos = () => {
    const [pedidos, setPedidos] = useState([])
    const [availableDrones, setAvailableDrones] = useState([])
    const [dron, setDron] = useState("")
    const [pedidoSelected, setPedidoSelected] = useState("")

    useEffect(() => {
        getPedidosRequest().then((response) => {
            setPedidos(response)
        })
    }, [])

    const getAvailableDrones = async (pedido) => {
        setPedidoSelected(pedido)

        await getAvailableDronesRequest().then((response) => {
            setAvailableDrones(response)
        })
    }

    const handleChange = (e) => {
        setDron(e.target.value)
    }

    const assignDron = async () => {
        await assignDronRequest(dron, pedidoSelected)
            .then((response) => {
                alert('Dron asignado con exito')
                window.location.reload()
            })
            .catch((error) => {
                alert('Error al asignar el dron')
                window.location.reload()
            })
    }

    return (
        <>
            <Navbar />




            <div className="container containerPedido ">
                <div className="row">
                    {pedidos.map((pedido) => (
                        <>
                            <div className="col-12 card mt-5 colPedido ">
                                <h2 className='text-center mt-4'>Pedido</h2>
                                <hr />
                                <div>

                                    <h6 >Destinatario: {pedido.name}</h6>
                                    <h6 >Email: {pedido.email}</h6>
                                    <h6 >Direccion: {pedido.address}</h6>

                                    <h6 >Productos: </h6>
                                    <ul>
                                        {pedido.products.map((product) => (
                                            <li>
                                                {product.product.name}
                                                <ul>
                                                    <li>Cantidad: {product.amount}</li>
                                                    <li>Precio: $ {product.product.price}</li>
                                                    <li>Total: $ {product.product.price * product.amount}</li>
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                <h4 className='text-center totalPedido'>Total: $ {pedido.total}</h4>

                                <button className='btn btn-outline colorBtnCard pedido' data-bs-toggle="modal" data-bs-target="#Drones" onClick={() => getAvailableDrones(pedido)}>Asignar Pedido a Dron</button>

                            </div>

                            <div class="modal fade" id="Drones" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Asignar Pedido A Drón</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">

                                            {availableDrones.length > 0 ? (
                                                <div className='d-flex flex-column justify-content-center'>
                                                    <select name="dron" id="dron" className='form-control' onChange={handleChange}>
                                                        <option value="">Seleccionar dron</option>
                                                        {availableDrones.map((dron) => (
                                                            <option key={dron._id} value={dron._id}>{dron.name}</option>
                                                        ))}
                                                    </select>

                                                    <button className='btn btn-outline colorBtnCard pedido' onClick={() => assignDron()}>Asignar Pedido</button>
                                                </div>
                                            ) : (
                                                <h3>No hay drones disponibles</h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>


        </>
    )
}
