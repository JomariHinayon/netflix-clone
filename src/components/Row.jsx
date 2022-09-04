import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([]);
    const [like, setLike] = useState(false);
    
    useEffect( () => {
        axios.get(fetchURL).then( (response) => {
            setMovies(response.data.results) 
        })
    }, [fetchURL])

    // console.log(movies);
  return (
    <>
    
        <h1 className='text-white font-bold pb-4'>{title}</h1>
        <div className='relative flex items-center'>
            <div id={'slider'}>
                {movies.map( (item, id) => (
                    <div className='w-[280px] h-92 inline-block cursor-pointer relative p-2'>
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title}/>
                        <div className='absolute top-2 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'> 
                            <p className='flex justify-center items-center text-center h-full font-bold'>{item?.title}</p>
                            <p>{like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Row