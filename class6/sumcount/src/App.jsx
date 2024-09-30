import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  
  let finalSum = useMemo(() => {
    console.log("Memo got called")
    let sum = 0;
    for (let i = 0; i <= inputValue; i++){
      sum+= i;
    }
    return sum;
  },[inputValue])
    

  return (
    <>
      <input type='number' value={inputValue} onChange={(e) =>{setInputValue(e.target.value)} }/>
      <div>Sum is {finalSum}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       </div>
    </>
  )
}

export default App
