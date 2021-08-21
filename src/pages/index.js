import * as React from "react";
import Layout from "../components/layout.js";
import "../components/layout.css";

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
    </Layout>
  )
}

export default HomePage;
