import React, { Component } from 'react';

class Reja_S6_Locations extends Component {
    render() {
        return (
            <div>


                <div>
                    <div class='locations_wrapper col-12' id='locations'>


                        <div className='row'>
                            <div className="col-12 text-center">
                                <hr class='hr'></hr>
                                <h3> Nasze Przedszkole</h3>
                            </div>

                            {/* 1st row*/}
                            <div className="locations_img col-12 col-sm-6">
                                <img src='images/locations/Reja/IMG_9848.jpg' class="img-fluid" />
                            </div>

                            <div className="locations_img col-12 col-sm-6">
                                <img src='images/locations/Reja/IMG_9850.jpg' class="img-fluid"/>
                            </div>


                            {/* 2nd row*/}

                            <div className="locations_img col-12 col-sm-4">
                                <img src='images/locations/Reja/IMG_9854.jpg' className="img-fluid"/>
                            </div>

                            <div className="locations_img col-12 col-sm-4">
                                <img src='images/locations/Reja/IMG_9856.jpg' className="img-fluid"/>
                            </div>
                            <div className="locations_img col-12 col-sm-4">
                                <img src='images/locations/Reja/IMG_9859.jpg' className="img-fluid"/>
                            </div>

                            {/* 3rd row - Big Pic*/}
                            <div className="locations_img col-12 img_wide flex align-items-center d-none d-md-flex">
                            </div>
                        </div>

                            {/*4th row*/}

                            <div className="row">

                                <div className='col-12 col-sm-8'>

                                    <div className="locations_img">
                                        <img src='images/locations/Reja/IMG_9864.jpg' className="img-fluid"/>
                                    </div>
                                </div>

                                <div className='col-12 col-sm-4'>
                                    <div className="locations_img">
                                        <img src='images/locations/Reja/IMG_9868.jpg' className="img-fluid"/>
                                    </div>

                                    <div className="locations_img">
                                        <img src='images/locations/Reja/IMG_9870.jpg' className="img-fluid"/>
                                    </div>
                                </div>
                                </div>



                                {/*separator*/}
                                <div className="row">
                                    <div className='col-12 col-sm-4'>
                                        <div className="locations_img">
                                            <img src='images/locations/Reja/IMG_9875.jpg' className="img-fluid"/>
                                        </div>
                                        <div className="locations_img">
                                            <img src='images/locations/Reja/IMG_9878.jpg' className="img-fluid"/>
                                        </div>
                                    </div>

                                    <div className='col-12 col-sm-8'>
                                        <div className="locations_img">
                                            <img src='images/locations/Reja/IMG_9861.jpg' className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="author text-right w-100 pr-3">
                                        <h6> Autor zdjęć: Kasper Włodarczyk</h6>
                                    </div>
                            </div>
                            </div>

                    </div>

            </div>

        )
    }
}

export default Reja_S6_Locations;