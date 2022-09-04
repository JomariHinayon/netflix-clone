import  {React, useState} from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

const Movie = ({item}) => {
    const [like, setLike] = useState(false);
    const {user} = UserAuth();
    const [saved, setSaved] = useState(false)

    const movieId = doc(db, 'users', `${user?.email}`)
    const saveShow = async () => {
      if(user?.email) {
        setLike(!like)
        setSaved(true)
        await updateDoc(movieId, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          })
        })
      }else {
        alert("Please Login to saved a movie!")
      }
    } 
  return (
    <div className='w-[280px] h-92 inline-block cursor-pointer relative p-2'>
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title}/>
                        <div className='absolute top-2 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'> 
                            <p className='flex justify-center items-center text-center h-full font-bold'>{item?.title}</p>
                            <p onClick={saveShow}>{like ? 
                            <FaHeart className='absolute top-4 left-4 text-gray-300'/> 
                            : 
                            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
                        </div>
                    </div>
  )
}

export default Movie 