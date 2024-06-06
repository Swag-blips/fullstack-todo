import React, { useState, useContext, useEffect } from "react";
import Todo from "./components/Todo";
import { ThemeContext } from "../context/ThemeProvider";

function App() {
  const { handleThemeSwitch, theme } = useContext(ThemeContext);
  return (
    <div className=" ">
      <button
        onClick={handleThemeSwitch}
        className="z-50 dark:bg-black text-white absolute top-0 left-0"
      >
        Dark mode
      </button>
      <Todo />
    </div>
  );
}

export default App;
