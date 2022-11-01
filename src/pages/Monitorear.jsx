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
                                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Bucaramanga&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a> <a href="https://www.embedgooglemap.net">google map website widget</a></div></div>

                                </div>

                                <div class="col inputp">

                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="inputGroupSelect01">Productos </label>
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Seleccionar pedido</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
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
