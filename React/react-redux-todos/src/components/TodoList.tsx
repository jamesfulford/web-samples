import React, { useState, SFC, FunctionComponent } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../todo.types";

const TodoList: FunctionComponent<{}> = ({}) => {
  const [todos, setTodos] = useState<Todo[]>([
    { name: "Hi", completed: true, id: 1 }
  ]);

  return (
    <div>
      {todos.map((todo: Todo) => {
        return (
          <TodoItem key={todo.id} name={todo.name} completed={todo.completed} />
        );
      })}
    </div>
  );
};

export default TodoList;
