import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div>
      <CardWarpper>
      <CardWarpper>
        Hi there
      </CardWarpper>
      </CardWarpper>
      <CardWarpper>
        Hi there
      </CardWarpper>
      <div><CardWarpper>
        Hi there
      </CardWarpper></div>
    </div>
  )
}

function CardWarpper({children}){
  // create a div which has border and inside the div it renders the prop
  return <div  style={{border:"2px solid black ", padding : "20px"}}>
    {children}
  </div>
}



export default App
