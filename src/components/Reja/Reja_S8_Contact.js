import React, { Component } from 'react';




class Reja_S8_Contact extends Component {

    render() {
        return (
            <div>
                <div class="row justify-content-center">


                    <div id='contact' >

                        {/* Contact */}
                        <div class="col-12 container_1200">


                            <div class="row">

                                <div class="col-12 col-md-6">

                                    <div class="col-12 text-center">
                                        <h3> Kontakt z nami </h3>
                                        <p>Masz pytania? Chcesz nas odwiedzić?</p>
                                    </div>

                                    {/* Call us*/}
                                    <div className="row">
                                        <div class="flex contact_box">

                                            <div className="contact_picture">
                                                <img src='images/footer/contact_phone.svg' className="contact_icon" />
                                            </div>

                                            <div class="contact_text">
                                                <p>Szybki kontakt? Nie czekaj, zadzwoń</p>

                                                <p> (+48) 600 266 903</p>


                                            </div>
                                        </div>



                                        {/* Visit us*/}
                                        <div className="flex contact_box">

                                            <div className="contact_picture">
                                                <img src='images/footer/contact_building.svg' className="contact_icon"/>
                                            </div>

                                            <div className="contact_text">
                                                <p>Publiczne Przedszkole Krakowiaczek</p>

                                                <p> ul. Mikołaja Reja 13, Kraków
                                                </p>
                                            </div>

                                        </div>

                                        <div className="flex small_font text-left p-3">
                                            <div className="contact_picture">
                                                <img src='images/footer/website.svg' className="contact_icon mr-3" />
                                            </div>
                                            <p>Możesz również skontaktować się z nami pod adresem
                                                <a href="mailto:przedszkole.krakowiaczek@gmail.com"
                                                   className="blue_txt"> przedszkole.krakowiaczek@gmail.com</a></p>

                                        </div>


                                    </div>
                                </div>


                                {/* Map */}

                                <div className="col-12 col-md-6" >

                                    <div class="row">

                                        {/* Google Map */}
                                        <div className="col-12">

                                            <div className="map_size">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.997208997546!2d19.94157555133058!3d50.08633912131353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165af9cd1a3dab%3A0x5aa63f7b43f971b7!2sPublic+Kindergarten+Krakowiaczek!5e0!3m2!1sen!2spl!4v1551445032980"
                                                    width="auto" height="auto" frameBorder="0"
                                                    allowFullScreen></iframe>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="row">
                                <div className='col-12 flex flex-wrap'>

                                    <p class='col-12 social_txt'> Krakowiaczek w Internecie </p>

                                    <div class='col-12'>
                                    <img src='images/social_media/facebook.svg' class='mobile_hamburger'/>
                                    <img src='images/social_media/Youtube.svg' class='mobile_hamburger ml-3'/>
                                    <img src='images/social_media/Instagram.svg'class='mobile_hamburger ml-3'/>
                                    </div>
                                </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <footer>

                </footer>
            </div>
        )
    }
}

export default Reja_S8_Contact;

