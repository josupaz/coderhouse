import React from "react";
import "./styles.css";
import logo from "../../assets/images/logo.png";
import CartWidget from "../CardWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand" href="/#">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="img-SM" width="100" height="50" />
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link" href="/#">
                <Link to="/category/hombre" style={{ textDecoration: "none" }}>
                  Hombre
                </Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="/#">
                <Link to="/category/mujer" style={{ textDecoration: "none" }}>
                  Mujer
                </Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="/#">
                <Link to="/category/joyas" style={{ textDecoration: "none" }}>
                  Joyas
                </Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="/#">
                <Link
                  to="/category/electronica"
                  style={{ textDecoration: "none" }}
                >
                  Electronica
                </Link>
              </span>
            </li>
          </ul>
          <div
            style={{
              width: "50px",
              position: "absolute",
              right: "50px",
              top: "5px",
            }}
          >
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
