import React from 'react';
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

import './BottomSlider.css'

function BottomSlider() {
    return(
        <div className='bottomSlider'>
           <SlideshowLightbox className='bottomSlider_inner' theme="lightbox">
                <img className='w-full rounded' src='https://source.unsplash.com/pAKCx4y2H6Q/1400x1200' />
                <img className='w-full rounded' src='https://source.unsplash.com/AYS2sSAMyhc/1400x1200' />  
                <img className='w-full rounded' src='https://source.unsplash.com/Kk8mEQAoIpI/1400x1200' />   
                <img className='w-full rounded' src='https://images.pexels.com/photos/236588/pexels-photo-236588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                <img className='w-full rounded' src='https://images.pexels.com/photos/1051243/pexels-photo-1051243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' /> 
                <img className='w-full rounded' src='https://images.pexels.com/photos/2693/call-box-phone-box-phones-public.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                <img className='w-full rounded' src='https://images.pexels.com/photos/163711/auto-vw-vw-bus-vehicle-163711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                <img className='w-full rounded' src='https://images.pexels.com/photos/4913514/pexels-photo-4913514.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
                <img className='w-full rounded' src='https://images.pexels.com/photos/4072639/pexels-photo-4072639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                <img className='w-full rounded' src='https://images.pexels.com/photos/4558481/pexels-photo-4558481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />         
            </SlideshowLightbox> 
        </div>
    )
}


export default  BottomSlider;