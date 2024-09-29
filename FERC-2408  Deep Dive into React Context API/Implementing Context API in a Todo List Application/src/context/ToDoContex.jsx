import React, { createContext, useState } from "react";


export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    const AddTodo = (newTodo) => {
       setTodos((prev) => [...prev, newTodo])
    }

    const RemoveTodo = (id)=> {
       setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    return(
       <TodoContext.Provider value={{todos, RemoveTodo, AddTodo}}>
          {children}
       </TodoContext.Provider>
    )
}