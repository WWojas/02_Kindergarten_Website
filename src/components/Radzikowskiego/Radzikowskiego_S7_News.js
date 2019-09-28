import React, { Component } from 'react';



class Radzikowskiego_S7_News extends Component {
    constructor(props){
        super(props);
        this.state = {
            sliderMainURL: '/images/news/pizzeria_2.jpg',
            sliderItems: [
                {
                    url: '/images/news/pizzeria_2.jpg',
                    desc: 'Wizyta w Pizzerii',
                    link: 'https://www.facebook.com/pg/przedszkolekrakowiaczekII/photos/?tab=album&album_id=398634624033564'
                },
                {
                    url: '/images/news/mikolaj.jpg',
                    desc: 'Mikołaj 2018',
                    link: 'https://www.facebook.com/pg/przedszkolekrakowiaczekII/photos/?tab=album&album_id=363937317503295'
                },

                {
                    url: '/images/news/muzeum_2.jpg',
                    desc: 'Wizyta w Muzeum',
                    link: 'https://www.facebook.com/pg/przedszkolekrakowiaczekII/photos/?tab=album&album_id=350750992155261'
                },
                {
                    url: '/images/news/dzien_babci.jpg',
                    desc: 'Dzień Babci i Dziadka',
                    link: 'https://www.facebook.com/pg/przedszkolekrakowiaczekII/photos/?tab=album&album_id=399490960614597'
                },

            ],

            sliderCounter: 0,

        }
    }


    componentDidMount() {
        this.changeSliderURL()
    }


    changeSliderURL = () => {

        this.interval = setInterval( () => {

            this.setState ({
                sliderCounter: this.state.sliderCounter >= this.state.sliderItems.length-1 ? 0 : this.state.sliderCounter + 1,
            });

        }, 3000)

    };

    prevSlide = () => {
        this.setState ({
            sliderCounter: this.state.sliderCounter <= 1 ?  this.state.sliderItems.length-1 : this.state.sliderCounter - 1,
        });
    };

    nextSlide = () => {
        this.setState ({
            sliderCounter: this.state.sliderCounter >= this.state.sliderItems.length-1 ? 0 : this.state.sliderCounter + 1,
        });

    };



    render() {

        return (

            <div id='news'>

            <div className='row row_outer container_1200 m-auto'>

                <div className='col-12 text-center'>
                    <hr />
                    <h3> Aktualności</h3>
                </div>

                <div className='col-12'>

                    <div className="news_reja" style={{
                        backgroundImage: `url(${this.state.sliderItems[this.state.sliderCounter].url})`
                    }} >
                        <div className="flex_height_100 ">
                            <div className="prevBtn" onClick={this.prevSlide}><img src='/images/nextArrow.svg' /></div>

                            <div className="news_desc">
                                <div>
                                    <h3> {this.state.sliderItems[this.state.sliderCounter].desc} </h3>
                                </div>
                                <div>
                                    <a href={this.state.sliderItems[this.state.sliderCounter].link}>
                                        <button className='btn'> Zobacz </button>
                                    </a>
                                </div>
                            </div>

                            <div className="nextBtn" onClick={this.nextSlide}><img src='/images/nextArrow.svg' /></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}

export default Radzikowskiego_S7_News;

