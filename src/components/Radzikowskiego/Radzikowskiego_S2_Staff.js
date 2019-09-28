import React, { Component } from 'react';
import { NavLink } from "react-router-dom";




class Radzikowskiego_S2_Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spanText: 'Zabawy',
            text: ["Rozwoju", "Odpoczynku", "Śmiechu", "Zabawy"],
            index: 0,

            staff: [ "Aleksandra_Brozyna", "Dominika_Serwa", "Natalia_Kiczura", "Kinga_Kaczmarek", "Alicja_Kwasny", "Joanna_Wozniak", "Monika_Garula", "Maria_Kaczmarek" , "Dorota_Szastak", "Violetta_Wojas" ],
            indexStaff: 0,
            indexPrev: -1


        }
    }

    componentDidMount() {
        this.changeSpan();
        this.changeStaff();
    }


    changeSpan =() => {

        this.interval = setInterval (() => {

            this.setState ({
                spanText: this.state.text[this.state.index],
                index: this.state.index >= this.state.text.length-1 ? 0 : this.state.index + 1,

            });

        }, 2000);

    };


    changeStaff =() => {


         let first_li = this.refs.images_ul.children[0].childNodes[0];
         first_li.classList.add('show');

        this.interval = setInterval (() => {

            this.setState ({
                indexStaff: this.state.indexStaff >= this.state.staff.length-1 ? 0 : this.state.indexStaff +1,
                indexPrev: this.state.indexPrev >= this.state.staff.length-1 ? 0 : this.state.indexPrev +1

            });

            let next_li = this.refs.images_ul.children[this.state.indexStaff].childNodes[0];
            let previous_li = this.refs.images_ul.children[this.state.indexPrev].childNodes[0];

            previous_li.classList.remove('show');
            next_li.classList.add('show');


        }, 2000);
    };





    render() {


        return (

            <div id='staff'>

                <div className='container_1200 m-auto'>

                    <div className='row'>

                        <div className='col-12 text-center mb-3'>


                            <h3> Krakowiaczek to miejsce do</h3>
                            <h6 id="staff_span" className="animate_span"> {this.state.spanText} </h6>
                            <h6 class="mt-3"> W Przedszkolu Krakowiaczek nie ma czasu na nudę. </h6>

                        </div>
                    </div>


                    <div class='row align-items-center '>

                        <div className='col-lg-2 col-md-offset-1  section_2_thumbnail'>
                            <NavLink to ="/our_philosophy">
                                <img src='images/filozofia.svg' className='section_2_thumbnail_img' />
                                <p class="pt-2"> Nasza Filozofia</p>
                            </NavLink>
                        </div>
                        <div className='col-lg-2 col-md-offset-1 section_2_thumbnail'>
                            <NavLink to ="/extended_offer">
                                <img src='images/what_we_offer.svg' className='section_2_thumbnail_img' />
                                <p className="pt-2"> Oferta</p>
                            </NavLink>
                        </div>
                        <div className='col-lg-2 col-md-offset-1 section_2_thumbnail'>
                            <NavLink to ="/enrollment">
                                <img src='images/zapisy.svg' className='section_2_thumbnail_img' />
                                <p className="pt-2"> Zapisy</p>
                            </NavLink>
                        </div>


                        <div className='col-lg-4 col-md-offset-1 section_2_thumbnail'>

                            <div>
                                <NavLink to ="/about_us">

                                    <ul className="staff_img_wrapper flex justify-content-center p-0" ref='images_ul'>
                                        {
                                            this.state.staff.map(element => {

                                                return (
                                                    <li>
                                                        <img src={`images/teachers/${element}.jpg`}
                                                             className='section_2_thumbnail_staff pb-2' id='staffIcon' />
                                                    </li>
                                                )
                                            })

                                        }

                                    </ul>
                                </NavLink>
                            </div>

                            <div>
                                <p className="mb-3"> Kadra</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Radzikowskiego_S2_Staff;
