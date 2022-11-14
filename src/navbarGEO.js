import React from "react";
import {Link, link} from "react-router-dom";

import './navbar.css'
import './font.css'

import logo from './images/logo.png'

function Navbar(){
    return(
        <div className="Nav">
            <div className="navbar-upper">
                <p><span>მისამართი /</span>გულუას ქ. 10/12, თბილისი</p>
                <p><span>ტელეფონი /</span>+995 596 33 33 00</p>
                <p><span>ელ-ფოსტა /</span>sales@allianceconstruction.ge</p>
            </div>

            <div className="navbar-bottom">
                <div className="logo_div">
                    <img src={logo} />
                </div>

                <div className="navbar_menu">
                    <span>მთავარი</span>
                    <span>ჩვენ შესახებ</span>
                    <span>პროექტის შესახებ</span>
                    <Link><span>ბინები</span></Link>
                    <span>კონტაქტი</span>
                </div>

                <div className="language">
                    <Link>ინგლისური</Link>
                    <Link>რუსული</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;