import React, { FunctionComponent } from "react";
import { ITodo } from "../todo.types";

const TodoItem: FunctionComponent<ITodo> = ({ name, completed }) => {
  return (
    <div className="todoItem">
      <span>{completed ? "✔️" : "❌"}</span>
      <span className="todoName">{name}</span>
    </div>
  );
};

export default TodoItem;
