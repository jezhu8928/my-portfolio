import * as React from "react";
import Layout from "../components/layout";
import Experience from "../components/entries.js";

import bballPic from "../images/bball.jpeg";

const AboutPage = () => {
  return (
    <Layout pageTitle="about me">
      <div className="bio-container">
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
            <br/><br/>
            Vestibulum
            ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Etiam felis metus.
          </p>
        </div>
        <div className="bio-image-container">
          <figure>
            <img src={bballPic} alt="me playing basketball" className="bio-image"/>
            <figcaption>placeholder caption</figcaption>
          </figure>
        </div>
      </div>
      <hr/>
      <div className="resumeish">
        <div className="experience-section">
          <h2 className="subheadings">experience</h2>
          <Experience location="shad" position="participant" date="summer 2020">
            <li>led design team in creation of</li>
          </Experience>
          <Experience location="spartahacks" position="event organizer" date="november 2018-december 2019">
            <li>hosted hackathon for ~100 participants</li>
          </Experience>
          <Experience location="varsity girls volleyball team" position="mvp right side, left side, setter" date="dec 2019-feb 2020">
            <li>played variety of positions</li>
          </Experience>

        </div>
        <div className="education-section">
          <h2 className="subheadings">education</h2>
          <Experience location="university of waterloo" position="BASc. candidate" date="november 2018-december 2019">
            <li>hosted hackathon for ~100 participants</li>
          </Experience>
          <Experience location="centennial cvi" position="high school" date="november 2018-december 2019">
            <li>graduated with a grade 12 average of 99.8%</li>
            <li>earned <b>top scholar</b> from grades 9-12 (top average award)</li>
            <li>relevant extra-curriculars: cs club, chemistry club</li>
          </Experience>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
