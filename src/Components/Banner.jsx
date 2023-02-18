import React from 'react'
import image from './banner.jpg';
import "./banner.css";

function Banner() {
  return (
   <>
   <img src={image} alt=''/>
   <div className = "banner-header
   h-10">
   
   
   <div className="bg-gray-800
   text-white
   text-2xl
   font-bold
   pt-1
   bg-opacity-40
   text-center
    
   ">JOHN 4 WICK</div>

   </div>
   

   </>
  )
}

export default Banner