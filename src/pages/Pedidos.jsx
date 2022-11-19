import React, { useEffect, useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { getPedidosRequest } from '../api/pedidos'

export const Pedidos = () => {
    const [pedidos, setPedidos] = useState([])

    useEffect(() => {
        getPedidosRequest().then((response) => {
            setPedidos(response)
        })
    }, [])

    return (
        <>
            <Navbar />

          


            <div className="container containerPedido">
                <div className="row ">
                    {pedidos.map((pedido) => (
                        <div className="col-12 card mt-5 colPedido ">
                            <h1 className='text-center'>Pedido</h1>
                            <hr />
                            <div>
                                <h5>Nombre del destinatario: {pedido.name}</h5>
                                <h5>Correo: {pedido.email}</h5>
                                <h5>Direccion: {pedido.address}</h5>
                            </div>

                            <h4 className='totalPedido'>Total: ${pedido.total}</h4>
                            
                           
                        </div>
                    ))}
                </div>
            </div>
                        
            
        </>
    )
}
