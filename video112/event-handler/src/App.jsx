import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const [form, setForm] = useState({email:"", phone:""})
  const [form, setForm] = useState({})

const handleClick = () =>{
  alert("Hey, I am clicked")
}

const mouseOver = () =>{
  alert("Hey, I am mouse overed")
}

const handleChange  = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
}
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={mouseOver}>
        I am a red div.
      </div>

      {/* <input type="text" name='email' value={form.email}  onChange={handleChange}/> */}
      <input type="text" name='email' value={form.email?form.email:""}  onChange={handleChange}/>
      {/* <input type="text" name='phone' value={form.phone}  onChange={handleChange}/> */}
      <input type="text" name='phone' value={form.phone?form.phone:""}  onChange={handleChange}/>
    </>
  )
}

export default App
