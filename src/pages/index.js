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
      <div className="portfolio-container">
        <div className="work-cases">
          <h2 className="subheadings">work</h2>

          <article className="room-for-growth">
            <a href="https://sphenoid-waterfall-b15.notion.site/what-I-ve-been-doing-lately-602e5580568b41568d64fedc8c9dfadd" target="_blank">
              <div className="case-card" >
                <div className="case-card-image"></div>
                <div className="case-card-textbox">
                  <h3 className="case-study-title">mitigating the ripple effects of fake news</h3>
                  <h4 className="case-study-title date">company</h4>
                  <p className="case-study-tags">
                    product thinking, design
                  </p>
                </div>
              </div>
            </a>
          </article>

          <article className="room-for-growth">
            <a href="https://sphenoid-waterfall-b15.notion.site/what-I-ve-been-doing-lately-602e5580568b41568d64fedc8c9dfadd" target="_blank">
              <div className="case-card" >
                <div className="case-card-image"></div>
                <div className="case-card-textbox">
                  <h3 className="case-study-title">a stats app for casuals</h3>
                  <h4 className="case-study-title date">company</h4>
                  <p className="case-study-tags">
                    product thinking, design
                  </p>
                </div>
              </div>
            </a>
          </article>

        </div>
        <div className="side-projects">
          <h2 className="subheadings">side projects</h2>

          <article className="room-for-growth">
            <a href="https://sphenoid-waterfall-b15.notion.site/what-I-ve-been-doing-lately-602e5580568b41568d64fedc8c9dfadd" target="_blank">
              <div className="case-card" >
                <div className="case-card-image"></div>
                <div className="case-card-textbox">
                  <h3 className="case-study-title">a stats app for casuals</h3>
                  <h4 className="case-study-title date">company</h4>
                  <p className="case-study-tags">
                    product thinking, design
                  </p>
                </div>
              </div>
            </a>
          </article>

        </div>
      </div>
    </Layout>
  )
}

export default HomePage;
