import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Homepage extends Component {
    render() {
        return (
            <div>

                    {/* NAVBAR */}
                <div className="container-fluid">

                    <header>
                        <nav className="navbar navbar-dark navbar_color_homepage navbar-expand-md">
                            <a className='navbar_brand m-sm-1 ' href='#'><img src="../images/Logo-2.png" width='50' height='50'
                             className="d-inline-block align-bottom" alt='przedszkole krakowiaczek'/> Krakowiaczek</a>
                        </nav>
                    </header>


                    <div className="row">

                        {/* Carousel for -xs to -sm resolutions */}

                    <div id="carousel" className="carousel slide d-md-none" data-interval="21000" data-ride="carousel">

                        {/* Indicators */}
                        <ul className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                        </ul>

                        {/* slideshow*/}
                        <div className="carousel-inner" role='listbox'>

                            {/* REJA */}
                            <div className="carousel-item active">

                                <NavLink to="/reja" className='align-middle'>

                                <div className='img-fluid reja_pic'>
                                    <div className='text-content viewport_height'>
                                        <img src="../images/reja_pic.jpg" className="establishment_icon img-fluid"/>


                                        <h4> Przedszkole Krakowiaczek </h4>
                                        <hr/>
                                        <h4> ul. Mikołaja Reja 13 </h4>
                                        <button className='btn btn-outline-light'> Strona Placówki </button>
                                    </div>
                                </div>
                                </NavLink>
                            </div>

                            {/* RADZIKOWSKIEGO */}
                            <div className="carousel-item">

                                <NavLink to ="/radzikowskiego" className='align-middle'>

                                <div className='img-fluid radzikowskiego_pic' id='radzikowskiego'>
                                    <div className='text-content viewport_height'>
                                        <img src='images/radzikowskiego_pic.jpg' className="establishment_icon img-fluid"/>
                                        <h4> Przedszkole Krakowiaczek </h4>
                                        <hr/>
                                        <h4> ul. Eljasza Radzikowskiego 92 </h4>
                                       <button className='btn btn-outline-light'> Strona Placówki </button>
                                    </div>
                                </div>
                                </NavLink>
                            </div>

                            </div>

                        <a className="carousel-control-prev" href="#carousel" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                        </div>


                        {/* Split screen for -sm to -xl res*/}
                        <div className="row">
                            <div className='img-fluid reja_pic col-6  d-none d-md-block'>
                                <div className='text-content viewport_height'>
                                    <img src="../images/reja_pic.jpg" className="round_icon_big"/>
                                    <h4> Przedszkole Krakowiaczek </h4>
                                    <hr/>
                                    <h4> ul. Mikołaja Reja 13 </h4>
                                    <button className='btn btn-outline-light'><h1><NavLink to="/reja" className='align-middle'> Strona Placówki </NavLink>
                                    </h1></button>
                                </div>

                            </div>

                            <div className='img-fluid radzikowskiego_pic col-6  d-none d-md-block' id='radzikowskiego'>
                                <div className='text-content viewport_height'>
                                    <img src='images/radzikowskiego_pic.jpg' className="round_icon_big"/>
                                    <h4> Przedszkole Krakowiaczek </h4>
                                    <hr/>
                                    <h4> ul. Eljasza Radzikowskiego 92 </h4>
                                    <button className='btn btn-outline-light'><h1><NavLink to ="/radzikowskiego" className='align-middle'> Strona Placówki </NavLink></h1></button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                </div>





        )
    }
}

export default Homepage;