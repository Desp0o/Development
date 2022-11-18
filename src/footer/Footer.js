import React from 'react';

import './Footer.css'

import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import viber from '../images/viber.png'
import whatsApp from '../images/whatsapp.png'
import telegram from '../images/telegram.png'
import { Fade } from 'react-reveal';

function Footer() {
    return(
        <div className='footer'>
            <div className='footer_inner_top'>
                
            <Fade delay={200}><img style={{width:'150px'}} src={logo}/></Fade>


            </div>

            <div className='footer_inner_bottom'>
            <Fade delay={200}><p className='footer_header'>დაგვიკავშირდით</p></Fade>
                <div className='footer_inner_bottom_list'>
                <Fade bottom ><img src={facebook} /></Fade>
                <Fade bottom delay={140}><img src={viber} /></Fade>
                <Fade bottom delay={160}><img src={whatsApp} /></Fade>
                <Fade bottom delay={180}><img src={telegram} /></Fade>
                </div>
                <Fade delay={200}><div className='footer_numbers'>
                <p>223 25 23</p>
                <p>995 555 11 00 02</p>
                <p>ნუცუბიძის ქ #45</p>
                </div></Fade>
            </div>
        </div>
    )
}

export default Footer;