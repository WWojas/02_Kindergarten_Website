import React, { Component } from 'react';


class Reja_S7_News extends Component {
    constructor(props){
            super(props);
            this.state = {
                sliderMainURL: '/images/news/pizzeria.jpg',
                sliderItems: [
                    {
                        url: '/images/news/pizzeria.jpg',
                        desc: 'Warsztaty Młodego Pizzera w Błonia Bistro',
                        link: 'https://www.facebook.com/pg/przedszkolekrakowiaczek/photos/?tab=album&album_id=2169428183322356'
                    },
                    {
                        url: '/images/news/kopiec.jpg',
                        desc: 'Wyprawa na Kopiec Krakusa',
                        link: 'https://www.facebook.com/pg/przedszkolekrakowiaczek/photos/?tab=album&album_id=1989351457996697'
                    },

                    {
                        url: '/images/news/obwarzanki.jpg',
                        desc: 'Krakowskie Muzeum Obwarzanka',
                        link: 'https://www.facebook.com/pg/przedszkolekrakowiaczek/photos/?tab=album&album_id=1964888793776297'
                    },
                    {
                        url: '/images/news/muzeum.jpg',
                        desc: 'Wizyta w Muzeum',
                        link: 'https://www.facebook.com/pg/przedszkolekrakowiaczekII/photos/?tab=album&album_id=356202278276799'
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

export default Reja_S7_News;