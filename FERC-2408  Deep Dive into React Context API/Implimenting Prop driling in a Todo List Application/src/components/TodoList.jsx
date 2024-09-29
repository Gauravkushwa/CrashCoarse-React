
import TodoItem from "./TodoItem";
const TodoList = ({todos}) => {

    return (
        <>
          <h1>Todo List</h1>
          <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </>
    )
}

export default TodoList;