import React, { useEffect, useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { CardDron } from '../componentes/CardDron'

export const Mantenimiento = () => {
    const [drones, setDrones] = useState([])

    useEffect(() => {
        const drones = []
        for (let i = 0; i < 20; i++) {
            const state = Math.random() > 0.5 ? 'Dañado' : 'Disponible'

            drones.push({
                id: i,
                image: 'https://http2.mlstatic.com/D_NQ_NP_888397-MLA47979312257_102021-V.jpg',
                name: `Dron ${i + 1}`,
                status: state
            })
        }
        setDrones(drones)
    }, [])

    return (
        <>
            <Navbar />

            <div className='drones'>
                {drones.map((dron) => (
                    <CardDron dron={dron} setDrones={setDrones} />
                ))}
            </div>
        </>
    )
}
