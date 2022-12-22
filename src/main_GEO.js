
import {React, useEffect, useState,useRef} from "react";
import {Link} from "react-router-dom";

import CountNUmbers from "./CountingNumebrs/CountNumbers";
import SellingHomes from "./SellingHomes/SellingHomes";
import WhyTwins from "./whyTwins/WhyTwins";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import BottomSlider from './BottomSlider/BottomSlider.js'
import Footer from "./footer/Footer";
import MovingTXT from "./MovingTXT/MovingTXT";
import CountDown from "./CountDown/CountDown";
import LoadScreen from "./LoadScreen/LoadScreen";
import Slider from './MainSlider/Slider'
// ..



import logo from './images/logo.png'
import {AiOutlineMenu}  from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"

import './App.css'
import './homeGeo.css'
import './navbar.css'




function MainGeo(){
    
    const [overlay, setOverlay] = useState('overlay_deactive')
    const [toggle, setToggle]   = useState(false)
    const [open, setOpen] = useState('burger_logo')
    const [close, setClose] = useState('hide_logo')
    const [dashboard, setDashboard] = useState('dashboard hidden_dashboard')
  
    function burgerToggle(){
        if(!toggle){
            setOpen('hide_logo')
            setClose('burger_logo-close')
            setToggle(true)
            setDashboard('dashboard')
            setOverlay('overlay_active')
        }else{
            setOverlay('overlay_deactive')
            setOpen('burger_logo')
            setClose('hide_logo')
            setToggle(false)
            setDashboard('dashboard hidden_dashboard')
        }
    }

    const headerRef = useRef(null)

    const handleClick = (refname) => {
        refname.current?.scrollIntoView({behavior: 'smooth'});
      };

    return(
        <div >
        <LoadScreen />

        {/* ნავიგაცია ///////////////////// */}
        <div className="Nav">
            {/* <div className="navbar-upper">
                <p><span>მისამართი /</span>გულუას ქ. 10/12, თბილისი</p>
                <p><span>ტელეფონი /</span>+995 596 33 33 00</p>
                <p><span>ელ-ფოსტა /</span>sales@allianceconstruction.ge</p>
            </div> */}

            <div className="navbar-bottom">
                <div className="logo_div">
                    <img src={logo} />
                </div>

                <div className="navbar_menu">
                    <span>მთავარი</span>
                    <Link><span>ბინები</span></Link>
                    <span>პროექტის შესახებ</span>
                    <span>ჩვენ შესახებ</span>
                    <span>კონტაქტი</span>
                </div>

                <div className="language">
                    <Link>ENG</Link>
                    <Link>RUS</Link>

                    <div className="nav-btn">
                        <p>555 11 00 02</p>
                    </div>
                </div>
            </div>


            <div className="burger_menu">
                <div className="burger_menu_compay_logo">
                    <img src={logo}/>
                </div>

                <div className="burger-menu_logo">
                    <AiOutlineMenu className={open} onClick={burgerToggle}/>
                    <AiOutlineClose className={close} onClick={burgerToggle}/>
                </div>
            </div>

           
        </div>

        <div className={dashboard}>
                <div className="dashboard_inner">
                    <span>მთავარი</span>
                    <Link><span>ბინები</span></Link>
                    <span>პროექტის შესახებ</span>
                    <span>ჩვენ შესახებ</span>
                    <span>კონტაქტი</span>
                    <Link style={{color:'#C2A561'}}>ENG</Link>
                    <Link style={{color:'#C2A561'}}>RUS</Link>
                </div>
        </div>

        <div className={overlay} onClick={burgerToggle}></div>
        
        {/* სლაიდერი ///////////////////  */}
        <div className="carousel_main_page">
            <Slider/>
            <div className="call_btn" onClick={()=>handleClick(headerRef)}>
                    <p style={{color:'white'}}>მოითხოვე ზარი</p>
            </div>
        </div>
            
        {/* ციფრების მთვლელი     */}
        <CountNUmbers />

        <SellingHomes />

        <WhyTwins />

        <MovingTXT />

        <AboutUs />
        
        <Contact />

        <BottomSlider />

        <Footer />
        
        <CountDown />
        
        </div>
    )
}

export default MainGeo;