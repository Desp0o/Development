import React, { useState, useEffect, useRef } from 'react';
import AnimatedText from 'react-animated-text-content';

import './slider.css'
import './App.css'

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import { getAllByTestId } from '@testing-library/react';



function Slider() {
    const imgArr = [
        {
            image: `${img1}`,
            text: 'თქვენი ტექსტი უნდა იყოს აქ'
        },

        {
            image: `${img2}`,
            text: 'თქვენი ტექსტი უნდა იყოს აქ'
        },

        {
            image: `${img3}`,
            text: 'თქვენი ტექსტი უნდა იყოს აქ'
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderLength = imgArr.length

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === sliderLength-1 ? 0 :
            currentSlide+1)
    }
    
    useEffect(()=>{
        let slideInterval = setInterval(nextSlide,5000)

        return ()=>{
            clearInterval(slideInterval)
        }
    },[currentSlide])
    
  return (
   
    <div className='carousel App'>
        <div className='carousel-inner'>
            {imgArr.map((slide, index) =>{
                return(
                    <>
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                            <img src={slide.image} />
                            <div className='content'>
                            
                                    <AnimatedText className='slider-txt' includeWhiteSpaces={true}
                                        type='words'
                                        interval={0.1}
                                        duration={1.5}
                                        animation={{
                                        y: '100px',
                                        ease: 'ease',
                                        }}
                                        >
                                        {slide.text}
                                    </AnimatedText>
                            </div>
                            </>
                        )}
                    </div>
                    </>
                )
            })}
        </div>
    </div>

    

  )
}

export default Slider;