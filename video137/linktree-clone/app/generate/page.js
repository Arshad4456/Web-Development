"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Generate = () => {

    const [links, setlinks] = useState([{link: "", linktext:""}])
    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [handle, sethandle] = useState("")
    const [pic, setpic] = useState("")

    const addlink = async (link, text, handle) => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "linktext": text,
            "handle": handle,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        toast(result.message)

        
    }


    const notify = () => toast('Wow so easy !');
    return (
        <div className='grid grid-cols-2 min-h-[120vh] bg-[#E9C0E9]'>
            <div className=' col1 flex flex-col justify-center mx-auto'>
                <div className='font-bold text-3xl my-3'>
                    <h1>Create Your Bittree</h1>
                </div>
                <div className='item mb-3 '>
                    
                    <ToastContainer />
                    <h2 className='font-semibold text-lg mb-2'>Step 1: Claim Your Handle</h2>
                    <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} className='focus:outline-pink-500 bg-white px-3 py-2 ml-2 rounded-full' type="text" placeholder='Choose a Handle' />
                </div>
                <div className='item mb-3 '>
                    <h2 className='font-semibold text-lg mb-2'>Step 2: Add Links</h2>
                    <input value={linktext || ""} onChange={e=>{setlinktext(e.target.value)}} className='focus:outline-pink-500 bg-white px-3 py-2 ml-2 rounded-full' type="text" placeholder='Enter link text' />
                    <input value={link || ""} onChange={e=>{setlink(e.target.value)}} className='focus:outline-pink-500 bg-white px-3 py-2 ml-2 rounded-full' type="text" placeholder='Enter link' />
                    <button onClick={()=>addlink(handle, linktext, link)} className=' bg-slate-700 text-white font-semibold px-4 py-2 ml-2 rounded-full cursor-pointer'>Add Link</button>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold text-lg mb-2'>Step 3: Add Picture and Finalize</h2>
                    <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className='focus:outline-pink-500 bg-white px-3 py-2 ml-2 rounded-full mb-2' type="text" placeholder='Enter link to your picture' />
                    <button onClick={()=>addlink(handle, linktext, link)} className='bg-slate-700 w-fit text-white font-semibold px-4 py-2 ml-2 my-5 rounded-full'>Create Your Bitlink</button>
                </div>
            </div>

            <div className='col2 mx-auto '>
                <img className='h-[50vw]' src="/generate.png" alt="" />
            </div>
        </div>
    )
}

export default Generate
