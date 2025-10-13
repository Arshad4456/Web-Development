import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
    <nav className='bg-purple-700 flex justify-between items-center px-3 py-2 text-white'>
        <div className="logo font-bold text-2xl text-blue-200">
           <Link href="/"><span>BitLinks</span></Link>
        </div>
        <div className=''>
            <ul className='flex justify-center items-center gap-3 px-3'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-2 font-bold'>
                <Link href="/shorten"><button className='bg-purple-500 px-2 py-1.5 rounded-lg cursor-pointer'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 px-2 py-1.5 rounded-lg cursor-pointer'>Github</button></Link>
            </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
