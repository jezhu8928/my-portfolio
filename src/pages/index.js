import * as React from "react";
import Layout from "../components/layout.js";
import "../components/layout.css";
import CaseStudy from "../components/casestudy.js";

const HomePage = () => {
  return (
    <Layout pageTitle="my portfolio">
      <div className="hey-there-container">
        <div className="hey-there-text">
          <h1 className="hey-there">hello there!</h1>
          <p className="hey-there-blurb">
            Aliquam interdum augue vel augue porta,
            in pellentesque nunc molestie. Cras quis magna
            ac risus auctor placerat vel vel ligula.
            Fusce ut vestibulum diam, eget tempus risus.
          </p>
          <div className="home-link-container">
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank"><span className="home-link">link 1</span></a>
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank"><span className="home-link">link 1</span></a>
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank"><span className="home-link">link 1</span></a>
          </div>
        </div>
        <div className="box"><div className="inner-box"></div></div>
      </div>
      <div className="portfolio-container">
        <div className="work-cases">
          <h2 className="subheadings">work</h2>

          <CaseStudy pageLink="https://www.theringer.com/" title="making reading fun again" company="just for lolz" tags="react, js"/>
          <CaseStudy pageLink="https://www.theringer.com/" title="making reading fun again" company="just for lolz" tags="react, js"/>
          <CaseStudy pageLink="https://www.theringer.com/" title="making reading fun again" company="just for lolz" tags="react, js"/>


        </div>
        <div className="side-projects">
          <h2 className="subheadings">side projects</h2>
          <CaseStudy pageLink="https://www.theringer.com/" title="making reading fun again" company="just for lolz" tags="react, js"/>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage;
