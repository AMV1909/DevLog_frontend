import React from 'react'

export function CardDron({ dron, setDrones }) {
    return (
        <>
            <div class="row cardA">
                <div className='card cardProducto'>
                    <img src={dron.image} className="card-img-top" alt="..." />
                    <div className="card-body body-card">
                        <div>
                            <h1 className="card-text">{dron.name}</h1>
                        </div>
                        {/* Botón que cambie el estado del dron */}

                        <button className={`btn btnDetalles ${dron.status == "Dañado" ? "btn-danger" : null}`} onClick={() =>{
                            setDrones((drones) => {
                                const newDrones = [...drones]
                                const index = newDrones.findIndex((d) => d.id === dron.id)
                                newDrones[index].status = dron.status == "Dañado" ? "Disponible" : "Disponible"
                                return newDrones
                            })
                        }}>{dron.status}</button>
                    </div>
                </div>
            </div>
        </>
    )
}