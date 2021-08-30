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
            🙃 first year systems design engineering student @ uWaterloo
            <br/>
            🧐 seeking internships for winter 2022
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
          <CaseStudy pageLink="https://sphenoid-waterfall-b15.notion.site/coming-soon-0de1e3a496da4f69bd92bcb23a2dce2e" title="coming soon..." company="n/a" tags="patience is requested"/>
        </div>
        <div className="side-projects">
          <h2 className="subheadings case-heading">side projects</h2>
          <CaseStudy pageLink="https://sphenoid-waterfall-b15.notion.site/coming-soon-0de1e3a496da4f69bd92bcb23a2dce2e" title="coming soon..." company="n/a" tags="patience is requested"/>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;
