import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink path="/">HomePage</NavLink>
        </li>
        <li>
          <img
            src="Recipe Images\cook-book-logo-3-removebg-preview.png"
            alt="cook-book"
          />
        </li>
        <li>
          <NavLink path="/recipes">Recipes</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
