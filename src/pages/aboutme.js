import * as React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";

import bballPic from "../images/bball.jpeg";

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
            feugiat et volutpat vel, aliquet eget mauris. Vestibulum
            ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Etiam felis metus.
            <br/><br/>
            Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere.
          </p>
        </div>
        <div className="bio-image-container">
          <figure>
            <img src={bballPic} alt="a sick picture of me playing basketball" className="bio-image"/>
            <figcaption>placeholder caption</figcaption>
          </figure>
        </div>
      </div>
      <hr/>
      <div className="resumeish">
        <div className="experience-section">
        <h2 className="subheadings">experience</h2>
          <article className="experience">
            <span className="location experience-title">spartahacks IV</span><span className="experience-title position"> &mdash; event organizer</span>
            <h3 className="date">november 2018 - december 2019</h3>
            <ul className="experience-description">
              <li>Curabitur dolor lorem, posuere at interdum vel, vehicula id neque.</li>
              <li>Etiam felis metus, feugiat et volutpat vel, aliquet eget mauris. feugiat et volutpat vel, aliquet eget mauris.</li>
              <li>Sed id orci lobortis erat ornare tincidunt.</li>
            </ul>
          </article>

          <article className="experience">
            <span className="location experience-title">spartahacks IV</span><span className="experience-title position"> &mdash; event organizer</span>
            <h3 className="date">november 2018 - december 2019</h3>
            <ul className="experience-description">
              <li>Curabitur dolor lorem, posuere at interdum vel, vehicula id neque.</li>
              <li>Etiam felis metus, feugiat et volutpat vel, aliquet eget mauris. feugiat et volutpat vel, aliquet eget mauris.</li>
              <li>Sed id orci lobortis erat ornare tincidunt.</li>
            </ul>
          </article>

          <article className="experience">
            <span className="location experience-title">spartahacks IV</span><span className="experience-title position"> &mdash; event organizer</span>
            <h3 className="date">november 2018 - december 2019</h3>
            <ul className="experience-description">
              <li>Curabitur dolor lorem, posuere at interdum vel, vehicula id neque.</li>
              <li>Etiam felis metus, feugiat et volutpat vel, aliquet eget mauris. feugiat et volutpat vel, aliquet eget mauris.</li>
              <li>Sed id orci lobortis erat ornare tincidunt.</li>
            </ul>
          </article>
        </div>

        <div className="education-section">
          <h2 className="subheadings">education</h2>
          <article className="experience">
            <span className="location experience-title">spartahacks IV</span><span className="experience-title position"> &mdash; event organizer</span>
            <h3 className="date">november 2018 - december 2019</h3>
            <ul className="experience-description">
              <li>Curabitur dolor lorem, posuere at interdum vel, vehicula id neque.</li>
              <li>Etiam felis metus, feugiat et volutpat vel, aliquet eget mauris. feugiat et volutpat vel, aliquet eget mauris.</li>
              <li>Sed id orci lobortis erat ornare tincidunt.</li>
            </ul>
          </article>

          <article className="experience">
            <span className="location experience-title">spartahacks IV</span><span className="experience-title position"> &mdash; event organizer</span>
            <h3 className="date">november 2018 - december 2019</h3>
            <ul className="experience-description">
              <li>Curabitur dolor lorem, posuere at interdum vel, vehicula id neque.</li>
              <li>Etiam felis metus, feugiat et volutpat vel, aliquet eget mauris. feugiat et volutpat vel, aliquet eget mauris.</li>
              <li>Sed id orci lobortis erat ornare tincidunt.</li>
            </ul>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
