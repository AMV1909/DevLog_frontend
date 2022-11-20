import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navbar } from '../componentes/Navbar'
import { getuserInfoRequest } from '../api/users'
import { getDronRequest, getAssignedDronesRequest, getDronesByUserRequest } from '../api/drones'

export const Monitorear = () => {
    const [admin, setAdmin] = useState(false)
    const [drones, setDrones] = useState([])
    const [location, setLocation] = useState({})

    useEffect(() => {
        getuserInfoRequest().then((response) => {
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
        const id = e.target.value

        if (id) {
            await getDronRequest(id).then((response) => {
                setLocation(response.location)
            })
        } else {
            setLocation({})
        }
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
                                            <div class="col">
                                                <div style={{ width: "100%" }}><iframe width="720" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={`https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=${location.latitude},%20${location.longitude}+(Devlog)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`}><a href="https://www.maps.ie/distance-area-calculator.html"></a></iframe></div>
                                            </div>
                                        ) : (
                                            <div className='col no-map'></div>
                                        )}

                                        <div class="col inputp">

                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupSelect01">Pedidos</label>
                                                <select class="form-select" id="inputGroupSelect01" onChange={(e) => getDronLocation(e)}>
                                                    <option value="">Seleccionar pedido</option>
                                                    {drones.map((dron) => (
                                                        <option value={dron._id}>Dron {dron._id}</option>
                                                    ))}
                                                </select>
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
