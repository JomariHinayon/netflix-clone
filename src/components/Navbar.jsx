import React from 'react'

const Navbar = () => {
  return (
    <nav className='z-[100] absolute w-full'>
        <div className='flex flex-row justify-between p-5'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer uppercase'>Nextflix</h1>
            <div className='space-x-5'>
                <button className='text-white'>Sign in</button>
                <button className='bg-red-600 px-6 py-2 text-white text-center '>Sign Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar