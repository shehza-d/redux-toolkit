import AddTodo from "./components/AddTodo";
import Testing1 from "./components/Testing1";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";
import { RootState } from "./types";
import ToggleThemeBtn from "./components/ToggleThemeBtn";

export default function App() {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  console.log("🚀 ~ file: App.tsx:14 ~ App ~ isDarkMode:", isDarkMode);

  return (
    <main
      className={`${
        isDarkMode ? "bg-slate-800" : "bg-gray-300"
      } min-h-screen p-8`}
    >
      <section className="max-w-lg mx-auto bg-white rounded-lg p-6 shadow drop-shadow-lg">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl text-gray-700 font-bold">Todo List</h1>

          <ToggleThemeBtn />
        </div>

        <AddTodo />
        <Todos />
      </section>
      <Testing1 />
    </main>
  );
}
