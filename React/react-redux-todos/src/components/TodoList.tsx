import React, { useState, SFC, FunctionComponent } from "react";
import TodoItem from "./TodoItem";

const TodoList: FunctionComponent<{}> = ({}) => {
  const [todos, setTodos] = useState([
      {name: 'Hi', completed: true},
  ]);

  return (
    <div>
      {todos.map(
        (todo: { name: string; completed: boolean }, index: number) => {
          return (
            <TodoItem key={index} name={todo.name} completed={todo.completed} />
          );
        }
      )}
    </div>
  );
};

export default TodoList;
