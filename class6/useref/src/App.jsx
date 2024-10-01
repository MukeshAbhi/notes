import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputRef = useRef(null);


  const focusInput = () => {
    inputRef.current.innerHTML = 13; // This focuses the input element
};

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
      <div>
        <button onClick={()=>{console.log(inputRef.current)}}>Click Me</button>
      </div>
    </div>
  );
}

export default App
