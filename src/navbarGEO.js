import React from "react";
import {Link, link} from "react-router-dom";

import './navbar.css'
import './font.css'

import logo from './images/logo.png'
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"

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


            <div className="burger_menu">
                <div className="burger_menu_compay_logo">
                    <img src={logo}/>
                </div>

                <div className="burger-menu_logo">
                    <AiOutlineMenu className="burger_logo" />
                </div>
            </div>
        </div>

        
    )
}

export default Navbar;