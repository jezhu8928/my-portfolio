import * as React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFrog } from "@fortawesome/free-solid-svg-icons"

const AboutPage = () => {
  return (
    <Layout pageTitle="about me">
      <div className="bio-container">
        <div className="column-icon-container">
          <a href="https://github.com/jezhu8928/" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="regular-icon"/>
          </a>

          <a href="https://www.linkedin.com/in/jessicajlzhu/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="regular-icon"/>
          </a>

          <a href="mailto:jessica.zhu@uwaterloo.ca" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} className="regular-icon"/>
          </a>
        </div>

        <div className="bio-text">
          <h1> i'm jessica &mdash;</h1>

          <p className="bio-blurb">
          Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae;
          Etiam felis metus, feugiat et volutpat vel,
          aliquet eget mauris. Sed id orci lobortis erat
          ornare tincidunt. Praesent quis tincidunt sapien.
          Curabitur dolor lorem, posuere at interdum vel,
          vehicula id.
          <br/><br/>
          Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Etiam felis metus,
          feugiat et volutpat vel, aliquet eget mauris.
        </p>
        </div>
      </div>
      <div className="linebreak"></div>
      <div className="experiences">

      </div>
    </Layout>
  )
}

export default AboutPage;
