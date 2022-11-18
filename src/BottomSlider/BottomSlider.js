import React from 'react';
import Fade from 'react-reveal/Fade';
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";


import './BottomSlider.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/hom1.jpg'
import img5 from '../images/home2.jpeg'
import img6 from '../images/home3.webp'
import img7 from '../images/home4.jpg'



function BottomSlider() {
    return(


<Fade delay={200}><div className='bottomSlider'>
    <div className='bottomSlider_inner'>

        <Gallery>
            <Item
            original={img4}
            thumbnail={img4}
            width="720"
            height="405"
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img4}
                />
            )}
            </Item>

            <Item
            width="720"
            height="405"
            original={img1}
            thumbnail={img1}
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img1}
                />
            )}
            </Item>

            <Item
            width="720"
            height="405"
            original={img2}
            thumbnail={img2}
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img2}
                />
            )}
            </Item>

            <Item
            width="720"
            height="405"
            original={img3}
            thumbnail={img3}
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img3}
                />
            )}
            </Item>

            <Item
            width="720"
            height="405"
            original={img5}
            thumbnail={img5}
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img5}
                />
            )}
            </Item>

            <Item
            width="720"
            height="405"
            original={img6}
            thumbnail={img6}
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img6}
                />
            )}
            </Item>

            <Item
            width="720"
            height="405"
            original={img7}
            thumbnail={img7}
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img7}
                />
            )}
            </Item>

            <Item
            original={img4}
            thumbnail={img4}
            width="720"
            height="405"
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img4}
                />
            )}
            </Item>

            <Item
            width="720"
            height="405"
            original={img1}
            thumbnail={img1}
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img1}
                />
            )}
            </Item>

            <Item
            width="720"
            height="405"
            original={img2}
            thumbnail={img2}
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img2}
                />
            )}
            </Item>

            <Item
            width="720"
            height="405"
            original={img3}
            thumbnail={img3}
            >
            {({ ref, open }) => (
                <img
                className='imgclass'
                ref={ref}
                onClick={open}
                src={img3}
                />
            )}
            </Item>
  </Gallery>

  </div>
  </div></Fade>
    )
}


export default  BottomSlider;