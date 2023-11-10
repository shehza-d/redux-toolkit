import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export default function AddTodo() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodoHandler = async (e: any) => {
    e.preventDefault();

    const todo = inputRef?.current?.value;

    if (!todo) return;

    dispatch(addTodo(todo));

    e.target.reset();
  };

  return (
    <form onSubmit={addTodoHandler} className="flex mb-4">
      <input
        ref={inputRef}
        type="text"
        id="todoInput"
        className="flex-1 px-4 py-2 border rounded-l focus:outline-none focus:border-blue-500"
        placeholder="Add a new task"
        min="0"
        max="100"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
