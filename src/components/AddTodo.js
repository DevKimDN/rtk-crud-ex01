import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/slices";

import "./AddTodo.css";

const getRandomArbitrary = (min = 0, max = 1000) => {
  return Math.random() * (max - min) + min;
};

const getToDoItem = (inputValue) => ({
  id: getRandomArbitrary(),
  label: inputValue
});

const AddTodo = (props) => {
  const [input, setInput] = useState(undefined);
  const dispatch = useDispatch();
  const clickFn = () =>
    input && input.length > 0 && dispatch(actions.addToDo(getToDoItem(input)));
  return (
    <div className="input-container">
      <input className="app-input" onBlur={(e) => setInput(e.target.value)} />
      <button title="Добавить" className="add-todo" onClick={clickFn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 426.66667 426.66667"
        >
          <defs />
          <path d="M405.332031 192H234.667969V21.332031C234.667969 9.558594 225.109375 0 213.332031 0 201.558594 0 192 9.558594 192 21.332031V192H21.332031C9.558594 192 0 201.558594 0 213.332031c0 11.777344 9.558594 21.335938 21.332031 21.335938H192v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938V234.667969h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
        </svg>
      </button>
    </div>
  );
};

export default AddTodo;
