import * as React from "react";
import "./layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFrog } from "@fortawesome/free-solid-svg-icons"

const Footer = ()=> {
  return (
    <div className="footer-container">
      <footer>
        <div className="actual-footer">
          <h2 id="footer-question">intrigued?</h2>
          <p id="footer-prompt">feel free to reach out!</p>
          <div className="icon-container">
            <a href="https://github.com/jezhu8928/">
              <FontAwesomeIcon icon={faGithub} className="icon"/>
            </a>
            <a href="mailto:jessica.zhu@uwaterloo.ca">
              <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/jessicajlzhu/">
              <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </a>
          </div>
          <div id="copyright">
            <p>
              designed and developed with  <FontAwesomeIcon icon={faFrog} id="frog"/>  power
            </p>
            <p>&copy; jessica zhu 2021</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
