import React, { useState, useEffect } from 'react';
import AnimatedText from 'react-animated-text-content';

import './slider.css'
import './App.css'

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'

const imgArr = [
  {
      id:1,
      key:'a',
      image: `${img1}`,
      text1: 'სახლი', text2:'სადაც', text3:'ყველაფერი', text4:'გაქვს'
  },

  {
      id:2,
      key:'b',
      image: `${img2}`,
      text1: 'სიტყვა1', text2:'სიტყვა2', text3:'სიტყვა3', text4:''
  },

  {
      key:'c',
      id:3,
      image: `${img3}`,
      text1: 'სიტყვა1', text2:'სიტყვა2', text3:'სიტყვა3', text4:'სიტყვა3'
  }
]

function Slider() {
     const [index, setIndex] = useState(0)
     const slideLength = imgArr.length

     

     useEffect(()=>{

      const sliderTimer = setInterval(()=>{
        if(index === slideLength-1){
          setIndex(0)
        }else{
          setIndex(index+1)
        }
        
        console.log(index);
      },7000)

      return ()=>{
        clearInterval(sliderTimer)
      }
     },[index])

  return (
   
    <div className='carousel App'>
        <div className='carousel-inner'>
            {imgArr.map((slide, slideIndex)=>{

              let slideClass = 'slide'
              let txtClass = 'sliderTxt'

              {index === slideIndex  ? slideClass = 'slide active' : slideClass = 'slide'}
              {index === slideIndex  ? txtClass = 'sliderTxt active' : txtClass = 'sliderTxt'}
                
              return(
                <div className='mapping-div' key={slide.key}>
                  <img key={slide.id} className={slideClass} src={slide.image} />
                  
                  <div className='content'>
                    <AnimatedText includeWhiteSpaces animationType="block" className='slider-txt'
                      type='words'
                      interval={0.1}
                      duration={1}
                      animation={{
                      y: '100px',
                      ease: 'ease',
                      }}
                      >
                      {'ტექტსი უნდა იყოს აქ'}
                    </AnimatedText>


                    

                  </div>
                </div>
              )


            })}
             
            
        </div>
    </div>

    

  )
}

export default Slider;





















