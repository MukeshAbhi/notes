import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos] =useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
      .then(async (res)=> {
        const json = await res.json();
        setTodos(json)
      })
  }, [])

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} /> )}
      
    </>
  )
}

function Todo({title,description}){
  return(
    <>
    <h1>{title}</h1>
    <h2>{description}</h2>
    </>
  )
}

export default App
 