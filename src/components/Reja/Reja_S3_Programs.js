import React, { Component } from 'react';



class Reja_S3_Programs extends Component {
    render() {
        return (


            <div id='programs'>

                <div className='row container_1200 m-auto'>

                    <div className='col-12 text-center'>
                        <hr />
                        <h3> Grupy Krakowiaczka</h3>
                    </div>


                    {/* Grupa Smoczki*/}

                    <div className='col-12 col-md-6'>

                        <div className="programs_bg_1_reja">

                        <div className="programs_text ">
                        <p className='section_3_programs_border_1'> Grupa Smoczki (3-4 lata) </p>
                        </div>
                    {/*</div>*/}
                    </div>
                    </div>


                    {/* grupa Dratewka*/}
                    <div className='col-12 col-md-6'>

                        <div className="programs_bg_2_reja">

                        <div className="programs_text ">
                            <p className='section_3_programs_border_1'> Grupa Smoki (5-6 lat) </p>
                        </div>
                    </div>
                    </div>
                </div>

                </div>

        )
    }
}

export default Reja_S3_Programs;