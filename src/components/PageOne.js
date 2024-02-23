import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import "../styles/pageOne.css";
import MyImage from "./Image";
import MyTable from "./Tables";


function PageOne() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="content">
        <h1>The 1996 Stanley Cup</h1>
        <MyImage/>
        <MyTable/>
       
        
      </div>
      <Footer />
    </div>
  );
}

export default PageOne;
