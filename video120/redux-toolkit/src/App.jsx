import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Navbar />
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span> The count is {count} </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="incrementByAmount value"
          onClick={() => dispatch(incrementByAmount(10))
          }
          
        >
          IncrementByAmount
        </button>
        <button
          aria-label="multiply value"
          onClick={() => dispatch(multiply())
          }
          
        >
          Multiply by 2
        </button>


      </div>
    </div>
  )
}

export default App
