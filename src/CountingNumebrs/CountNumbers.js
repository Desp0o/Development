import {React, useEffect, useState,useRef} from "react";
import Fade from 'react-reveal/Fade';
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import './counting.css'


function CountNUmbers(){
return(
    <div className="countingNumbers">
            <div className="countingNumbers_inner">
                {/* //გამწვანების ბლოკი */}
                <div  className="block">
                    <Fade bottom >
                        <p className="count_number">
                            <CountUp start={0} end={100} duration={1} suffix={" m2"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <p className="count_txt">გამწვანება</p>
                    </Fade>
                </div>
                
                {/* //პარკინგის ბლოკი */}
                <div className="block">
                    <Fade bottom delay={300}>
                        <p className="count_number">
                            <CountUp start={0} end={220} duration={1} delay={0.06} suffix={" m2"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall={true}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                             </CountUp>    
                        </p>
                        <p className="count_txt">პარკინგი</p>
                    </Fade>
                </div>

                <div className="block">
                    <Fade bottom delay={500}>
                        <p className="count_number">
                            <CountUp start={0} end={80} duration={1} delay={0.08} suffix={" m2"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp> 
                        </p>
                        <p className="count_txt">ღია აუზი</p>
                    </Fade>
                </div>

                <div className="block">
                    <Fade bottom delay={700}>
                        <p className="count_number">
                            <CountUp start={0} end={165} duration={1} delay={0.1} suffix={" m2"}>
                                   {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp> 
                        </p>
                        <p className="count_txt">გასართობი სივრცე</p>
                    </Fade>
                </div>
            </div>
        </div>
)
}

export default CountNUmbers;