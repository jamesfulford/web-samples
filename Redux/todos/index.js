const initialState = {
  todos: [],
  id: 0
};
function todosReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { ...action.todo, id: state.id }],
        id: state.id + 1
      };
    case "DELETE_TODO":
      debugger;
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.id)
      };
    default:
      return { ...state };
  }
}
function addTodo(name) {
  return {
    type: "ADD_TODO",
    todo: { name }
  };
}
function removeTodo(id) {
  return {
    type: "DELETE_TODO",
    id
  };
}

window.store = Redux.createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const todosList = $("#todos");
const todoContent = $("#todoContent");

$(document).ready(() => {
  $("#todo").submit(e => {
    e.preventDefault();
    const text = todoContent.val();
    store.dispatch(addTodo(text));
    todoContent.val("");

    todosList.append($("<li>", { text, "data-id": store.getState().id - 1 }));
  });

  todosList.on("click", "li", event => {
    const target = $(event.target);
    store.dispatch(removeTodo(parseInt(target.attr("data-id"), 10)));
    target.remove();
  });
});
