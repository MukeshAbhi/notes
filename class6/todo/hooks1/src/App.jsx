import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [idno, setIdno] =useState();

  return (
    <>
    <Button num={1} clickHandler={()=> setIdno(1)} />
    <Button num={2} clickHandler={()=> setIdno(2)} />
    <Button num={3} clickHandler={()=> setIdno(3)} />
    <Button num={4} clickHandler={()=> setIdno(4)} />
    <Button num={5} clickHandler={()=> setIdno(5)} />
    <div className='ID'>Id : {idno}</div>
    <Todo id={idno}></Todo>
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
      })
    },[id])
  

    return(
      <>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
      </>
    )
}


function Button({num,clickHandler}){
  return(
    <button className='num' onClick={clickHandler} > {num}</button> 
  )
}
export default App
