import React, { FunctionComponent } from "react";
import { ITodo } from "../todo.types";

const TodoItem: FunctionComponent<ITodo & { onDelete: () => void }> = ({
  name,
  completed,
  onDelete
}) => {
  return (
    <div className="todoItem">
      <span onClick={onDelete}> X </span>
      <span className="todoName">{name}</span>
      <span>{completed ? "✔️" : "❌"}</span>
    </div>
  );
};

export default TodoItem;
