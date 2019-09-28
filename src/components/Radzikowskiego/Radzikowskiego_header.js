import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Radzikowskiego_header extends Component {
    render() {
        return (
            <div>
                    <header>

                        {/* Desktop*/}
                        <nav className="navbar navbar-dark navbar_color d-none d-md-block">

                                <div className="navbar-header text-center header_container">
                                    <a className='d-flex d-xl-none navbar_brand flex align-items-center justify-content-center m-0 p-0'
                                       href='#'>
                                        <img src="images/Logo-2.png"
                                             className="d-inline-block align-bottom logo_header m-0 p-0"
                                             alt='przedszkole krakowiaczek'/><span
                                        className="m-0 p-0"> Krakowiaczek</span></a>



                                    <ul class="navbar-desktop flex align-items-center">

                                        <a className='d-none d-xl-flex navbar_brand flex align-items-center justify-content-center m-0 p-0'
                                           href='#'>
                                            <img src="images/Logo-2.png"
                                                 className="d-inline-block align-bottom logo_header m-0 p-0"
                                                 alt='przedszkole krakowiaczek'/><span
                                            className="m-0 p-0"> Krakowiaczek</span>
                                        </a>

                                        <li>
                                            <Link to ="/radzikowskiego#programs" className='dropdown-item'> Oferta </Link>
                                        </li>

                                        <li >
                                            <Link to ="/radzikowskiego#locations" className='dropdown-item'> Nasze Przedszkole </Link>
                                        </li>

                                        <li >
                                            <Link to ="/radzikowskiego#news" className='dropdown-item'>Aktualności </Link>
                                        </li>

                                        <li>
                                            <Link to ="/radzikowskiego#contact" className='dropdown-item'> Kontakt </Link>
                                        </li>

                                    </ul>
                                </div>
                        </nav>


                        {/* Mobile*/}
                        <nav className="navbar navbar-dark navbar_color d-block d-md-none w-100">

                            <a className='navbar_brand flex align-items-center justify-content-center m-0 p-0' href='#'>
                                <img src="images/Logo-2.png"
                                     className="d-inline-block align-bottom logo_header m-0 p-0" alt='przedszkole krakowiaczek'/><span class="m-0 p-0"> Krakowiaczek</span></a>

                            <button className='navbar-toggler col-12 flex p-0 mr-2' type='button'
                                    data-toggle='collapse' data-target='#mobile_nav_menu'>

                                   <div class="col-12 nav_mobile_btn ">
                                       <span>  Menu  </span>
                                   </div>

                            </button>

                            <div className='collapse navbar-collapse ' id='mobile_nav_menu'>

                                <ul className="navbar-nav mr-auto text-center text-md-right">
                                    <li className="nav-item">
                                        <Link to ="/" className='dropdown-item'> Strona główna </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to ="/radzikowskiego#programs" className='dropdown-item'> Oferta </Link>
                                    </li>

                                    <li className="nav-item">
                                         <Link to ="/radzikowskiego#locations" className='dropdown-item'>Nasze Przedszkole </Link>
                                    </li>

                                    <li className="nav-item">
                                       <Link to ="/radzikowskiego#news" className='dropdown-item'>Aktualności </Link>
                                    </li>

                                    <li className="nav-item">
                                         <Link to ="/radzikowskiego#contact" className='dropdown-item'> Kontakt </Link>
                                    </li>


                                </ul>
                            </div>
                        </nav>

                    </header>


            </div>
        )
    }
}

export default Radzikowskiego_header;