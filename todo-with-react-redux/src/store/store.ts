import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import darkModeReducer from "./darkModeSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
