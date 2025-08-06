import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setPosts(data))
    // .then((error) => console.error("Error fetching data :", error))
  
  }, [])
  
  return (
    <>
     <div className="container">
      <h1>Posts</h1>
      <div className="card-container">
        {posts.map((post) =>{
          return(
          <div className="card" key={post.id}>
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          )
        })}
      </div>
     </div>
    </>
  )
}

export default App
