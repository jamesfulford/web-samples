import React, { useState, SFC, FunctionComponent } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../todo.types";

import { connect } from "react-redux";
import { ReducerState } from "../reducers/todos";

const TodoList: FunctionComponent<{ todos: Todo[] }> = ({ todos }) => {
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

export default connect(({ todos }: ReducerState) => ({ todos }))(TodoList);
