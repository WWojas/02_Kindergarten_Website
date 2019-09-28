import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';



class Homepage extends Component {
    render() {
        return (
            <div>

                    {/* NAVBAR */}
                <div className="container-fluid">

                    <div className="row">

                            {/* REJA */}
                            <div className='reja col-12 col-sm-6'  >

                                <div className='text-content text-center'>
                                        <h4> Przedszkole<br/>przy ul. Mikołaja Reja 13 </h4>
                                        <Link to="/reja" className='align-middle'>
                                        <button className='homepage_btn'> Odwiedź stronę</button>
                                        </Link>
                                </div>
                            </div>


                            {/* RADZIKOWSKIEGO */}
                            <div className='radzikowskiego col-12 col-sm-6'>

                                    <div className='text-content text-center'>
                                        <h4> Przedszkole <br/> przy ul. E. Radzikowskiego 92 </h4>
                                        <Link to="/radzikowskiego" className='align-middle'>
                                        <button className='homepage_btn'> Odwiedź stronę</button>
                                        </Link>
                                    </div>
                            </div>

                            </div>

                            </div>

                        </div>







        )
    }
}

export default Homepage;