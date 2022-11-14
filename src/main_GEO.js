import React from "react";
import {link} from "react-router-dom";

import Navbar from "./navbarGEO";
import Slider from './Slider'

import './App.css'
import './homeGeo.css'

function MainGeo(){
    return(
        <div>
            <Navbar />
            <Slider />

            <div className="call_btn">

            </div>
        </div>
    )
}

export default MainGeo;