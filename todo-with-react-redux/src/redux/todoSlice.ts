import { type PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const reducers = {
  addTodo: (state: TodoState, action: PayloadAction<string>) => {
    const todo = { id: nanoid(), text: action.payload };

    state.todos.push(todo);
  },
  deleteTodo: (state: TodoState, action: PayloadAction<string>) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers,
});

export const { addTodo, deleteTodo } = todoSlice.actions;
