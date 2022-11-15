import React from "react";
import { MdGTranslate } from "react-icons/md";
import ThemeContext from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ActionButton() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <button className="toggle-locale">
        <MdGTranslate />
      </button>
      <button className="toggle-theme" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </>
  );
}
export default ActionButton;
