import React from 'react'
import SavedShows from '../components/SavedShows'
import bgImage from './../images/netflix-bg.jpg'

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img className='w-full h-[440px] object-cover' src={bgImage}/>
      </div>
      <div className='bg-black/60 fixed top-0 w-full h-[550px]'>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-white'>My Shows</h1>
        </div>
      </div>
      <SavedShows/>
    </>
  )
}

export default Account