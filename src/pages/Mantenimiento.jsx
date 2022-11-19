import React, { useEffect, useState } from 'react'
import { Navbar } from '../componentes/Navbar'
import { CardDron } from '../componentes/CardDron'
import { getDronesRequest } from '../api/drones'

export const Mantenimiento = () => {
    const [drones, setDrones] = useState([])

    useEffect(() => {
        getDronesRequest().then((response) => {
            setDrones(response)
        })
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
