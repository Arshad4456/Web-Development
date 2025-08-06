import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='Card'>
        <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="developer image" 
        style={{width: 254, height: 140 }}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
