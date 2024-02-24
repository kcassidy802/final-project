import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import "../styles/pageOne.css";
import MerchForm from "./MerchForm"
import MyTableTwo from "./TablesTwo";
import MyImageOne from "./ImageOne";


function PageOne() { //first page '1996', we have our images, table,, and merch form and footer at the bottom
  return (
    <div className="page-container">
      <Navigation />
      <div className="content">
        <h1>The 1996 Stanley Cup</h1>
        <h2> Top Players </h2>
        <MyImageOne/>
        <MyTableTwo/>
        <MerchForm/>
       
        
      </div>
      <Footer />
    </div>
  );
}

export default PageOne;
