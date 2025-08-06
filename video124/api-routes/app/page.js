"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () =>{
    let data = {
      name: "Arshad",
      role: "Coder"
    }
    let a = await fetch("/api/add",{ 
    method: "POST", headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    let res = await a.json()
    console.log(res)
  }
  return (
    <div>
      <h1 className="">Next.js api</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
