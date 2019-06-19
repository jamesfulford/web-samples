import { Todo } from "../todo.types";
import { TODO_ACTIONS } from "../actions/todos";

export interface ReducerState {
  todos: Todo[];
}
const initialState: ReducerState = {
  todos: []
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
        todos: [...state.todos, { ...action.todo }]
      };
    case TODO_ACTIONS.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => t._id !== action._id)
      };
    case TODO_ACTIONS.GET_TODOS:
      return {
        ...state,
        todos: [...state.todos, ...action.todos]
      };
    default:
      return state;
  }
}
