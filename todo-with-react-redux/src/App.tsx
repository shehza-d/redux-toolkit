import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default function App() {
  return (
    <main className="bg-gray-400 min-h-screen p-8">
      <section className="max-w-md mx-auto bg-white rounded-lg p-4 shadow drop-shadow-lg">
        <h1 className="text-3xl font-bold mb-4">ToDo List</h1>
        <AddTodo />
        <Todos />
      </section>
    </main>
  );
}
