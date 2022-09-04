import axios from 'axios';
import React, { useEffect, useState } from 'react'
import request from '../Request'
const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect( () => {
        axios.get(request.requestPopular).then( (response) => {
        setMovies(response.data.results)
        })
    },[])
    // console.log(movie)

  // Trunate a string or put ... if the maximum word is reach
  const truncateString = (str, num) => {
    if(str?.length > num){
      return str.slice(0, num) + '...';
    }else {
      return str;
    }
  }

  return (
    <div className='w-full h-[550px] text-white relative'>
        <div className='w-full h-full'>
          <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
          <div className='absolute top-40 p-5'>
            <h1 className='py-4 text-5xl'>{movie?.title}</h1>
            <div className='space-x-5 flex flex-row mb-6'>
              <button className='border bg-gray-300 text-black font-semibold border-gray-300 py-2 px-5'>Play</button>
              <button className='border bg-transparent text-black-300 border-gray-300 py-2 px-5'>Watch Later</button>
            </div>
            <p className='text-gray-400'>Released {movie?.release_date}</p>
            <p>{truncateString(movie?.overview, 150)}</p>
          </div>
        </div>
    </div>
  )
}

export default Main