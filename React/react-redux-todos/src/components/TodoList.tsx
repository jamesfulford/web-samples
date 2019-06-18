import React, { useState, SFC, FunctionComponent } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../todo.types";

import { connect } from "react-redux";
import { ReducerState } from "../reducers/todos";
import { addTodo } from "../actions/todos";

const TodoList: FunctionComponent<{ todos: Todo[]; dispatch: Function }> = ({
  todos,
  dispatch
}) => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(addTodo({ name: text, completed: false }));
          setText("");
        }}
      >
        <input
          type="text"
          onChange={e => setText(e.target.value)}
          value={text}
        />
      </form>
      <div>
        {todos.map((todo: Todo) => {
          return (
            <TodoItem
              key={todo.id}
              name={todo.name}
              completed={todo.completed}
            />
          );
        })}
      </div>
    </>
  );
};

export default connect(({ todos }: ReducerState) => ({ todos }))(TodoList);
