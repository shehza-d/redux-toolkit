import AddTodo from "./components/AddTodo";
import Testing1 from "./components/Testing1";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";
import { RootState } from "./types";
import ToggleThemeBtn from "./components/ToggleThemeBtn";

export default function App() {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  return (
    <main
      className={`${
        isDarkMode ? "bg-slate-800" : "bg-gray-300"
      } min-h-screen p-8 transition-colors duration-500`}
    >
      <section
        className={`max-w-lg mx-auto transition-colors duration-500 ${
          isDarkMode ? "bg-gray-950" : "bg-white"
        } rounded-lg p-6 shadow drop-shadow-lg`}
      >
        <div className="mb-6 flex justify-between items-center">
          <h1
            className={`text-3xl font-bold transition-colors duration-500 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Todo List
          </h1>

          <ToggleThemeBtn />
        </div>

        <AddTodo />
        <Todos />
      </section>
      <Testing1 />
    </main>
  );
}
