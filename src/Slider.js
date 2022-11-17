import React, { useState, useEffect, useRef } from 'react';
import AnimatedText from 'react-animated-text-content';

import './slider.css'
import './App.css'

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'



function Slider() {
    const imgArr = [
        {
            image: `${img1}`,
            text: 'თქვენი ტექსტი 1'
        },

        {
            image: `${img2}`,
            text: 'თქვენი ტექსტი 2'
        },

        {
            image: `${img3}`,
            text: 'თქვენი ტექსტი 3'
        }
    ]
    
    const [position, setPosition] = useState(0)
    const [current, setCurrent] = useState('slide')

    const nextSlide = () =>{
      setPosition(position === imgArr.length-1 ? 0 :
        position+1)
  }

    useEffect(()=>{
      const interval =  setInterval(nextSlide,6000)

      return ()=>{
        clearInterval(interval) 
      }
    },[position])
    
  return (
   
    <div className='carousel App'>
        <div className='carousel-inner'>
            <img className={current} src={imgArr[position].image} />
              <div className='content'>
                  <AnimatedText includeWhiteSpaces className='slider-txt'
                    type='words'
                    interval={0.3}
                    duration={1.5}
                    animation={{
                    y: '100px',
                    ease: 'ease',
                    }}
                    >
                    {imgArr[position].text}
                  </AnimatedText>
                                      
              </div>
            
        </div>
    </div>

    

  )
}

export default Slider;





















