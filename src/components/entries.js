import * as React from "react";
import "./layout.css";

const Experience = ({location, position, date, children}) => {
  return (
    <article className="experience">
      <span className="location experience-title">{location}</span><span className="experience-title position"> &mdash; {position}</span>
      <h3 className="date">{date}</h3>
      <ul className="experience-description">
        {children}
      </ul>
    </article>
  );
};

export default Experience;
