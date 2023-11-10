import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../types";

const initialState: TodoState = { todos: [{ id: "1", text: "Learn Redux" }] };

const reducers = {
  addTodo: (state: TodoState, action: PayloadAction<string>) => {
    const todo = { id: crypto.randomUUID(), text: action.payload };

    state.todos.push(todo);
  },
  updateTodo: (state: TodoState, action: PayloadAction<string>) => {},
  deleteTodo: (state: TodoState, action: PayloadAction<string>) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  },
};

const todoSlice = createSlice({ name: "todo", initialState, reducers });

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
