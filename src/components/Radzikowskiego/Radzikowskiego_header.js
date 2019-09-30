import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Radzikowskiego_header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMenuVisible: false
        }
    }

    render() {
        return (
            <div>
                <header>

                    {/* Desktop*/}
                    <nav className="d-none d-md-block header_container">

                        <ul class="navbar_desktop flex align-items-center">

                            <li class='flex'>
                                <img src="images/Logo-2.png"
                                     className="d-inline-block align-bottom logo_header m-0 p-0"
                                     alt='przedszkole krakowiaczek'/>
                                <Link to ="/" className='dropdown-item'> Krakowiaczek </Link>
                            </li>

                            <li>
                                <Link to ="/radzikowskiego#programs" className='dropdown-item'> Oferta </Link>
                            </li>

                            <li >
                                <Link to ="/radzikowskiego#locations" className='dropdown-item'> Galeria </Link>
                            </li>

                            <li >
                                <Link to ="/radzikowskiego#news" className='dropdown-item'>Aktualności </Link>
                            </li>

                            <li>
                                <Link to ="/radzikowskiego#contact" className='dropdown-item'> Kontakt </Link>
                            </li>

                        </ul>

                    </nav>

                    {/* Mobile*/}
                    <nav className="navbar_desktop d-block d-md-none w-100">
                        {this.state.mobileMenuVisible &&

                        <div class='navbar_mobile'>

                            <img src='images/mobile_menu/error.svg' class='mobile_hamburger close-icon' onClick={ () => this.setState({mobileMenuVisible: false})}/>

                            <div class='mt-5 flex'>

                                <ul class='social d-inline-block'>

                                    <div class='flex align-items-center'>
                                        <img src='images/mobile_menu/orientation.svg' class='hamburger_icon_big'/>
                                        <p> Mapa Strony </p>
                                    </div>

                                    <li className="flex align-items-center">
                                        <img src='/images/mobile_menu/homepage.svg' class='mobile_hamburger' />
                                        <Link to="/" className='dropdown-item'> Strona główna </Link>
                                    </li>

                                    <li className="flex align-items-center">
                                        <img src='/images/mobile_menu/offer.svg' className='mobile_hamburger'/>
                                        <Link to="/radzikowskiego#programs" className='dropdown-item'> Oferta </Link>
                                    </li>

                                    <li className="flex align-items-center">
                                        <img src='/images/mobile_menu/gallery.svg' className='mobile_hamburger'/>
                                        <Link to="/radzikowskiego#locations" className='dropdown-item'>Galeria </Link>
                                    </li>

                                    <li className="flex align-items-center">
                                        <img src='/images/mobile_menu/news.svg' className='mobile_hamburger'/>
                                        <Link to="/radzikowskiego#news" className='dropdown-item'>Aktualności </Link>
                                    </li>

                                    <li className="flex align-items-center">
                                        <img src='/images/mobile_menu/contact.svg' className='mobile_hamburger'/>
                                        <Link to="/radzikowskiego#contact" className='dropdown-item'> Kontakt </Link>
                                    </li>
                                </ul>

                            </div>


                            <div className='mt-5 flex'>

                                <ul className='social d-inline-block'>

                                    <div className='flex align-items-center'>
                                        <img src='images/mobile_menu/social_media_icon.svg' className='hamburger_icon_big'/>
                                        <p> Nasze Social Media </p>
                                    </div>

                                    <li className="flex align-items-center">
                                        <button class='social_btn fb_btn flex m-1'>
                                            <img src='images/mobile_menu/facebook.svg' class='mobile_hamburger'/>
                                            <Link to="https://www.facebook.com/przedszkolekrakowiaczekII/" className='dropdown-item'> Facebook </Link> </button>
                                    </li>

                                    <li className="flex align-items-center">
                                        <button className='social_btn yt_btn flex m-1'>
                                            <img src='images/mobile_menu/youtube.svg' className='mobile_hamburger'/>
                                            <Link to="https://www.youtube.com/channel/UCMS4Ajnwn7ub4Vs_kUBEoPg" className='dropdown-item'> You Tube </Link></button>
                                    </li>

                                    <li className="flex align-items-center">
                                        <button className='social_btn insta_btn flex m-1'>
                                            <img src='images/mobile_menu/instagram.svg' className='mobile_hamburger'/>
                                            <Link to="/" className='dropdown-item'> Instagram </Link></button>
                                    </li>
                                </ul>


                            </div>
                        </div>




                        }

                        <div class='flex align-self-start p-3'>
                            <div className='col-2 text-center'>

                                <img src='images/mobile_menu/menu.svg' className='mobile_hamburger'
                                     onClick={() => !this.state.mobileMenuVisible ? this.setState({mobileMenuVisible: true}) :
                                         this.setState({mobileMenuVisible: false})}/>

                                <p class='mobile_menu_txt'> Menu </p>


                            </div>

                            <div class='col-10 flex'>
                                <img src="images/Logo-2.png"
                                     className="d-inline-block align-bottom logo_header m-0 p-0"
                                     alt='przedszkole krakowiaczek'/>
                                <Link to ="/" className='dropdown-item'> Krakowiaczek </Link>
                            </div>
                        </div>
                    </nav>



                </header>


            </div>
        )
    }
}

export default Radzikowskiego_header;