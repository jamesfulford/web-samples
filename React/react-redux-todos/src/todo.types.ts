export interface ITodo {
  name: string;
  completed: boolean;
}

export type TodoId = string;

export interface Todo extends ITodo {
  _id: TodoId;
}
