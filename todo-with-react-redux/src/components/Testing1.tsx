import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../types";
import { deleteTodo } from "../store/todoSlice";

export default function Testing1() {
  console.log("Re-rending");

  //   const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  //   setInterval(() => {
  //     dispatch(deleteTodo("c7eb9900-5d1c-48b9-9d61-12d348740903"));
  //   }, 4000);

  return <div></div>;
}
