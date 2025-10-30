"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname= usePathname()
  const showNavbar = ["/", "/generate"].includes(pathname)

  return ( <> {showNavbar && <nav className='bg-white flex w-[90%] mx-auto justify-between items-center px-4 py-3 rounded-full fixed top-10 right-[5%]'>
    <div className='flex gap-10 pl-6 items-center justify-center'>
    <div className='flex justify-center items-center'>
      <Link href={"/"}>
        <img className="nav-desktop-logo w-28" loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt=""></img></Link>
    </div>
      <ul className='flex gap-4'>
        <Link className="hover:bg-gray-100 px-3 py-2 rounded-full" href="/products">Products</Link>
        <Link className="hover:bg-gray-100 px-3 py-2 rounded-full" href="/">Templates</Link>
        <Link className="hover:bg-gray-100 px-3 py-2 rounded-full" href="/">Marketplace</Link>
        <Link className="hover:bg-gray-100 px-3 py-2 rounded-full" href="/">Learn</Link>
        <Link className="hover:bg-gray-100 px-3 py-2 rounded-full" href="/">Pricing</Link>
      </ul>
    </div>
    <div className='flex gap-2'>
      <button className='bg-gray-100 hover:bg-gray-200 py-3 px-5 rounded-lg font-bold cursor-pointer'>Login</button>
      <button className='bg-gray-800 py-3 px-5 rounded-full text-white font-bold cursor-poinLinkr'>Sign up free</button>
    </div>
    </nav>
}</>
  )
}

export default Navbar
