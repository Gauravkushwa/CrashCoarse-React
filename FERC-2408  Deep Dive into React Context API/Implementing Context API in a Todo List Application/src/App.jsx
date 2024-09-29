import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import './App.css'
import { TodoProvider } from './context/ToDoContex';


function App() {

  return (
    <>
     <h1>ToDo Applications</h1>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </>
  )
}

export default App;
