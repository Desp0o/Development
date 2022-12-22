import {React, useEffect, useState,useRef} from "react";
import { motion } from "framer-motion"
import './load.css'

export default function LoadScreen(){
    
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

    const [load, setLoad] = useState('loading')


    useEffect(()=>{
        const loadScreenInterval = setTimeout(()=>{
          document.body.style.overflowY = 'scroll';
              setLoad('loading_deactivate')
              console.log('მაუნტ');
          },3000)
  
          return ()=>{
              clearTimeout(loadScreenInterval)
          }
      },[])

    return(
        <div className={load}>
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


            </div>
        </div>
    )
}