import React from 'react'
import image from './banner.jpg';
import "./banner.css";

function Banner() {
  return (
   <>
   <img src={image} alt=''/>
   <div className='banner-header
   bg-gray-800
   text-white
   text-xl
   pt-1
   bg-opacity-40'>JOHN 4 WICK</div>

   </>
  )
}

export default Banner