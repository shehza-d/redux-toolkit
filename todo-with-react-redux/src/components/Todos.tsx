import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice";
import { RootState } from "../types";

export default function Todos() {
  // Importing Selector causes rerender on state change
  const todos = useSelector((state: RootState) => state.todos.todos);

  // Importing and calling Dispatch DOES NOT causes rerender
  const dispatch = useDispatch();

  return (
    <ul className="space-y-2">
      {todos.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded"
        >
          <span className="flex-1">{item.text}</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
            onClick={() => dispatch(deleteTodo(item.id))}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
