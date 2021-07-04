import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodoList } from "../redux/selectors";

import "./TodoList.css";

const TodoList = () => {
  const allTodos = useSelector(getTodoList);
  const todos = allTodos;
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            const { id, label } = todo;
            return <Todo key={`todo-${index}`} id={id} label={label} />;
          })
        : "Дел нет. Отдыхаем!"}
    </ul>
  );
};

export default TodoList;
