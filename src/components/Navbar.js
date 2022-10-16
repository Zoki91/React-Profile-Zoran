import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const toggleNavbar = () => {document.getElementById("navbar-menu").classList.toggle("show");};
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/"><img src="./images/logo.png" alt="" /></Link>
        </div>

<button className="navbar-responsive btn" onClick={()=>{toggleNavbar()}}>☰</button>

        <div className="navbar-menu">
          <ul className="navbar-menu-items" id="navbar-menu">
            <li className="navbar-menu-item">
              <Link to="/About">About Me</Link>
            </li>

            <li className="navbar-menu-item">
              <Link to="/Projects">Projects</Link>
            </li>

            <li className="navbar-menu-item">
              <Link to="/Contact">Contact</Link>
            </li>

            <li className="navbar-menu-item">
              <a href="/media/sample.pdf" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
