import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
function App() {


  return (
    <>
      <Navbar/>
      <div className='cards'>
      <Card title="Card 1" description="description of card 1"/>
      <Card title="Card 2" description="description of card 2"/>
      <Card title="Card 3" description="description of card 3"/>
      <Card title="Card 4" description="description of card 4"/>
      <Card/>
   
      </div>
      <Footer />
    </>
  )
}

export default App
