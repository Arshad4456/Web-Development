import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-4 bg-gray-600 text-white text-sm py-3'>
        
        <div className="logo font-bold text-lg text-gray-200 flex justify-center items-center">
          <img width={44} src="/tea.gif" alt="" />GetMeaChai</div>
        <div className="links">
            {/* <ul className='flex gap-3 font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>SignUp</li>
                <li>LogIn</li>
            </ul> */}
           <Link href="/login">
           <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">LogIn</button>
           </Link>
        </div>
    </nav>
  )
}

export default Navbar
