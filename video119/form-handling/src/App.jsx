import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"



function App() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting},
  } = useForm();

  const delay = (d) =>{
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {method: "POST", 
     headers: {"Content-Type": "application/json",
     }, body: JSON.stringify(data)})
    let res = await r.text()
    // await delay(4) //Simulating Network delay
    console.log(data, res)}
  // const onSubmit = (data) => {console.log(data)}

   return (
    <>
    {isSubmitting && <div>Loading....</div>}
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='username' {...register("username", {required:{value: true, message:"This Field is required"}, minLength:{value: 3, message:"Min length is 3"}, maxLength:{value: 8, message: "max-length is 8"},})} type="text" />
      {errors.username && <div className='red'>{errors.username.message}</div>}
      <input placeholder='password' {...register("password")} type="password" />
      <input disabled={isSubmitting} type="submit" value="submit" />
    </form>
    
    </>
  )
}

export default App
