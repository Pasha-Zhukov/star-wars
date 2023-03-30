import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo Star Wars" />
      </Link>
      <nav className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/Characters"
        >
          Characters
        </NavLink>
      </nav>
    </div>
  );
};
