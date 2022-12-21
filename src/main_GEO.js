
import {React, useEffect, useState,useRef} from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion"
import CountNUmbers from "./CountNumbers";
import SellingHomes from "./SellingHomes";
import WhyTwins from "./whyTwins/WhyTwins";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import BottomSlider from './BottomSlider/BottomSlider.js'
import Footer from "./footer/Footer";
import MovingTXT from "./MovingTXT/MovingTXT";
import CountDown from "./CountDown/CountDown";
// ..



import logo from './images/logo.png'
import {AiOutlineMenu}  from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"

import Slider from './Slider'

import './App.css'
import './homeGeo.css'
import './navbar.css'
import './load.css'
import './counting.css'

const pathVariants = {
    hidden: {
        opacity: 1,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2.5,
            ease: "easeIn" }
    }
    
    
}

function MainGeo(){
    const [load, setLoad] = useState('loading')
    const [overlay, setOverlay] = useState('overlay_deactive')
    const [toggle, setToggle]   = useState(false)
    const [open, setOpen] = useState('burger_logo')
    const [close, setClose] = useState('hide_logo')
    const [dashboard, setDashboard] = useState('dashboard hidden_dashboard')
  
    

    useEffect(()=>{

      const loadScreenInterval = setTimeout(()=>{
        document.body.style.overflowY = 'scroll';
            setLoad('loading_deactivate')
        },3000)

        

        return ()=>{
            clearTimeout(loadScreenInterval)
        }
    })
    
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
            
        
        <div className={load}>
            

                    {/* წარწერებიიიიიიიი */}
                <div className="container">

                <motion.svg style={{height:'150px'}} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="700.000000pt" height="700.000000pt" viewBox="0 0 700.000000 700.000000"
            preserveAspectRatio="xMidYMid meet" initial="hidden" animate="visible">
            <metadata>
            Created by potrace 1.11, written by Peter Selinger 2001-2013
            </metadata>
            <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)"
            fill="none" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="200" >
            <motion.path  variants={pathVariants}
            d="M0 3500 l0 -3501 1898 4 c1043 1 1908 6 1922 9 14 4 55 9 92 13 37 3
            80 8 95 11 148 25 223 40 308 61 55 13 107 26 115 28 48 11 263 84 370 127
            278 110 595 290 816 463 28 22 68 54 90 70 21 17 48 39 60 51 12 11 34 31 50
            43 37 29 173 161 244 238 403 434 697 974 835 1534 32 128 30 118 46 209 7 41
            13 77 14 80 1 3 5 32 9 65 4 33 10 71 12 85 25 151 24 702 -1 825 -2 11 -7 39
            -9 63 -9 72 -36 224 -51 282 -8 30 -16 66 -18 80 -3 14 -17 64 -31 112 -15 48
            -29 95 -31 105 -7 31 -107 298 -124 331 -5 9 -34 71 -66 137 -111 235 -296
            520 -473 730 -135 159 -386 402 -507 491 -22 16 -46 35 -53 42 -26 24 -203
            144 -309 209 -94 57 -306 168 -413 216 -223 98 -622 215 -828 242 -15 2 -40 6
            -57 9 -16 2 -57 7 -90 11 -33 3 -73 9 -90 12 -16 3 -884 8 -1927 10 l-1898 4
            0 -3501z m3476 1160 c28 0 95 -64 613 -581 320 -319 581 -583 581 -587 0 -4
            -262 -268 -583 -588 l-582 -581 -583 1 -584 1 1 1090 c0 600 0 1125 1 1167 0
            76 0 77 28 80 20 2 935 1 1108 -2z"/>
            </g>
                </motion.svg>


                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1>Twins<span></span></h1>
                        </div>

                        <div className="role">
                            <div className="block"></div>
                            <p>Development</p>
                        </div>

                    </div>


                {/* <div className="load_txt">
                <div className="opening_text1">T
                    <p className="hidden letter-w" data-text="w">w</p>
                    <p className="hidden letter-i" data-text="i">i</p>
                    <p className="hidden letter-n" data-text="n">n</p>
                </div>

                <div className="opening_text2">D
                    <span className="hidden letter-e1" data-text="e">e</span>
                    <span className="hidden letter-v"  data-text="v">v</span>
                    <span className="hidden letter-e2" data-text="e">e</span>
                    <span className="hidden letter-l"  data-text="l">l</span>
                    <span className="hidden letter-o"  data-text="o">o</span>
                    <span className="hidden letter-p"  data-text="p">p</span>
                    <span className="hidden letter-m"  data-text="m">m</span>
                    <span className="hidden letter-e3" data-text="e">e</span>
                    <span className="hidden letter-n2" data-text="n">n</span>
                    <span className="hidden letter-t"  data-text="t">t</span>

                </div>
                </div>
            
                <div className="img-container">
                    
                    <div className="slider-div-1">
                        <img className="slide-1" src={img1} />
                    </div>

                    <div className="slider-div-2">
                        <img className="slide-2" src={img2} />
                    </div>

                    <div className="slider-div-3">
                        <img className="slide-3" src={img3} />
                    </div>

                    <div className="slider-div-4">
                        <img className="slide-4" src={img1} />
                    </div>

                </div> */}




                </div>
            </div>




















































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