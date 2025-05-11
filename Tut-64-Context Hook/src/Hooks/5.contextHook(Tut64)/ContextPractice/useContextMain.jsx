import { useContext } from "react";
import { ThemeCreate } from "./App";

export const ThemeToggler = () => {
  const { theme, themeToggle } = useContext(ThemeCreate);

  return (
    <>
      <h1>{theme}</h1>
      <button
        onClick={themeToggle}
        className={`${theme === "light" ? "bg-red-400" : "bg-blue-400"}`}
      >
        Theme Change
      </button>
    </>
  );
};
