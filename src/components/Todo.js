import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/slices";

import "./Todo.css";

const Todo = ({ id, label }) => {
  const dispatch = useDispatch();
  const clickFn = () => dispatch(actions.deleteToDo(id));
  return (
    <li className="todo-item" onClick={clickFn}>
      <span className={"todo-item__text"}>{label}</span>
    </li>
  );
};

export default Todo;
