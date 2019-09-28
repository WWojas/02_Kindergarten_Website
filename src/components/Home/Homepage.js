import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Homepage extends Component {
    render() {
        return (
            <div>

                    {/* NAVBAR */}
                <div className="container-fluid">

                    <div className="row">

                            {/* REJA */}
                            <div className='reja col-12'>

                                <div className='text-content text-center'>
                                        <h4> Przedszkole<br/>przy ul. Mikołaja Reja 13 </h4>
                                        <NavLink to="/reja" className='align-middle'>
                                        <button className='homepage_btn'> Odwiedź stronę</button>
                                        </NavLink>
                                </div>
                            </div>


                            {/* RADZIKOWSKIEGO */}
                            <div className='radzikowskiego col-12'>

                                    <div className='text-content text-center'>
                                        <h4> Przedszkole <br/> przy ul. E. Radzikowskiego 92 </h4>
                                        <NavLink to="/radzikowskiego" className='align-middle'>
                                        <button className='homepage_btn'> Odwiedź stronę</button>
                                        </NavLink>
                                    </div>
                            </div>

                            </div>

                            </div>

                        </div>







        )
    }
}

export default Homepage;