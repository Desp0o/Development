import {React, useEffect, useState,useRef} from "react";
import Fade from 'react-reveal/Fade';

import './seling_homes.css'

import maketi from './images/flat.png'
import bath from './images/bathtub.png'
import bed from './images/bed.png'
import cube from './images/cube.png'
import logo from './images/logo.png'


function SellingHomes() {
    return(
       <div className="selling_homes">
             <div className="selling_homes_inner">

                <Fade left >
                <div style={{width:"20%"}} className="for3DAnime">  

                <div className="card">
                        <div className="theFront">
                            <div className="card_img">
                                <img src={maketi} />
                            </div>

                            <div className="card_bottom">
                                <div className="card_bottom_inner">
                                    <p className="card_header">პილარ ნუცუბიძე</p>
                                    <div className="card-icons">
                                        <div className="card_icon_block"> <img src={bath}/> <p>1 </p></div>
                                        <div className="card_icon_block"> <img src={bed}/>  <p>2 </p></div>
                                        <div className="card_icon_block"> <img src={cube}/> <p>74 <span>m2</span></p></div>
                                    </div>
                                </div>
                        
                                <div className="line"></div>

                                <div className="bottom_logo_name">
                                    <img src={logo}/>
                                    <p>Twin</p>
                                </div>
                            </div>
                        </div>

                        <div className="theBack">
                        <div className="card_img">
                                <img src={maketi} />
                            </div>

                            <div className="card_bottom">
                                <div className="card_bottom_inner">
                                    <p className="card_header">პილარ ნუცუბიძე</p>
                                    <div className="card-icons">
                                        <div className="card_icon_block"> <img src={bath}/> <p>1 </p></div>
                                        <div className="card_icon_block"> <img src={bed}/>  <p>2 </p></div>
                                        <div className="card_icon_block"> <img src={cube}/> <p>74 <span>m2</span></p></div>
                                    </div>
                                </div>
                        
                                <div className="line"></div>

                                <div className="bottom_logo_name">
                                    <img src={logo}/>
                                    <p>Twin</p>
                                </div>
                            </div>
                        </div>
                </div> 

                </div>
                </Fade>

                <Fade delay={200} >
                <div style={{width:"20%"}} className="for3DAnime">  

                <div className="card">
                        <div className="theFront">
                            <div className="card_img">
                                <img src={maketi} />
                            </div>

                            <div className="card_bottom">
                                <div className="card_bottom_inner">
                                    <p className="card_header">პილარ ნუცუბიძე</p>
                                    <div className="card-icons">
                                        <div className="card_icon_block"> <img src={bath}/> <p>1 </p></div>
                                        <div className="card_icon_block"> <img src={bed}/>  <p>2 </p></div>
                                        <div className="card_icon_block"> <img src={cube}/> <p>74 <span>m2</span></p></div>
                                    </div>
                                </div>
                        
                                <div className="line"></div>

                                <div className="bottom_logo_name">
                                    <img src={logo}/>
                                    <p>Twin</p>
                                </div>
                            </div>
                        </div>

                        <div className="theBack">
                        <div className="card_img">
                                <img src={maketi} />
                            </div>

                            <div className="card_bottom">
                                <div className="card_bottom_inner">
                                    <p className="card_header">პილარ ნუცუბიძე</p>
                                    <div className="card-icons">
                                        <div className="card_icon_block"> <img src={bath}/> <p>1 </p></div>
                                        <div className="card_icon_block"> <img src={bed}/>  <p>2 </p></div>
                                        <div className="card_icon_block"> <img src={cube}/> <p>74 <span>m2</span></p></div>
                                    </div>
                                </div>
                        
                                <div className="line"></div>

                                <div className="bottom_logo_name">
                                    <img src={logo}/>
                                    <p>Twin</p>
                                </div>
                            </div>
                        </div>
                </div> 

                </div>
                </Fade>

                <Fade right >
                <div style={{width:"20%"}} className="for3DAnime">  

                <div className="card">
                        <div className="theFront">
                            <div className="card_img">
                                <img src={maketi} />
                            </div>

                            <div className="card_bottom">
                                <div className="card_bottom_inner">
                                    <p className="card_header">პილარ ნუცუბიძე</p>
                                    <div className="card-icons">
                                        <div className="card_icon_block"> <img src={bath}/> <p>1 </p></div>
                                        <div className="card_icon_block"> <img src={bed}/>  <p>2 </p></div>
                                        <div className="card_icon_block"> <img src={cube}/> <p>74 <span>m2</span></p></div>
                                    </div>
                                </div>
                        
                                <div className="line"></div>

                                <div className="bottom_logo_name">
                                    <img src={logo}/>
                                    <p>Twin</p>
                                </div>
                            </div>
                        </div>

                        <div className="theBack">
                        <div className="card_img">
                                <img src={maketi} />
                            </div>

                            <div className="card_bottom">
                                <div className="card_bottom_inner">
                                    <p className="card_header">პილარ ნუცუბიძე</p>
                                    <div className="card-icons">
                                        <div className="card_icon_block"> <img src={bath}/> <p>1 </p></div>
                                        <div className="card_icon_block"> <img src={bed}/>  <p>2 </p></div>
                                        <div className="card_icon_block"> <img src={cube}/> <p>74 <span>m2</span></p></div>
                                    </div>
                                </div>
                        
                                <div className="line"></div>

                                <div className="bottom_logo_name">
                                    <img src={logo}/>
                                    <p>Twin</p>
                                </div>
                            </div>
                        </div>
                </div> 

                </div>
                </Fade>

            </div>
       </div>

    )
}
export default SellingHomes;