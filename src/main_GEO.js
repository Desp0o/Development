import React from "react";
import {link} from "react-router-dom";

import Navbar from "./navbarGEO";
import Slider from './Slider'

import './App.css'

function MainGeo(){
    return(
        <div>
            <Navbar />
            <Slider />
        </div>
    )
}

export default MainGeo;