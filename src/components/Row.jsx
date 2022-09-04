import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, rowId}) => {
    const [movies, setMovies] = useState([]);
    
    useEffect( () => {
        axios.get(fetchURL).then( (response) => {
            setMovies(response.data.results) 
        })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <>
        <h1 className='text-white font-bold p-4 text-xl'>{title}</h1>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full left-5 text-2xl absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
            <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map( (item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white right-5 rounded-full text-2xl absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>
    </>
  )
}

export default Row