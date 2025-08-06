import logo from './logo.svg';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
const [value, setValue] = useState(0);

  function clickme() {
    setValue(value + 1)
  }

  return (
    <div>
    <Navbar logoText ="CodeWithHarry" />
    <div>Here are the Buttons</div>
    <Mybutton value={value} onClick={clickme} />
    <Mybutton value={value} onClick={clickme} />
    <Mybutton />
    <Footer/>
    </div>
  );
}

function Mybutton({value, onClick}) {
  
  return (
    <div className="App">
      <div>Clicked {value} Times</div>
      <button onClick={onClick}>
        Click me
      </button>
    </div>
  )
}

export default App;
