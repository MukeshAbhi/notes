//hook
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//state, components

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CustomButtton count={count} setCount={setCount}></CustomButtton>
    </div>
  )
}

// good practise to write reusable code 
// creating a coomponent
function CustomButtton (props){
  function onClickHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}> 
    Counter {props.count}
  </button>
}

export default App
