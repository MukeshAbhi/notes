import { useState,memo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const clickHandle = useCallback( function clickHandle(){
    console.log("Hi there");
  },[])
  return (
    <>  
      <div>
        <Button handleClick={clickHandle} />
      </div>   
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </>
      )  
}

const Button = memo(function Button({handleClick}){
  console.log("child render")
  return(
    <button onClick={handleClick}>Button Clicked</button>
  )
})

export default App
