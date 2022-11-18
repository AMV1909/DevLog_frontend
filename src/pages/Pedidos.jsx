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

            <h1 className='text-center'>Aquí van los pediddos</h1>
        </>
    )
}
