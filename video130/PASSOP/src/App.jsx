import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css'
import Manager from './components/Manager';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
     <div className="min-h-[88vh] p-16 top-0 z-[-2] w-full transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <Manager />
      </div>
      <Footer />
      <Outlet />
    </>
  )
}

export default App
