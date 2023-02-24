import React,{useEffect,useState}from 'react';
import axios from 'axios';
import {Oval} from 'react-loader-spinner';



function Banner() {
  let [bannerMovie,setBanner] = useState("");

  useEffect(function(){
    (function ()
    {
      axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=fc1050b6a109c08dfcff59b860c309cb")
  .then((res)=>{
    console.table(res.data.results);
    setBanner(res.data.results[0]);


  })
    })()
    
  

  }, [])
  
  return (
   <>
   {
    bannerMovie == ""?
    <div  className="
    flex justify-center">
          <Oval
        height ="80"
        width="80"
        radius = "9"
        color="black"
        secondaryColor='gray'
        ariaLabel="loading"
        wrapperStyle
        wrapperClass  />
    </div> :

        <div 
      className="
      h-[80vh] md:h[60vh]
      bg-center
      bg-cover
      flex items-end"
      style ={{
        backgroundImage : `url(https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path})`
      }}
      >
        <div
        className="text-xl
        md:text-3xl
        p-2
        text-white
        bg-gray-600
        bg-opacity-40
        text-center
        w-full">{bannerMovie.title}</div>
      </div>

   }
   
   {/* learning to add cover via tailwind */}
   

   </>
  )
}

export default Banner