import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = (props) => {
  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} Navbar`}
      >
        <div className="hamBurger" onClick={props.openSidebar}>
          <i
            class="fa-solid fa-bars"
            style={
              props.mode === "light" ? { color: "black" } : { color: "white" }
            }
          ></i>
        </div>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsBits
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode} Mode
            </label>
          </div>
          <Link to="/Logout">
            <li className="logout">
              <i class="fa-solid fa-arrow-right-from-bracket logoutLogo"></i>
            </li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
