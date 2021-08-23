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
          <div className="row-icon-container">
            <a href="https://github.com/jezhu8928/" target="_blank" rel="noreferrer" className="footer-icon-link">
              <FontAwesomeIcon icon={faGithub} className="footer-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/jessicajlzhu/" target="_blank" rel="noreferrer" className="footer-icon-link">
              <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
            </a>
            <a href="mailto:jessica.zhu@uwaterloo.ca" target="_blank" rel="noreferrer" className="footer-icon-link">
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/>
            </a>
          </div>
          <div className="copyright-container">
            <p className="copyright">
              designed and developed with  <FontAwesomeIcon icon={faFrog}/>  power
            </p>
            <p className="copyright">&copy; jessica zhu 2021</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
