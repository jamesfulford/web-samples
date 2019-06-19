import React, { FunctionComponent, useEffect } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../todo.types";

import { connect } from "react-redux";
import { ReducerState } from "../reducers/todos";
import { addTodo, getTodos, removeTodo } from "../actions/todos";

const TodoList: FunctionComponent<{
  todos: Todo[];
  removeTodo: Function;
  getTodos: Function;
}> = ({ todos, removeTodo, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, [ getTodos ]);
  return (
    <div>
      {todos.map((todo: Todo) => {
        return (
          <TodoItem
            onDelete={() => {
              removeTodo(todo._id);
            }}
            key={todo._id}
            name={todo.name}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
};

export default connect(
  ({ todos }: ReducerState) => ({ todos }),
  { addTodo, getTodos, removeTodo }
)(TodoList);
