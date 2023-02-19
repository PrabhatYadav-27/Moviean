import React from 'react'
// import image from './banner.jpg';
// import "./banner.css";

function Banner() {
  return (
   <>
   {/* <img src={image} alt=''/>
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

   </div> */}
   {/* learning to add cover via tailwind */}
   <div 
   className="bg-banner h-[70vh]
   bg-center
   bg-cover
   flex items-end">
    <div
    className="text-xl
    p-2
    text-white
    bg-gray-600
    bg-opacity-40
    text-center
    w-full">JOHN 4 WICK</div>
   </div>

   </>
  )
}

export default Banner