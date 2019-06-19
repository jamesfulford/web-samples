import React, { useState } from "react";
import { connect } from "react-redux";
import { ReducerState } from "../reducers/todos";
import { addTodo } from "../actions/todos";

const TodoForm = ({ addTodo }: { addTodo: Function }) => {
  const [text, setText] = useState<string>("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addTodo({ name: text, completed: false });
        setText("");
      }}
    >
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
    </form>
  );
};

export default connect(
  ({ todos }: ReducerState) => ({}),
  { addTodo }
)(TodoForm);
