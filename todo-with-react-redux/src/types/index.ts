export { type RootState } from "../store/store";

export interface Todo {
  id: string;
  text: string;
}

export interface TodoState {
  todos: Todo[];
}

// export type RootState = RootState;
