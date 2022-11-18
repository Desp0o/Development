import {React, useRef} from 'react';
import {Routes, Route} from "react-router-dom";
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';

import './Contact.css'

import telephone from '../images/telephone.png'
import pin from '../images/pin.png'
import email from '../images/email.png'
import arrow from '../images/arrow.png'




function Contact() {

    // იმეილის გასაგზავნი სკრიპტი
    const form       = useRef()
    const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_j7zw3pp', 'template_7suk37t', form.current, 'lf3j-nerT-hfKW-Fi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}


    return(
        <div className='Contact'>
            
            <Fade delay={200}><p className='Contact_headrer'>კონტაქტი</p></Fade>

            <div className='contact_inner'>
                <div className='contact_inner_left'>
                    

                    
                    <div className='arrow_div'>
                        <Fade left><h1 className='contact_inner_header'>დაჯავშნე ვიზიტი</h1></Fade>
                        <Fade bottom delay={300}><img style={{width:'50px'}} src={arrow} /></Fade>
                    </div>
                    

                </div>

                <div className='contact_inner_right'>
                            
                            <form ref={form} onSubmit={sendEmail} >
                                <Fade right><input className="simpleInput geoStyle" type="text" name="name" placeholder="სახელი" required /></Fade>
                                <Fade right delay={120}><input className="simpleInput geoStyle" type="text" name="number" placeholder="ნომერი" required /></Fade>
                                <Fade right delay={160}><input className="textarea geoStyle" type="text" name="message" placeholder="თქვენი შეტყობინება"/></Fade>
                                <Fade right delay={200}><div className="button_to_cont submit_parent">
                                    <button className="submitBTN button_to_cont_inner geoStyle" type="submit">გაგზავნა</button>
                                </div></Fade>
                            </form>
                   
                </div>
            </div>
        </div>
    )
}

export default Contact;