import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "black" }}>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          gap: "20px",
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        <NavLink
          to={"/home"}
          style={({ isActive }) => ({
            padding: "10px 20px",
            color: "white",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) => ({
            padding: "10px 20px",
            color: "white",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          <li>About</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
