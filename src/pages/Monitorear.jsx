import React from 'react'
import { Navbar } from '../componentes/Navbar'

export const Monitorear = () => {
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

                                <div class="col">
                                    <div style={{width: "100%"}}><iframe width="720" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=7.11676236203049,%20-73.10544006742765+(Devlog)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html"></a></iframe></div>

                                </div>

                                <div class="col inputp">

                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="inputGroupSelect01">Productos </label>
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Seleccionar pedido</option>
                                            <option value="1">Primer pedido</option>
                                        </select>
                                    </div>

                                </div>



                            </div>

                        </div>
                    </div>
                </div>

            </div>





        </>
    )
}
