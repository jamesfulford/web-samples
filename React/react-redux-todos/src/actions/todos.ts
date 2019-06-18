import { ITodo, TodoId } from "../todo.types";

export enum TODO_ACTIONS {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO"
}

type ActionCreator<T> = (arg: T) => { type: TODO_ACTIONS; [key: string]: any };

export const addTodo: ActionCreator<ITodo> = (todo: ITodo) => ({
  type: TODO_ACTIONS.ADD_TODO,
  todo
});

export const removeTodo: ActionCreator<TodoId> = (id: TodoId) => ({
  type: TODO_ACTIONS.REMOVE_TODO,
  id
});
