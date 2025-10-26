"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () =>{
    router.push(`/generate?handle=${text}`)
  }
  return (
    <>
   <main>
    <section className="bg-[#254fla] grid grid-cols-2 items-center justify-center min-h-[120vh]">
      
        <div className="ml-[5vw]">
          <div className="mb-3">
          <p className="text-amber-300 font-extrabold text-5xl">Everything you are.</p>
          <p className="text-amber-300 font-extrabold text-5xl">In one,</p>
          <p className="text-amber-300 font-extrabold text-5xl">simple link</p>
          <p className="text-amber-300 font-extrabold text-5xl mb-3">in bio.</p>
          <p className="text-white text-lg">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          </div>
          <div className="flex gap-2">
            <input onChange={(e)=>setText(e.target.value)} className="bg-white px-3 py-2 rounded-md focus:outline-lime-800" type="text" placeholder="bittr.ee/your-url" />
            <button onClick={()=>createTree()} className="bg-pink-200 hover:bg-pink-300 font-semibold px-4 py-3 rounded-full cursor-pointer">claim your bittree</button>
          </div>
        </div>
        <div className="mr-[5vw]">
          <img src="./home.png" alt="home image" />
        </div>
   
    </section>
    <section className="bg-red-400 min-h-[100vh]">

    </section>
    </main>
    </>
  );
}
