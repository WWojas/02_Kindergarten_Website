import React, { Component } from 'react';
import {NavLink} from "react-router-dom";



class Radzikowskiego_S4_Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 8,
            price: 60,
            isChecked: false,
            food: false,
            food_img: 'no_food_img.svg',
            food_txt: 'bez wyżywienia',

        }
    }

    adjustHours = (event) => {
        let sliderVal = parseInt(event.target.value, 10);

        this.setState({
            hours: sliderVal
        });


        if (sliderVal === 5 ) {
            this.setState ({
                price: 0 + this.state.food
            })
        } else if (sliderVal === 5 && !this.state.food ) {
            this.setState ({
                price: 0
            })

        } else if (sliderVal === 6) {
            this.setState ({
                price: 20 + this.state.food
            })
        } else if (sliderVal === 7) {
            this.setState({
                price: 40 + this.state.food
            })
        } else if (sliderVal === 8) {
            this.setState ({
                price: 60 + this.state.food
            })
        } else if (sliderVal === 9) {
            this.setState ({
                price: 80 + this.state.food
            })
        } else if (sliderVal === 10) {
            this.setState ({
                price: 100 + this.state.food
            })
        } else if (sliderVal === 11) {
            this.setState ({
                price: 120 + this.state.food
            })

        }
    };


    addFoodPrice = (event) => {


        if (event.target.checked) {
            this.setState({
                hours: 8,
                price: 280,
                food: 220,
                food_img: 'food_img.svg',
                food_txt: 'z wyżywieniem'
            })

        } else if (!event.target.checked) {
            this.setState ({
                hours: 8,
                price: 60,
                food: 0,
                food_img: 'no_food_img.svg',
                food_txt: 'bez wyżywienia'
            })

        }

    };





render() {


    return (

            <div className='row '>

                <div className='col-12 text-center '>
                    <h3> Oferta</h3>
                </div>


                <div className='col-12 text-center'>


                    <div className="hours_image">
                        <img src='images/pricing_calendar.svg' className='pricing_calendar'/>
                        <p class="pricing_text"> {this.state.hours}h dziennie / {this.state.price} zł miesięcznie </p>
                    </div>

                    <div className="slidecontainer">
                        {/*<input type="range" min="5" max="11" value={event.target.value} id='slider' onChange={this.adjustHours}/>*/}


                        <div className="checkbox">

                            <label className="switch">
                        <input type="checkbox" name="food1" value="true" onChange={this.addFoodPrice} id='checkbox'/>
                                <span className="slider round"> </span>
                        </label>

                            <div class="checkbox_catering">
                            <img src={`images/${this.state.food_img}`} className="checkbox_img"/>
                            <p className="food_checkbox_text"> {this.state.food_txt} </p>
                            </div>
                        </div>

                    </div>
                    <NavLink to ="/extended_offer"> <button className="btn btn_hover mb-4"> Szczegóły oferty</button></NavLink>
                </div>

            </div>
        
    )
}
}

export default Radzikowskiego_S4_Pricing;