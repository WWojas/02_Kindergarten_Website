import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Homepage from './Home/Homepage.js';
import Radzikowskiego from './Radzikowskiego/Radzikowskiego.js';
import Reja from './Reja/Reja.js';
import Error from "./Error/Error.js";
import Our_Philosophy from "./Subpages/Our_Philosophy"
import Extended_Offer from "./Subpages/Extended_Offer";
import Enrollment from "./Subpages/Enrollment";
import About_Us from "./Subpages/About_Us";

class App extends Component{
    render(){
        return (

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {Homepage} />
                    <Route  path="/radzikowskiego" component = {Radzikowskiego} />
                    <Route  path="/reja" component = {Reja} />

                    <Route path="/our_philosophy" component = {Our_Philosophy} />
                    <Route path="/extended_offer" component = {Extended_Offer} />
                    <Route  path="/enrollment" component = {Enrollment} />
                    <Route  path="/about_us" component = {About_Us} />

                    <Route component={Error} />
                </Switch>
            </BrowserRouter>

        );
    }
}


export default App;