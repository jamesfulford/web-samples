import React, { useState, FunctionComponent } from "react";
import TodoItem from "./TodoItem";
import { Todo, TodoId } from "../todo.types";

import { connect } from "react-redux";
import { ReducerState } from "../reducers/todos";
import { addTodo, removeTodo } from "../actions/todos";

const TodoList: FunctionComponent<{
  todos: Todo[];
  dispatchRemoveTodo: Function;
  dispatchAddTodo: Function;
}> = ({ todos, dispatchRemoveTodo, dispatchAddTodo }) => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatchAddTodo({ name: text, completed: false });
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
              onDelete={() => {
                dispatchRemoveTodo(todo.id);
              }}
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

export default connect(
  ({ todos }: ReducerState) => ({ todos }),
  dispatch => ({
    dispatchAddTodo: (todo: Todo) => dispatch(addTodo(todo)),
    dispatchRemoveTodo: (id: TodoId) => dispatch(removeTodo(id))
  })
)(TodoList);
