import React,{useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
      alert("color was changed")
    }, [color])
    
  return (
    <div>
      I am {color} color.....
    </div>
  )
}

export default Navbar
