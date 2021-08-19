import * as React from "react";
import "./layout.css";
import logo from "../images/logo.png";
import {Link} from "gatsby";

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav>
        <div className="actual-nav-bar">
          <Link to="/"><img src={logo} alt="my very fancy logo" className="nav-image"/></Link>
          <div className="page-links">
              <Link to="/" className="nav-link-text">portfolio</Link>
              <Link to="/aboutme" className="nav-link-text">about me!</Link>
              <Link to="/" className="nav-link-text">resume</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
