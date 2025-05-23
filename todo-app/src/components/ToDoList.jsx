import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "../index.css";

const ToDoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const refElement = useRef("");

  function handleAddTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title: todoInput,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTodoInput("");
    refElement.current.focus();
  }

  function handleIsComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (id == todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  console.log(todos);
  return (
    <>
      <div>
        <h1>ToDo</h1>
        <input
          ref={refElement}
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {todos.map((todo) => {
          return (
            <li key={todo.id} style={{ display: "flex", gap: "10px" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleIsComplete(todo.id)}
              />
              <span className={todo.completed ? "completed" : ""}>
                {todo.title}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDoList;
