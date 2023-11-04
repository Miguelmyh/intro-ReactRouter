import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to={"/chips"} className="NavBar-link">
        Chips
      </Link>
      <Link to={"/soda"} className="NavBar-link">
        Soda
      </Link>
      <Link to={"/freshSardines"} className="NavBar-link">
        FreshSardines
      </Link>
    </nav>
  );
};

export default NavBar;
