import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navbar } from '../componentes/Navbar'
import { getUserInfoRequest } from '../api/users'
import { getDronRequest, getAssignedDronesRequest, getDronesByUserRequest } from '../api/drones'
import { Map } from '../componentes/Map'

export const Monitorear = () => {
    const [admin, setAdmin] = useState(false)
    const [drones, setDrones] = useState([])
    const [location, setLocation] = useState({})
    const [id, setId] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getUserInfoRequest().then((response) => {
            setAdmin(response.type === 'admin')
        })

        if (admin) {
            getAssignedDronesRequest().then((response) => {
                setDrones(response)
            })
        } else {
            getDronesByUserRequest().then((response) => {
                setDrones(response)
            })
        }
    }, [admin])

    const getDronLocation = async (e) => {
        setLocation({})
        setLoading(true)

        if (id) {
            await getDronRequest(id).then((response) => {
                setLocation(response.location)
            })
        } else {
            setLocation({})
            alert('Seleccione un dron')
        }

        setLoading(false)
    }

    return (
        <>
            <Navbar />


            <div class="row">
                <div class="col-sm-6 imgMaps1" >
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Mapa</h5>
                            <hr />
                            <div class="imgMaps row">

                                {drones.length > 0 ? (
                                    <>
                                        {location.latitude ? (
                                            <>
                                                <div class="col">
                                                    <Map location={{ latitude: location.latitude, longitude: location.longitude }} />
                                                </div>

                                            </>
                                        ) : (
                                            <div className='col no-map'></div>
                                        )}

                                        <div class="col inputp">

                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupSelect01">Pedidos</label>
                                                <select class="form-select" id="inputGroupSelect01" onChange={(e) => setId(e.target.value)}>
                                                    <option value="">Seleccionar pedido</option>
                                                    {drones.map((dron) => (
                                                        <option value={dron._id}>Dron {dron._id}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className='d-flex justify-content-center'>
                                                <button className='btn btnDetalles px-5' onClick={() => getDronLocation()}>
                                                    {loading ? (
                                                        <div className="spinner-border text-dark" role="status">
                                                            <span className="sr-only"></span>
                                                        </div>
                                                    ) : 'Buscar'}
                                                </button>
                                            </div>

                                        </div>
                                    </>
                                ) : (
                                    <h1>No hay drones asignados</h1>
                                )}


                            </div>

                        </div>
                    </div>
                </div>

            </div>





        </>
    )
}
