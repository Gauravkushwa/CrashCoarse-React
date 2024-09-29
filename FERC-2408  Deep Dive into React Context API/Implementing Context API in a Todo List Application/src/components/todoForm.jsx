import { useContext, useState } from "react"
import { TodoContext } from "../context/ToDoContex";
import './style.css'


const TodoForm = () => {
    const [text, setText] = useState('');
    const {AddTodo} = useContext(TodoContext);

    const handleSubmit = (e) => {
      e.preventDefault()
      if (text.trim()) {
        AddTodo({
          id: Date.now(), // Generate a unique ID for each todo
          text,
        });
        setText('');
      }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Todo:</label>
            <input type="text"
              placeholder="Enter Todo" value={text}
              onChange={(e) => setText(e.target.value)}
              
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;