import React from "react";
import "../App.css";
import { NavLink, Link } from "react-router-dom";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
        <li>
          <img
            src="Recipe Images\cook-book-logo-3-removebg-preview.png"
            alt="cook-book"
          />
        </li>
        <li>
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

