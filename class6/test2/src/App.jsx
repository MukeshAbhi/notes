import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: "go to gym",
      description: "for 5 hrs"
    },{
      id:2,
      title: "go to class",
      description: "for 5 hrs"
    },{
      id:3,
      title: "go to movie",
      description: "for 5 hrs"
    }
  ])

  function addTodo(){
    setTodos([...todos,{
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map( todo => <Todo key = {todo.id} title={todo.title} description={todo.description} id={todo.id}/>)}
    </>
  )

  function Todo ({title,description,id}){
    return <div>
      <h1>
        {id}
      </h1>
      <h1>
        {title}
      </h1>
      <h2>
        {description}
      </h2>
    </div>
  }
}

export default App
