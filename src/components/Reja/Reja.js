import React, { Component } from 'react';
import Reja_S1_BV from "./Reja_S1_BV.js";
import Reja_S2_Staff from "./Reja_S2_Staff";
import Reja_S3_Programs from "./Reja_S3_Programs";
import Reja_S4_Pricing from "./Reja_S4_Pricing";
import Reja_S5_FAQ from "./Reja_S5_FAQ";
import Reja_S6_Locations from "./Reja_S6_Locations";
import Reja_S7_News from "./Reja_S7_News";
import Reja_S8_Contact from './Reja_S8_Contact';


class Reja extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">

                <Reja_S1_BV />

                    <Reja_S2_Staff />

                    <Reja_S3_Programs />

                    <div id='pricing_faq'>
                    <div className="row container_1200 m-auto">
                        <div className="col-12 col-sm-6">
                    <Reja_S4_Pricing />
                        </div>
                        <div className="col-12 col-sm-6">
                    <Reja_S5_FAQ />
                        </div>
                    </div>
                    </div>

                    <Reja_S6_Locations />
                    <Reja_S7_News />
                    <Reja_S8_Contact />
                </div>
            </div>
        )
    }
}

export default Reja;