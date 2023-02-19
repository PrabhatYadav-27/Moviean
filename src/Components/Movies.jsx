import React from 'react'
import image from './banner.jpg';

function movies() {
  return (
    <div className="mt-4">
        <div
        className="mb-6
        font-bold
        text-center
        text-2xl"
        >Trending Movies</div>
        <div className="flex  
        justify-center
        flex-wrap">
            <img src={image} className="
            w-[160] 
            h-[30vh]
            m-2
            rounded-xl
            hover:scale-110
            duration-300
            "  alt="" />
            <img src={image} className="
            w-[160] 
            h-[30vh]
            m-2
            rounded-xl
            hover:scale-110
            duration-300" alt="" />
            <img src={image} className="
            w-[160] 
            h-[30vh]
            m-2
            rounded-xl
            hover:scale-110
            duration-300" alt="" />
            <img src={image} className="
            w-[160] 
            h-[30vh]
            m-2
            rounded-xl
            hover:scale-110
            duration-300" alt="" />
            <img src={image} className="
            w-[160] 
            h-[30vh]
            m-2
            rounded-xl
            hover:scale-110
            duration-300" alt="" />
            <img src={image} className="
            w-[160] 
            h-[30vh]
            m-2
            rounded-xl
            hover:scale-110
            duration-300" alt="" />
        </div>
    </div>
  )
}

export default movies