import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <Todo id={2}></Todo>
    </>
  )
}

function Todo({id}){

  const[todo,setTodo] =useState({});

  useEffect(()=>{
    const numericId = parseInt(id);
    fetch("http://localhost:3000/todosid?id=" + numericId)
    .then(async (res)=> {
      const json = await res.json();
      setTodo(json);
    },[id])
  })

    return(
      <>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
      </>
    )
}

export default App
