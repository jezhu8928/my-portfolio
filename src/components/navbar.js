import * as React from "react";
import "./layout.css";
import {Link} from "gatsby";

const NavBar = ({currentPage}) => {
  return (
    <div className="nav-container">
      <nav>
        <div className="actual-nav-bar">
          <Link to="/" className="nav-image-link"><div className="logo"><p className="logo-initials">jz</p></div></Link>
          <div className="page-links">
              <Link to="/" className={`nav-link-text ${currentPage === "my portfolio" ? "underline" : ""}`}>portfolio</Link>
              <Link to="/aboutme" className={`nav-link-text ${currentPage === "about me" ? "underline" : ""}`}>about me!</Link>
              <Link to="/" className="nav-link-text">resume</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
