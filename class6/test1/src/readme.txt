## To minimize re-rendring by Pushing The State Down

import { useState,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div>
        
        <HeaderWithButton></HeaderWithButton>
        <Header title="gobi"></Header>
        <Header title="gobi"></Header>
        <Header title="gobi"></Header>
        <Header title="gobi"></Header>
        <Header title="gobi"></Header>
    </div>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is abhi")

  return <div>
    <CustomButton title={title} setTitle={setTitle}></CustomButton>
    <Header title={title}></Header>
  </div>
}
function Header({title}){
  return <div>
    {title}
  </div>
}

function CustomButton ({setTitle}){
  function onClickHandler(){
    {setTitle("My name is " + Math.random())}
  }
  return <div>
    <button onClick={ onClickHandler}> Update the title</button>
  </div>
}

export default App
