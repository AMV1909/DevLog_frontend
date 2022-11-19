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

            


            <div className="container containerPedido ">
                <div className="row">
                    {pedidos.map((pedido) => (
                        <div className="col-12 card mt-5">
                            <h2 className='text-center'>Pedido</h2>
                            <hr />
                            <div>
                    
                            <h6 >Nombre del destinatario: {pedido.name}</h6>
                            <h6 >Apellido: {pedido.lastName}</h6>
                            <h6 >Email: {pedido.email}</h6>
                            <h6 >Direccion: {pedido.address}</h6>
                            </div>
                            <h4  className='text-center totalPedido'>total: {pedido.total}</h4> 

                        </div>
                    ))}
                </div>
            </div>
                        
            
        </>
    )
}
