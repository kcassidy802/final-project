import React from "react";
import Footer from "./Footer";
import Navigation from "./Navbar";
import "../styles/pageTwo.css";
import MerchForm from "./MerchForm"
import MyTableThree from "./TablesThree";
import MyImageTwo from "./ImageTwo";

function PageTwo() { // 2nd page where we have our navbar, images, table, merchfrom, and footer
  return (
    <div className="page-container">
      <Navigation />
      <div className="content">
        <h1>The 2001 Stanley Cup</h1>
        <h2> Top Players </h2>
        <MyImageTwo />
        <MyTableThree />
        <MerchForm/>
      </div>
      <Footer />
    </div>
  );
}
export default PageTwo;
