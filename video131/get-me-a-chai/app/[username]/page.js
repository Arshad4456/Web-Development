import React from 'react'

const Username = ({ params }) => {
  return (
    <>

      <div className="cover w-full relative">
        <img className='object-cover w-full h-[100]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/18.gif?token-hash=7q1qsk9Wsp_KlKf1x_S4aY0Z7pIsXTswUDzKeEDa-r0%3D&token-time=1756944000" alt="" />
        <img height={100} width={100} className='absolute border-2 rounded-full -bottom-12 right-[46%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1__nUveMs5K4VA2cdLheJMT6C-tqFQveppg&s" alt="" />
      </div>
      <div className='flex flex-col justify-center items-center my-14'>
        <div className='font-bold text-lg'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-400'>
          19,662 members . 101 posts . $21,190/release
        </div>
      </div>

      <div className="payment mx-auto mt-8 mb-8 w-[90%] flex justify-center text-white   gap-3">
        <div className="supporters w-1/2 bg-slate-900 rounded-lg p-3">
          <h2 className='m-2 text-2xl font-bold'>Supporters</h2>
          <ul className='px-1 py-2'>
            <div className='flex justify-center items-center'>
              <img src="/avatar.gif" width={30} height={20} alt="" />
              <li>Shubham donated $30 with a message"I support you bro.Lots of ❤"</li>
            </div>
            <div className='flex justify-center items-center'>
              <img src="/avatar.gif" width={30} height={20} alt="" />
              <li>Shubham donated $30 with a message"I support you bro.Lots of ❤"</li>
            </div>
            <div className='flex justify-center items-center'>
              <img src="/avatar.gif" width={30} height={20} alt="" />
              <li>Shubham donated $30 with a message"I support you bro.Lots of ❤"</li>
            </div>
          </ul>
        </div>
        <div className="makePayment w-1/2 bg-slate-900 rounded-lg ">
          <h2 className='m-2 p-3 text-2xl font-bold'>Make Payment</h2>
          <div className='flex flex-col'>
            <input className='p-2 mx-3 mb-2 bg-slate-600 rounded-lg' type="text" placeholder='Enter your name'/>
            <input className='p-2 mx-3 mb-2 bg-slate-600 rounded-lg' type="text" name="" id="" placeholder='Enter message' />
            <input className='p-2 mx-3 mb-2 bg-slate-600 rounded-lg' type="text" placeholder='Enter amount' />
            <button className="text-white mx-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Pay</button>
          </div>
          <div className='payButtons flex gap-2 p-3 pb-5'>
            <button className='bg-slate-500 hover:bg-slate-600 px-4 py-2 rounded-lg cursor-pointer'>Pay $10</button>
            <button className='bg-slate-500 hover:bg-slate-600 px-4 py-2 rounded-lg cursor-pointer'>Pay $10</button>
            <button className='bg-slate-500 hover:bg-slate-600 px-4 py-2 rounded-lg cursor-pointer'>Pay $10</button>
          </div>
          </div>
      </div>

    </>
  )
}

export default Username
