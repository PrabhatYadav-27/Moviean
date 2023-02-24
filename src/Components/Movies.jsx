import React,{useEffect,useState} from 'react';
import axios from "axios";
import {Oval} from "react-loader-spinner";


function Movies() {
  let[movies,setMovies] = useState([]);

  useEffect(function(){
    (function ()
    {
      axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=fc1050b6a109c08dfcff59b860c309cb&page=1")
  .then((res)=>{
    console.table(res.data.results);
    setMovies(res.data.results);


  })
    })()
    
  

  }, [])

  
  return (
    <div className="mt-4 ">
        <div
        className="mb-6
        font-bold
        text-center
        text-2xl"
        >Trending Movies</div>
        <div className="flex  
         flex-wrap
        justify-center
       ">
        {
          movies.length ==0 ?<Oval
          height ="80"
          width="80"
          radius = "9"
          color="black"
          secondaryColor='gray'
          ariaLabel="loading"
          wrapperStyle
          wrapperClass  /> :
          movies.map((movie)=>{
            console.log(movie)
            return  <div key = {movie.id}
            className="
            bg-[url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jPJfq3s7UybktndveSbhwsReYqH.jpg)]
            w-[160px]
            h-[40vh]
            md:h-[30vh]
            md:w-[180px]
            m-3
            rounded-xl
            hover:scale-110
            duration-300
            bg-center
            bg-cover
            flex items-end
               "
               style={{
                backgroundImage :
                `url(https://image.tmdb.org/t/p/original${movie.poster_path})`
               }}
               >
                <div className ="
                text-xl 
                py-2
                rounded-b-xl
                text-white
                bg-gray-600
                bg-opacity-40
                text-center
                w-full"
                > {movie.title || movie.name}

                </div>
                

           
            
                

            </div>

          })
        }
           
            
        </div>
        
    </div>
  )
}

export default Movies