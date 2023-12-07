import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <footer
      className={`mt-auto py-3 text-center ${
        theme ? "bg-dark text-white" : "bg-secondary-subtle text-black"
      }`}
    >
      &copy; 2023
    </footer>
  );
};

export default Footer;
