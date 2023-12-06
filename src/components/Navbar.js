import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-sm ${
        theme ? "bg-dark navbar-dark" : "bg-body-secondary"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          FastFood
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
          </ul>

          <div
            className="form-check form-switch nav-item"
            style={{ marginLeft: "auto" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="theme"
              onChange={() => setTheme(!theme)}
            />
            <label className="form-check-label" htmlFor="theme">
              <span className={theme ? "text-white" : "text-black"}>
                Dark Theme
              </span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
