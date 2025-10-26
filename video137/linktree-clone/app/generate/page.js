"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

    const searchParams = useSearchParams()
    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")

    const [links, setLinks] = useState([{link: "", linktext:""}])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")

    const handleChange =  (index, link, linktext) => {
        setLinks((initialLinks) =>{
            return initialLinks.map((item, i) =>{
                if(i== index){
                    return{link, linktext}
                }
                else{
                    return item
                }
            })
        })
    }

    const addLink = ()=> {
        setLinks(links.concat([{link:"", linktext: ""}]))
    }

    const submitLinks = async () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic
        });

        console.log(raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()

        if(result.success){
            toast.success(result.message)
            setLinks([])
            setpic("")
            sethandle("")
        }
        else{
            toast.error(result.message)
        }
    

        
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
                    {links && links.map((item, index)=>{
                       return <div key={index} className='mx-4 my-2'>
                        <input value={item.link || ""} onChange={e=>{handleChange(index, e.target.value, item.linktext)}} className='focus:outline-pink-500 bg-white px-3 py-2 ml-2 rounded-full' type="text" placeholder='Enter link' />
                    <input value={item.linktext || ""} onChange={e=>{handleChange(index, item.link, e.target.value)}} className='focus:outline-pink-500 bg-white px-3 py-2 ml-2 rounded-full' type="text" placeholder='Enter link text' />
                </div>
                    })}
                    <button onClick={()=>addLink()} className=' bg-slate-700 text-white font-semibold px-4 py-2 ml-2 rounded-full cursor-pointer'>+ Add Link</button>
                    </div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold text-lg mb-2'>Step 3: Add Picture and Finalize</h2>
                    <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className='focus:outline-pink-500 bg-white px-3 py-2 ml-2 rounded-full mb-2' type="text" placeholder='Enter link to your picture' />
                    <button disabled={pic=="" || handle=="" || links[0].linktext==""} onClick={()=>{submitLinks()}} className='disabled:bg-slate-400 bg-slate-700 w-fit text-white font-semibold px-4 py-2 ml-2 my-5 rounded-full'>Create Your Bittree</button>
                </div>
            </div>

            <div className='col2 mx-auto '>
                <img className='h-[50vw]' src="/generate.png" alt="" />
            </div>
        </div>
    )
}

export default Generate
