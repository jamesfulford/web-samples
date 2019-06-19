import React, { FunctionComponent } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../todo.types";

import { connect } from "react-redux";
import { ReducerState } from "../reducers/todos";
import { addTodo } from "../actions/todos";

const TodoList: FunctionComponent<{
  todos: Todo[];
  dispatchRemoveTodo: Function;
}> = ({ todos, dispatchRemoveTodo }) => {
  return (
    <>
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
    dispatchAddTodo: (todo: Todo) => dispatch(addTodo(todo))
  })
)(TodoList);
