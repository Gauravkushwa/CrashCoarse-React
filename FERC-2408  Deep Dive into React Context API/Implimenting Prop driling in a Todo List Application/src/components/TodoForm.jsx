import { useState } from "react";


const TodoForm = ({AddTodo}) => {
    const [input , setInput] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim() !== ""){
            AddTodo(input);
            setInput("");
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
             placeholder="Enter Your ToDo"
             value={input} onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add ToDo</button>
        </form>
    )
}

export default TodoForm;