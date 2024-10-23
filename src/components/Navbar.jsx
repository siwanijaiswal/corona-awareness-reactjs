import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="container">
        <div className="nav-list">
          <h2 style={{ fontSize: "35px" }}>covid.</h2>
          <div className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul id="nav-ul-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#statistics">Reports</a>
              </li>
              <li>
                <a href="#centers">Centers</a>
              </li>
              <li>
                <a href="#about-corona">About</a>
              </li>
              <li>
                <a href="#symptoms">Symptoms</a>
              </li>
              <li>
                <a href="#footer-contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="nav-logo">
            <button onClick={handleMenuToggle}>
              {" "}
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
