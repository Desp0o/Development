
import {React, useEffect, useState,useRef} from "react";
import {Link, link} from "react-router-dom";

import logo from './images/logo.png'
import {AiOutlineMenu}  from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import homeICO from './images/home.ico'

import Slider from './Slider'

import './App.css'
import './homeGeo.css'
import './font.css'
import './navbar.css'
import './font.css'
import './load.css'

function MainGeo(){
    const [load, setLoad] = useState('loading')
    const [overlay, setOverlay] = useState('overlay_deactive')
    const [toggle, setToggle]   = useState(false)
    const [open, setOpen] = useState('burger_logo')
    const [close, setClose] = useState('hide_logo')
    const [dashboard, setDashboard] = useState('dashboard hidden_dashboard')
    
    setTimeout(()=>{
        setLoad('loading_deactivate')
    },2000)
    
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
            <img src={homeICO} className="loading_logo"/>
        </div>

        {/* ნავიგაცია ///////////////////// */}
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
                    <AiOutlineMenu className={open} onClick={burgerToggle}/>
                    <AiOutlineClose className={close} onClick={burgerToggle}/>
                </div>
            </div>

           
        </div>

        <div className={dashboard}>
                <div className="dashboard_inner">
                    <span>მთავარი</span>
                    <span>ჩვენ შესახებ</span>
                    <span>პროექტის შესახებ</span>
                    <Link><span>ბინები</span></Link>
                    <span>კონტაქტი</span>
                    <Link style={{color:'#C2A561'}}>ინგლისური</Link>
                    <Link style={{color:'#C2A561'}}>რუსული</Link>
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
            
       
        
        </div>
    )
}

export default MainGeo;