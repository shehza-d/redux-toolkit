import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";
import { toggleDarkMode } from "../store/darkModeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/index";

export default function ToggleThemeBtn() {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="flex items-center justify-center h-8 w-8"
    >
      {isDarkMode ? <SunIcon color="yellow" /> : <MoonIcon color="blue" />}
    </button>
  );
}
