import { useEffect, useState } from 'react'
import axios from 'axios'
import { date } from 'zod';

function useTodos(){
  const [todos, setTodos] = useState([]);
  const [loading,setLoaading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
        const response = await axios.get("http://localhost:3000/todos");
        const data = response.data;
        setTodos(data);
        setLoaading(false)
    };
    const value = setInterval(fetchTodos,n * 1000);

    return () => {
      clearInterval(value);
    }
      
    
   
  }, [n]);
  return {todos,loading};
}

function App() {
  const {todos,loading}= useTodos(5);


  return (
    <>
      {loading?"...loading...": todos.map(todo => <Track todo={todo} />)}
      
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App