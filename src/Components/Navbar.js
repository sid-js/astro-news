import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-5 px-20 h-28 items-center bg-white bg-opacity-5 backdrop-blur-lg">
        <img src="/astro-news-logo.svg" className="w-64"/>
        <span className='text-xl font-astro text-white'>Everything about space and astronomy </span>
    </nav>

  )
}

export default Navbar