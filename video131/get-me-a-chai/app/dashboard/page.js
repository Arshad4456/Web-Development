"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Dashboard = () => {
  const {data: session}= useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() =>{

    if (!session) {
      router.push('/login')
  }},[router, session])

  const handleChange = (e) =>{
    setform({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div className='w-3/5 mx-auto my-10 flex flex-col py-2 px-2'>
        <h2 className='text-2xl font-bold text-center'>Welcome to your Dashboard</h2>
        <div className='flex flex-col gap-0.5 mb-1'>
          <label className='font-bold' htmlFor="name">Name</label>
          <input value={form.name? form.name:""} onChange={handleChange} name='name' id='name' className='bg-slate-600 px-3 py-1 rounded-md' type="text" placeholder='Enter your name'/>
        </div>
        <div className='flex flex-col gap-0.5 mb-2'>
          <label className='font-bold' htmlFor="email">Email</label>
          <input value={form.email? form.email:""} onChange={handleChange} name='email' id='email'  className='bg-slate-600 px-3 py-1 rounded-md' type="text" placeholder='Enter your email'/>
        </div>
        <div className='flex flex-col gap-0.5 mb-2'>
          <label className='font-bold' htmlFor="username">Username</label>
          <input value={form.username? form.username:""} onChange={handleChange} name='username' id='username'  className='bg-slate-600 px-3 py-1 rounded-md' type="text" placeholder='Enter your username'/>
        </div>
        <div className='flex flex-col gap-0.5 mb-2'>
          <label className='font-bold' htmlFor="profile">Profile Picture</label>
          <input value={form.profile? form.profile:""} onChange={handleChange} name='profile' id='profile'  className='bg-slate-600 px-3 py-1 rounded-md' type="text" placeholder='Profile link'/>
        </div>
        <div className='flex flex-col gap-0.5 mb-2'>
          <label className='font-bold' htmlFor="cover">Cover Picture</label>
          <input value={form.cover? form.cover:""} onChange={handleChange} name='cover' id='cover'  className='bg-slate-600 px-3 py-1 rounded-md' type="text" placeholder='Cover link'/>
        </div>
        <div className='flex flex-col gap-0.5 mb-2'>
          <label className='font-bold' htmlFor="stripeid">Stripe Id</label>
          <input value={form.stripeid? form.stripeid:""} onChange={handleChange} name='stripeid' id='stripeid'  className='bg-slate-600 px-3 py-1 rounded-md' type="text" placeholder='Stripe Id'/>
        </div>
        <div className='flex flex-col gap-0.5 mb-2'>
          <label className='font-bold' htmlFor="stripesecret">Stripe Secret</label>
          <input value={form.stripesecret? form.stripesecret:""} onChange={handleChange} name='stripesecret' id='stripesecret'  className='bg-slate-600 px-3 py-1 rounded-md' type="text" placeholder='Stripe Secret'/>
        </div>

        <button className=" text-white my-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Save</button>
        
      </div>
    </>
  )
}

export default Dashboard
