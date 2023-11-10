import { createSlice } from "@reduxjs/toolkit";

interface IState {
  darkMode: boolean;
}

const initialState = { darkMode: false };

const reducers = {
  toggleDarkMode: (state: IState) => {
    state.darkMode = !state.darkMode;
  },
};

const darkModeSlice = createSlice({ name: "darkMode", initialState, reducers });

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
