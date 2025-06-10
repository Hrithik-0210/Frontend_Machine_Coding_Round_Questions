import { useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoContextProvider = ({ children }) => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    if (todoInput.trim == "") return;
    const newTodo = {
      id: todoList.length + 1,
      title: todoInput,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    setTodoInput("");
  }

  function handleIsComplete(id) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <TodoContext.Provider
      value={{
        todoInput,
        todoList,
        setTodoInput,
        setTodoList,
        addTodo,
        handleIsComplete,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
