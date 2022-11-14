import React from "react";
import {useRef} from "react";
import {link} from "react-router-dom";

import Navbar from "./navbarGEO";
import Slider from './Slider'

import './App.css'
import './homeGeo.css'
import './font.css'

function MainGeo(){

    const headerRef = useRef(null)

    const handleClick = (refname) => {
        refname.current?.scrollIntoView({behavior: 'smooth'});
      };

    return(
        <div >
            <Navbar/>

            <div className="carousel_main_page">
            <Slider/>
            <div className="call_btn" onClick={()=>handleClick(headerRef)}>
                <p style={{color:'white'}}>მოითხოვე ზარი</p>
            </div>
            </div>
            

            

            <h1>sad</h1>
            <h1>sad</h1>
            <h1>sad</h1>
            <h1>sad</h1>
            <h1>sad</h1>
            <h1>sad</h1>
            <h1>sad</h1>
            <h1>sad</h1>
            <h1 ref={headerRef}>sad</h1>
        </div>
    )
}

export default MainGeo;