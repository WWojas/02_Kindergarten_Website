import React, { Component } from 'react';
import Radzikowskiego_S1_BV from "./Radzikowskiego_S1_BV.js";
import Radzikowskiego_S2_Staff from "./Radzikowskiego_S2_Staff";
import Radzikowskiego_S3_Programs from "./Radzikowskiego_S3_Programs";
import Radzikowskiego_S4_Pricing from "./Radzikowskiego_S4_Pricing";
import Radzikowskiego_S5_FAQ from "./Radzikowskiego_S5_FAQ";
import Radzikowskiego_S6_Locations from "./Radzikowskiego_S6_Locations";
import Radzikowskiego_S7_News from "./Radzikowskiego_S7_News";
import Radzikowskiego_S8_Contact from './Radzikowskiego_S8_Contact';

class Radzikowskiego extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">

                    <Radzikowskiego_S1_BV />

                    <Radzikowskiego_S2_Staff />

                    <Radzikowskiego_S3_Programs />

                    <div id='pricing_faq'>
                        <div className="row container_1200 m-auto">
                    <div className="col-12 col-sm-6">
                    <Radzikowskiego_S4_Pricing />
                    </div>
                    <div className="col-12 col-sm-6">
                    <Radzikowskiego_S5_FAQ />
                    </div>
                    </div>
                    </div>

                    <Radzikowskiego_S6_Locations />
                    <Radzikowskiego_S7_News />
                    <Radzikowskiego_S8_Contact />

                </div>
            </div>
        )
    }
}

export default Radzikowskiego;