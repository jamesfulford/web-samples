export interface ITodo {
  name: string;
  completed: boolean;
}

export type TodoId = number;

export interface Todo extends ITodo {
  _id: TodoId;
}
