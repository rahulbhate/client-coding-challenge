import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const activeStyle = { color: "#fa6817" };
  return (
    <nav>
      <NavLink to='/' exact activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to='/about' activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to='/currencies' activeStyle={activeStyle}>
        Currencies
      </NavLink>
    </nav>
  );
};

export default Header;
