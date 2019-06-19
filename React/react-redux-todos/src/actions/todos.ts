import { ITodo, Todo, TodoId } from "../todo.types";
import axios from "axios";

export enum TODO_ACTIONS {
  GET_TODOS = "GET_TODOS",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO"
}

type ActionCreator<T> = (arg: T) => { type: TODO_ACTIONS; [key: string]: any };

const handleTodos: ActionCreator<Todo[]> = todos => ({
  type: TODO_ACTIONS.GET_TODOS,
  todos
});

const handleAddTodo: ActionCreator<Todo> = (todo: Todo) => ({
  type: TODO_ACTIONS.ADD_TODO,
  todo
});

const handleRemoveTodo: ActionCreator<TodoId> = (_id: TodoId) => ({
  type: TODO_ACTIONS.REMOVE_TODO,
  _id
});


const url = "http://localhost:4242/api/todos";
export function getTodos() {
  return (dispatch: Function) => {
    axios({
      method: "GET",
      url
    })
      .then(r => r.data)
      .then(todos => dispatch(handleTodos(todos)))
      .catch(console.error);
  };
}

export function addTodo(todo: ITodo) {
  return async (dispatch: Function) => {
    try {
      const { data } = await axios({
        method: "POST",
        url,
        data: todo
      });
      dispatch(handleAddTodo(data));
    } catch (e) {
      console.error("Error in `addTodo`", e);
    }
  };
}

export function removeTodo(todoId: TodoId) {
  return async (dispatch: Function) => {
    try {
      await axios({
        method: "DELETE",
        url: `${url}/${todoId}`,
      });
      dispatch(handleRemoveTodo(todoId));
    } catch (e) {
      console.error("Error in `removeTodo`", e);
    }
  };
}
