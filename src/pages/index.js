import * as React from "react";
import Layout from "../components/layout.js";
import "../components/layout.css";
import CaseStudy from "../components/casestudy.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import matcha from "../images/matcha.png";


const HomePage = () => {
  return (
    <Layout pageTitle="my portfolio">
      <div className="hey-there-container">
        <div className="hey-there-text">
          <h1 className="hey-there big-text">jessica zhu</h1>
          <p className="hey-there-blurb">
            Aliquam interdum augue vel augue porta,
            in pellentesque nunc molestie. Cras quis magna
            ac risus auctor placerat vel vel ligula.
            Fusce ut vestibulum diam, eget tempus risus.
          </p>
          <div className="home-icons">
            <a href="https://github.com/jezhu8928/" target="_blank" rel="noreferrer" className="home-icon-link">
              <FontAwesomeIcon icon={faGithub} className="regular-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/jessicajlzhu/" target="_blank" rel="noreferrer" className="home-icon-link">
              <FontAwesomeIcon icon={faLinkedin} className="regular-icon"/>
            </a>
            <a href="mailto:jessica.zhu@uwaterloo.ca" target="_blank" rel="noreferrer" className="home-icon-link">
              <FontAwesomeIcon icon={faEnvelope} className="regular-icon"/>
            </a>
          </div>
        </div>
        <div className="box"><img src={matcha} alt="matcha"/></div>
      </div>
      <div className="portfolio-container">
        <div className="work-cases">
          <h2 className="subheadings case-heading">work</h2>
          <CaseStudy pageLink="https://www.theringer.com/" title="making reading fun again" company="just for lolz" tags="react, js"/>
          <CaseStudy pageLink="https://www.theringer.com/" title="making reading fun again" company="just for lolz" tags="react, js"/>
          <CaseStudy pageLink="https://www.theringer.com/" title="making reading fun again" company="just for lolz" tags="react, js"/>
        </div>
        <div className="side-projects">
          <h2 className="subheadings case-heading">side projects</h2>
          <CaseStudy pageLink="https://www.theringer.com/" title="making reading fun again" company="just for lolz" tags="react, js"/>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;
