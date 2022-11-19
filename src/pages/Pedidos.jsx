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
                        <div className="col-12 card mt-5 colPedido ">
                            <h2 className='text-center mt-4'>Pedido</h2>
                            <hr />
                            <div>
                    
                            <h6 >Destinatario: {pedido.name}</h6>
                            <h6 >Email: {pedido.email}</h6>
                            <h6 >Direccion: {pedido.address}</h6>
                            </div>
                            <h4  className='text-center totalPedido'>Total: {pedido.total}</h4>

                            <button className='btn btn-outline colorBtnCard pedido'>Asignar Pedido a Dron</button>

                        </div>
                    ))}
                </div>
            </div>
                        
            
        </>
    )
}
