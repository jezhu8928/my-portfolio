import * as React from "react";
import NavBar from "./navbar.js";
import Footer from "./footer.js";

const Layout = ({pageTitle, children}) => {
  return (
    <div>
      <title>{pageTitle} | jessica zhu</title>
      <NavBar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
