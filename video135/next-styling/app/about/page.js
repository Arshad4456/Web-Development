"use client"
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="container">
        <h1>This is about page</h1>
        <p>All details about my website</p>


        {/* <style jsx global> */}
        <style jsx>{`
        .container{
            background-color: red;
        }
    `}
      </style>
      </div>

      <div className="container">
        <h1>This is the second container</h1>
        <p>Just to show for style jsx</p>
      </div>
      
    </div>

   
  )
}

export default page
