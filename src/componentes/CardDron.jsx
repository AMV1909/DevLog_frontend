import React from 'react'

export function CardDron({ dron, setDrones }) {
    const handleStatus = (status) => {
        switch (status) {
            case 'En Mantenimiento':
                return 'bg-warning text-dark'
            case 'No Disponible':
                return 'bg-danger'
            default:
                return null
        }
    }

    return (
        <>
            <div class="row cardA">
                <div className='card cardProducto'>
                    <img src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/05/07/15888481249988.jpg" className="card-img-top" alt="..." />
                    <div className="card-body body-card">
                        <div>
                            <h1 className="card-text text-center">{dron.name}</h1>
                        </div>
                        {/* Botón que cambie el estado del dron */}

                        <button className={`btn btnDetalles ${handleStatus(dron.status)} mx-auto`} >{dron.status}</button>
                    </div>
                </div>
            </div>
        </>
    )
}