import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";
import { toggleDarkMode } from "../store/darkModeSlice";
import { useDispatch } from "react-redux";

export default function ToggleThemeBtn() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="flex items-center justify-center h-8 w-8"
    >
      {true ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
