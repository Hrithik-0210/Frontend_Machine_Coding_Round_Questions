import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="navlinks">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/service">Service</NavLink>

        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
