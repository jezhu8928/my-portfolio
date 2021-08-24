import * as React from "react";
import Layout from "../components/layout.js";
import {Link} from "gatsby";

export default function Component () {
  return (
    <Layout pageTitle="page not found!">
      <div className="help-container">
        <h2 className="help-message">404 &mdash; there's no page at that link! 🥸</h2>
        <p className="help-instruction">try using the navigation bar above to navigate, or <Link to="/" className="help-link">return home</Link></p>
      </div>
    </Layout>
  );
}
