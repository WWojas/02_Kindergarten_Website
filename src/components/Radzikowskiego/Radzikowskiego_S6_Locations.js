import React, { Component } from 'react';

class Radzikowskiego_S6_Locations extends Component {
    render() {
        return (
            <div>


                <div>
                    <div class='locations_wrapper col-12' id='locations'>


                        <div className='row'>
                            <div className="col-12 text-center">
                                <hr className='hr'></hr>
                                <h3> Nasze Przedszkole</h3>
                            </div>

                            {/* 1st row*/}
                            <div className="locations_img col-12 col-sm-6">
                                <img src='images/locations/Radzikowskiego/IMG_9884.jpg' class="img-fluid" />
                            </div>

                            <div className="locations_img col-12 col-sm-6">
                                <img src='images/locations/Radzikowskiego/IMG_9886.jpg' class="img-fluid"/>
                            </div>


                            {/* 2nd row*/}

                            <div className="locations_img col-12 col-sm-4">
                                <img src='images/locations/Radzikowskiego/IMG_9891.jpg' className="img-fluid"/>
                            </div>

                            <div className="locations_img col-12 col-sm-4">
                                <img src='images/locations/Radzikowskiego/IMG_9893.jpg' className="img-fluid"/>
                            </div>
                            <div className="locations_img col-12 col-sm-4">
                                <img src='images/locations/Radzikowskiego/IMG_9894.jpg' className="img-fluid"/>
                            </div>

                            {/* 3rd row - Big Pic*/}
                            <div className="locations_img col-12 img_wide flex align-items-center d-none d-sm-flex">

                            </div>
                        </div>

                            {/*4th row*/}

                            <div className="row">

                                <div className='col-12 col-sm-8'>

                                    <div className="locations_img">
                                        <img src='images/locations/Radzikowskiego/IMG_9917.jpg' className="img-fluid"/>
                                    </div>
                                </div>

                                <div className='col-12 col-sm-4'>
                                    <div className="locations_img">
                                        <img src='images/locations/Radzikowskiego/IMG_9920.jpg' className="img-fluid"/>
                                    </div>

                                    <div className="locations_img">
                                        <img src='images/locations/Radzikowskiego/IMG_9922.jpg' className="img-fluid"/>
                                    </div>
                                </div>
                                </div>



                                {/*separator*/}
                                <div className="row">
                                    <div className='col-12 col-sm-4'>
                                        <div className="locations_img">
                                            <img src='images/locations/Radzikowskiego/IMG_9924.jpg' className="img-fluid"/>
                                        </div>
                                        <div className="locations_img">
                                            <img src='images/locations/Radzikowskiego/IMG_9925.jpg' className="img-fluid"/>
                                        </div>
                                    </div>

                                    <div className='col-12 col-sm-8'>
                                        <div className="locations_img">
                                            <img src='images/locations/Radzikowskiego/IMG_9917.jpg' className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div class="author text-right w-100 pr-3">
                                    <h6> Autor zdjęć: Kasper Włodarczyk</h6>
                                    </div>
                            </div>
                            </div>

                    </div>

            </div>

        )
    }
}

export default Radzikowskiego_S6_Locations;