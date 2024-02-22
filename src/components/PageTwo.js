import React from "react";
import Footer from "./Footer";
import Navigation from "./Navbar";
import "../styles/pageTwo.css";
function PageTwo() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="content">
        <h1>The 2001 Stanley Cup</h1>
      </div>
      <Footer />
    </div>
  );
}
export default PageTwo;
