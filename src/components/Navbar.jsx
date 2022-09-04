import { async } from '@firebase/util';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className='z-[100] absolute w-full'>
        <div className='flex flex-col  sm:flex-row justify-between p-5'>
          <Link to='/'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer uppercase'>Nextflix</h1>
          </Link>

          {user?.email ? 
          <div className='space-x-5 mt-5 sm:mt-0'>
              <Link to='/Account'>
                <button className='text-white'>Account</button>
              </Link>
              <button onClick={handleLogout} className='bg-red-600 px-6 py-2 text-white text-center '>Logout</button>
            </div>
             : 
            <div className='space-x-5 mt-5 sm:mt-0'>
            <Link to='/login'>
              <button className='text-white'>Sign in</button>
            </Link>
            <Link to='/signup'>
              <button className='bg-red-600 px-6 py-2 text-white text-center '>Sign Up</button>
            </Link>
          </div>}

        </div>
    </nav>
  )
}

export default Navbar