import { useContext } from "react";
import "./App.css";
import { TodoContext } from "./context/TodoContext";

function App() {
  const {
    todoInput,
    setTodoInput,
    todoList,
    addTodo,
    handleIsComplete,
    handleDeleteTodo,
  } = useContext(TodoContext);

  console.log(todoList);
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo) => (
            <li className="todo" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleIsComplete(todo.id)}
              />
              <span className={todo.isCompleted ? "completed" : ""}>
                {todo.title}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
