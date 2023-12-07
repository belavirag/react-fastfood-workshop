import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Content = ({ children, className }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 rounded-1 ${className} ${
        theme ? "bg-dark text-white" : "bg-body-secondary text-black"
      }`}
    >
      {children}
    </div>
  );
};

export default Content;
