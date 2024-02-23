import React from "react";
import Footer from "./Footer";
import Navigation from "./Navbar";
import "../styles/pageThree.css";
import MyImage from "./Image";
import MyTable from "./Tables";

function PageThree() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="content">
        <h1>The 2021 Stanley Cup</h1>
        <MyImage />
        <MyTable />
      </div>
      <Footer />
    </div>
  );
}
export default PageThree;
