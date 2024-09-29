import { useState } from "react";
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([
    {id: 1, task: "learn Java Scipt"},
    {id: 2, task: "Learn Context-API in React"}
  ]);
  
  const AddTodo = (newTodo) => {
    setTodos([...todos, {id: todos.length + 1, task: newTodo}])
  }


  return (
    <>
     <h1>These is Prop Drilling Todo list Application</h1>
     <TodoForm AddTodo={AddTodo}/>
     <TodoList todos={todos} />
    </>
  )
}

export default App
