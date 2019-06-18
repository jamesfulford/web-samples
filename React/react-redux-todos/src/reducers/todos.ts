import { Todo, TodoId } from "../todo.types";
import { TODO_ACTIONS } from "../actions/todos";

export interface ReducerState {
  todos: Todo[];
  id: TodoId;
}
const initialState: ReducerState = {
  todos: [],
  id: 0
};
interface Action {
  type: TODO_ACTIONS;
  [key: string]: any;
}
export default function todoReducer(
  state = initialState,
  action: Action
): ReducerState {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.todo, id: state.id }],
        id: state.id + 1
      };
      break;
    case TODO_ACTIONS.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.id)
      };
      break;
    default:
      return state;
  }
}
