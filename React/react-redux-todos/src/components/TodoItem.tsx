import React, { FunctionComponent } from "react";

const TodoItem: FunctionComponent<{
  name: string;
  completed: boolean;
}> = ({
  name,
  completed
}) => {
  return (
    <div className="todoItem">
      <span>{completed ? "✔️" : "❌"}</span>
      <span className="todoName">{name}</span>
    </div>
  );
}

export default TodoItem;
