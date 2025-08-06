import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 flex flex-col justify-center items-center text-white w-full'>
        <div className="logo font-bold">
            <span className='text-green-400'>&lt;</span><span>Pass</span><span className='text-green-400 '>OP/&gt;</span>
        </div>
      <div className='flex justify-center items-center'>Created with<img className='w-8 mx-1' src="/icons/heart.png" alt="" />by Arshad</div>
    </div>
  )
}

export default Footer
