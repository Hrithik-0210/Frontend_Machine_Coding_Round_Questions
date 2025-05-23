import React from "react";
import { useState } from "react";

const TodoList1 = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo() {
    const newTodo = {
      id: todoList.length + 1,
      title: todoInput,
      completed: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    setTodoInput("");
  }

  console.log(todoList);

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todoList.map((todo) => (
          <li>
            <input type="checkbox" />
            <span>{todo.title}</span>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList1;
