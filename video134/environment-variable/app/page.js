"use client"
import Image from "next/image";

export default function Home() {
  // console.log("Id:", process.env.ID)
  // console.log("Secret:", process.env.SECRET)

  return (
    
    <div>I am home page and the Id is {process.env.NEXT_PUBLIC_ID} and the Secret is {process.env.NEXT_PUBLIC_SECRET}</div>
  );
}
