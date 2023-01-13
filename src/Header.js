import React from "react";
import logo from "./logo192.png";
function Header() {
  return (
    <header>
      <nav>
        <img src={logo} className="nav-logo" alt="react-logo" />
        <ul className="navbar">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
