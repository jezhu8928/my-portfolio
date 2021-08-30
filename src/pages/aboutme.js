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
            matcha lover, amateur chef, nba nerd.
            <br/><br/>
            but more importantly, i'm a first year engineering student
            who was drawn to design and development in an effort to redefine
            how we connect with each other on the interwebs.

            <br/><br/>
            in my free time, you'll find me <a
              href="https://www.notion.so/jesszhu/hey-it-s-crochet-060421cf12484c72b1c335657563f990"
              target="_blank"
              rel="noreferrer"
              className="about-me-link"
            >crocheting</a>, <a
              href="https://letterboxd.com/jesszhu/"
              target="_blank"
              rel="noreferrer"
              className="about-me-link">watching movies</a> or shooting hoops at the park.
            <br/><br/>
            recent recommendations:
            <br/>
            <a
              href="https://letterboxd.com/film/emma-2020/"
              target="_blank"
              rel="noreferrer"
              className="recommendation"
            >&emsp;👀&ensp;emma.</a>
            <br/>
            <a
              href="https://open.spotify.com/album/0QnWm07An8WyO3eupjBDoP"
              target="_blank"
              rel="noreferrer"
              className="recommendation"
            >&emsp;🎧&ensp;still woozy</a>
            <br/>
            <a
              href="https://www.goodreads.com/book/show/52578297-the-midnight-library"
              target="_blank"
              rel="noreferrer"
              className="recommendation"
            >&emsp;📚&ensp;the midnight library</a>
            <br/>
          </p>
        </div>
        <div className="bio-image-container">
          <figure>
            <img src={bballPic} alt="me playing basketball" className="bio-image"/>
            <figcaption>me playing basketball in high school</figcaption>
          </figure>
        </div>
      </div>
      <hr/>
      <div className="resumeish">
        <div className="experience-section">
          <h2 className="subheadings">experience</h2>
          <Experience location="spartan sports association" position="member" date="june 2018 - june 2021">
            <li>collaborated with a <b>40 member council of leading student athletes</b> to run school athletic events, promote spirit and athletics.</li>
          </Experience>
          <Experience location="shad" position="participant" date="summer 2020">
            <li>remotely led 8-member team to design a <b>simulated circulatory system</b> intended for spaceflight</li>
          </Experience>
          <Experience location="spartahacks" position="event organizer" date="november 2018 - december 2019">
            <li>worked with small peer team to host hackathon <b>(~100 attendees)</b></li>
          </Experience>
          <Experience location="grad committee" position="admin. coordinator" date="october 2020 - june 2021">
            <li>coordinated large-scale virtual events to keep student body engaged during pandemic</li>
          </Experience>
          <Experience location="chemistry club" position="executive" date="september 2019 - june 2021">
            <li>organized experiment demonstrations, planned and participated in science olympics events</li>
          </Experience>
          <Experience location="ccvi junior/varsity girls volleyball team" position="right side/setter" date="december 2019 - february 2020">
            <li>named <b>MVP</b>, All Star in consecutive indoor seasons for <b>consistent play, versatility</b></li>
          </Experience>
          <Experience location="ccvi varsity girls basketball team" position="guard" date="september 2018 - november 2019">
            <li>named <b>All Star</b>, helping lead team to 2nd place in district in consecutive seasons</li>
          </Experience>

        </div>
        <div className="education-section">
          <h2 className="subheadings">education</h2>
          <Experience location="university of waterloo" position="BASc. candidate" date="class of 2026">
            <li>received <b>President’s Scholarship of Distinction</b></li>
            <li>courses: digital computation, introduction to design</li>
          </Experience>
          <Experience location="centennial cvi" position="ontario secondary school diploma" date="class of 2021">
            <li>earned <b>top scholar</b> from grades 9-12 (grade 12 average: <b>99.7%</b>)</li>
            <li>achieved <b>proficiency</b> in English, French, math, science and business</li>
            <li>won <b>NCWIT Award for Aspirations in Computing</b> for pursuit of STEM as a woman</li>
          </Experience>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
