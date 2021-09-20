import * as React from "react";
import "./layout.css";
import {Link} from "gatsby";
import resume from "./JessicaZhuResume1A.pdf"

const NavBar = ({currentPage}) => {
  return (
      <nav className="nav-container">
        <div className="actual-nav-bar">
          <Link to="/" className="nav-image-link"><div className="logo"><p className="logo-initials">jz</p></div></Link>
          <div className="page-links">
              <Link to="/" className={`nav-link-text ${currentPage === "my portfolio" ? "underline" : ""}`}>portfolio</Link>
              <Link to="/aboutme" className={`nav-link-text ${currentPage === "about me" ? "underline" : ""}`}>about me!</Link>
              <a href={resume} className="nav-link-text">resume</a>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
