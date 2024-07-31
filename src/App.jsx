import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./components/MovieCard";
// 1028ee8b
const API_URL = "https://omdbapi.com?apikey=1028ee8b";

function App() {
  const [movies, setMovies] = useState([])

  
const inputRef = useRef();

  async function searchMovies(title) {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search); // Sets the array of movies into the variable 'movies' where array of movies = data.Search
  }

 
  useEffect(() => {
    searchMovies("Matrix");
  }, []);
  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-between p-12 md:px-20  text-[#DCBBA2]">
        <h1 className="heading font-poppins font-semibold pb-8  md:text-5xl text-4xl tracking-wider">
          Movie Sphere
        </h1>
        <div className="input-box shadow-2xl mb-12 md:mb-20 w-full md:w-[80%] lg:w-[60%] flex items-center gap-8 justify-center border-[1px] rounded-full px-6 py-2">
          <input
          ref={inputRef}
            placeholder="Search for movies ..."
            type="search"
            // value="Superman"
            onChange={() => {}}
            className="w-full bg-transparent border-none outline-none text-lg "
          />
          <i onClick={() => {searchMovies(inputRef.current.value)}} class="ri-search-line text-xl border-l pl-3 cursor-pointer"></i>
        </div>
        {
          movies?.length > 0 
          ? <div className='w-full font-poppins flex flex-wrap justify-center gap-16'>
          {
            movies.map(
              (movie, index) =>(
                <MovieCard data={movie} key={index}/>
              )
            )
          }
          </div>
          : (
            <div>
              <h2>No movie found !</h2>
            </div>
          )
        }
        
      </div>
    </>
  );
}

export default App;

{
  /* <div className='bg-gray-600 w-full grid gap-4 font-poppins grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'></div> */
/*
<div className='bg-gray-600 w-full font-poppins flex flex-wrap justify-around gap-20'>
*/
}
