import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./TodoApp.css";

import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Мои дела:</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
