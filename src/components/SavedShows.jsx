import React, {useState, useEffect} from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import {db} from '../firebase'
import { UpdateDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'
import { async } from '@firebase/util'

const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    const {user} = UserAuth() 

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect( () => {
        onSnapshot(doc(db, 'users', `${user?.email}`), doc => {
            setMovies(doc.data()?.savedShows)
        })
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedId) => {
        try {
            const result = movies.filter( (item) => item.id !== passedId)
            await updateDoc(movieRef, {
                savedShows: result
            })
        } catch (error) {
            console.log(error)
        }
    } 

  return (
    <div >
        <h1 className='text-white font-bold p-4 text-xl'>My Shows</h1>
        <div className='relative flex items-center group'>
            <MdChevronLeft 
                onClick={slideLeft}
                className='bg-white rounded-full left-5 text-2xl absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            />
            <div 
                id={'slider'} 
                className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
            >
                {movies.map( (item, id) => (
                    <div key={id} className='w-[280px] h-92 inline-block cursor-pointer relative p-2'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${item?.img}`} alt={item?.title}/>
                    <div className='absolute top-2 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'> 
                        <p className='flex justify-center items-center text-center h-full font-bold'>{item?.title}</p>    
                        <p onClick={ () => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>                  
                    </div>
                </div>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white right-5 rounded-full text-2xl absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>
    </div>
  )
}

export default SavedShows