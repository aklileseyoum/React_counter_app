import './App.css';
import React, { useState, useEffect, useRef } from 'react'

function App() {
  const[count, setCount] = useState(0)
  const decrease = useRef()
  const increase = useRef()

  function Increment() {
    setCount(prevCount => prevCount + 1)
  }

  function Decrement() {
    setCount(prevCount => prevCount - 1)
  }

  useEffect(() => {
    document.title = 'Current Count: ' + count
  },[{count}])

  return (
    <div className="displayed">
      <button onClick={Decrement} ref={decrease}><span>-</span></button>
      <span>  {count}  </span>
      <button onClick={Increment} ref={increase}><span>+</span></button>
    </div> 
  );
}

export default App;
