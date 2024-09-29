import { useContext } from "react";
import './style.css'
import { TodoContext } from "../context/ToDoContex";


const TodoList = () => {
    const {todos, RemoveTodo} = useContext(TodoContext);
    return(
       <>
        <h1>Todo list</h1>
        <table>
            <thead>
                <th>S. No</th>
                <th>ToDo</th>
                <th>Actions</th>
            </thead>
            <tbody>
               {todos.map((todo, index) => (
                <tr key={todo.id}>
                    <td>{index + 1}</td>
                    <td>{todo.text}</td>
                    <td><button onClick={()=> RemoveTodo(todo.id)}>Remove Todo</button></td>
                </tr>
               ))}
            </tbody>
        </table>
       </>
    )
}

export default TodoList;