import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import MyContext from "./MyContext";

export const Header = () => {
  const { state, dispatch } = useContext(MyContext);

  const handleModeToggle = () => {
    dispatch({ type: "TOGGLE_MODE" });
  };

  return (
    <header className="relative flex flex-col items-center justify-center min-h-[500px] bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500 px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <FontAwesomeIcon icon={faCode} className="text-8xl text-blue-600 dark:text-blue-400" />
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide">Joseph Reda Rizk</h1>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mt-2">Front-End Developer</h2>
        </div>
        <button
          onClick={handleModeToggle}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-100 border border-gray-400 dark:border-gray-600 hover:scale-105 hover:shadow-md transition-all duration-300"
        >
          <FontAwesomeIcon icon={state.isDarkMode ? faMoon : faSun} />
          <span className="text-sm font-medium">
            {state.isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>

    </header>
  );
};
