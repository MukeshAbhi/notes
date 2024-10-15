import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const[render,setRender] = useState(true);

   useEffect(
    ()=>{
      setInterval(()=>setRender(r=>!r),5000)
    },[]
   )
  
  return (
    <>
      {render? <MyComponent /> : <div>from div 2</div>}
        
    </>
  )
}


const MyComponent = ()=>{
  useEffect(()=>{
    console.log("My component mounted");

    return ()=>{
      console.log("My component unmounted")
    }
  },[])

  return(
    <div>From div 1</div>
  )
}

export default App
