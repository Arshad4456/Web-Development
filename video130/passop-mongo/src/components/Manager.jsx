import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" })

  const [passwordArray, setPasswordArray] = useState([])

  const getPasswords = async () =>{
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    console.log(passwords)
      setPasswordArray(passwords)
  }

  useEffect(() => {
    getPasswords()
  }, [])


  const ref = useRef()
  const passwordRef = useRef()
  const showPassword = () => {
    // alert("I am Clicked")
    passwordRef.current.type = "text"
    if (ref.current.src.includes("icons/eyecross.png")) {
      passwordRef.current.type = "password"
      ref.current.src = "icons/eye.png"
    }
    else {
      passwordRef.current.type = "text"
      ref.current.src = "icons/eyecross.png"
    }
  }

  const savePassword = async () => {
    if(form.site.length >3 && form.username.length >3 && form.password.length>3){

      // await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type":
      //   "application/json"}, body:JSON.stringify({id: form.id}) })
        
        setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
        await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type":
        "application/json"}, body:JSON.stringify({ ...form, id: uuidv4() }) })

      // localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      // console.log([...passwordArray, form])
      setform({ site: "", username: "", password: "" })
      
      toast(`Password Saved Successfully!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }else{
    toast(`Password not Saved!`);

  }
  }
  const editPassword = (id) => {
    setform({...passwordArray.filter(item=>item.id===id)[0], id: id})
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
    // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    // console.log("editing Password", id)
  }
  const deletePassword = async (id) => {
    let c = confirm("Are you want to delete?")
    if(c){
      setPasswordArray(passwordArray.filter(item=>item.id!==id))
      let res = await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type":
        "application/json"}, body:JSON.stringify({id}) })
      // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
    }
  //   console.log([...passwordArray, form])

   toast(`Password Deleted!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const copyText = (text) => {
    // alert("copied")
    toast(`${text} 🦄 to clipboard!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigator.clipboard.writeText(text)
  }


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <main className=' flex justify-center flex-col m-1'>

        <div className='md:container flex flex-col items-center my-5 md:w-3/5 border-0 p-2 justify-center mx-auto'>
          <div className="logo font-bold text-2xl">
            <span className='text-green-400'>&lt;</span><span>Pass</span><span className='text-green-400 '>OP/&gt;</span>
          </div>
          <div className="flex justify-center items-center text-center own font-bold text-xs text-gray-400"><p>Your own Password Manager</p></div>
          <div className="websiteUrl my-2 w-full p-2">
            <input value={form.site} className='border-2 border-green-200 w-full rounded-full px-2 py-0.5' type="text" onChange={handleChange} placeholder='Enter website URL' name='site' />
          </div>
          <div className="relative UserPass flex flex-col md:flex-row gap-3 w-full px-2">
            <input value={form.username} className='border-2 border-green-200 md:w-1/2 rounded-full px-2 py-0.5' type="text" onChange={handleChange} placeholder='Enter Username' name='username' />
            <input ref={passwordRef} value={form.password} className=' border-2 border-green-200 md:w-1/2 rounded-full px-2 py-0.5' type="password" onChange={handleChange} placeholder='Enter Password' name='password' />
            <img ref={ref} onClick={showPassword} src="icons/eye.png" className='absolute right-4 top-11 md:top-0 py-2 w-4.5 cursor-pointer' alt="eye" />
          </div>
          <div className="addPassword my-4">
            <button onClick={savePassword} className='bg-green-400 px-3 py-2 border-0 rounded-full font-bold text-sm flex justify-center items-center cursor-pointer hover:bg-green-300' type="button">
              <lord-icon
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="hover">
              </lord-icon> Add Password</button>
          </div>
        </div>

        <div className='passTable mx-auto w-4/5 text-center flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Password to show</div>}
          {passwordArray.length != 0 &&
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className='bg-green-800 text-white'>
                <tr>
                  <th className='w-12 p-2'>Website URL</th>
                  <th className='w-12 p-2'>Username</th>
                  <th className='w-12 p-2'>Password</th>
                  <th className='w-12 p-2'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-green-100'>
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index} className=''>
                      <td className='py-3 flex justify-center items-center'><a href={item.site} target='_blank'>{item.site}</a>
                        <span className='lordcopy' onClick={() => { copyText(item.site, Bounce) }}><lord-icon className=""
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover" 
                          style={{ "width": "16px", "height": "16px", "paddingLeft": "3px", "cursor": "pointer" }}>
                        </lord-icon></span></td>
                      <td className='py-3'><div className='flex justify-center items-center'>{item.username}
                        <span className='lordcopy' onClick={() => { copyText(item.username, Bounce) }}><lord-icon
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover"
                          style={{ "width": "16px", "height": "16px", "paddingLeft": "3px", "cursor": "pointer" }}>
                        </lord-icon></span></div>
                      </td>
                      <td className='py-3 flex justify-center items-center'><div className='flex justify-center items-center'>{"*".repeat(item.password.length)}
                        <span className='lordcopy' onClick={() => { copyText(item.password, Bounce) }}><lord-icon className=""
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover"
                          style={{ "width": "16px", "height": "16px", "paddingLeft": "3px", "cursor": "pointer" }}>
                        </lord-icon></span></div>
                      </td>
                      <td className='py-3 '>
                        <div className='flex justify-center items-center'>
                          <span className='mx-1' onClick={()=>{editPassword(item.id)}}>
                            <lord-icon
                              src="https://cdn.lordicon.com/athrxnxq.json"
                              trigger="hover"
                              style={{"width":"25px","height":"25px","cursor":"pointer"}}>
                            </lord-icon>
                          </span>
                          <span className='mx-1' onClick={()=>{deletePassword(item.id)}}>
                            <lord-icon
                              src="https://cdn.lordicon.com/xyfswyxf.json"
                              trigger="hover"
                              style={{"width":"25px","height":"25px","cursor":"pointer"}}>
                              
                            </lord-icon>
                          </span>
                        </div>
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>}

        </div>

      </main>
    </>
  )
}

export default Manager
