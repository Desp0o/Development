import {React, useEffect, useState,useRef} from "react";
import Fade from 'react-reveal/Fade';

import './WhyTwins.css'

import tree from'../images/tree.png'
import bellboy from'../images/bellboy.png'
import secure from'../images/secure.png'
import playground from '../images/playground.png'
import parking from'../images/parking.png'
import stadium from'../images/football-field.png'
import whyTwinBG from '../images/whyTwins.png'


function WhyTwins() {
    return(
        <div className="whyTwins">

            <Fade delay={200}><p className="whyTwins_header">რატომ Twin Development?</p></Fade>

            {/* შიდა მხარე */}
            <div className="whyTwins_inner">

                {/*მარცხენა მხარე*/}
                <div className="whyTwins_inner_left">
                    <div className="row_for_whyTwins">
                       <Fade bottom><div className="icon_n_txt">
                            <img className="whyTwins_ico" src={playground} />
                            <p>სათამაშო მოედანი</p>
                        </div></Fade> 

                        <Fade bottom delay={100}><div className="icon_n_txt">
                            <img className="whyTwins_ico" src={stadium} />
                            <p>სპორტული მოედანი</p>
                        </div></Fade>

                        <Fade bottom delay={200}><div className="icon_n_txt">
                            <img className="whyTwins_ico" src={tree} />
                            <p>გამწვანება</p>
                        </div></Fade>

                    </div>

                    {/* მეორე ხაზი იქონების */}
                    <div className="row_for_whyTwins">
                        
                        <Fade bottom delay={220}><div className="icon_n_txt">
                            <img className="whyTwins_ico" src={parking} />
                            <p>შიდა და გარე პარკინგი</p>
                        </div></Fade>

                        <Fade bottom delay={240}><div className="icon_n_txt">
                            <img className="whyTwins_ico" src={bellboy} />
                            <p>კონსიერჟი</p>
                        </div></Fade>

                        <Fade bottom delay={260}><div className="icon_n_txt">
                            <img className="whyTwins_ico" src={secure} />
                            <p>დაცვის სისტემა</p>
                        </div></Fade>

                    </div>
                </div>

                {/* მარჯვენა მხარე */}
                <div className="whyTwins_inner_right responsive_hidden">
                    <Fade right><img className="whyTwins_inner_BG" src={whyTwinBG} /></Fade>
                </div>

            </div>

        </div>
    )
}

export default WhyTwins;