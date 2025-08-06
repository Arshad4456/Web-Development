import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='flex flex-row justify-around items-center bg-gray-700 text-white font-bold min-h-10'>
        <div className="logo font-bold">
            <span className='text-green-400'>&lt;</span><span>Pass</span><span className='text-green-400 '>OP/&gt;</span>
        </div>
        <div>
            <ul className='flex flex-col md:flex-row gap-3 cursor-pointer'>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/About"><li>About</li></NavLink>
                <NavLink to="/Contact"><li>Contact</li></NavLink>
        
                
            </ul>
        </div>
            <button className='flex justify-between items-center bg-green-600 m-1 rounded-full px-1 cursor-pointer ring-1 ring-white'>
              <img className='w-10 p-1 '  src="/icons/github.svg" alt="github logo" />
              <span className='px-1'>GitHub</span>
            </button>
      </div>
    </nav>
  )
}

export default Navbar
