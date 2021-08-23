import * as React from "react";
import "./layout.css";

const CaseStudy = ({pageLink, image, title, company, tags}) => {
  return (
    <article className="room-for-growth">
      <a href={pageLink} rel="noreferrer" target="_blank">
        <div className="case-card">
          <div className="case-card-image"></div>
          <div className="case-card-textbox">
            <h3 className="case-study-title">{title}</h3>
            <h4 className="case-study-title date">{company}</h4>
            <p className="case-study-tags">{tags}</p>
          </div>
        </div>
      </a>
    </article>
  );
};
export default CaseStudy;
