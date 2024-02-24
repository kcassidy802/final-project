import React from "react";
import Footer from "./Footer";
import Navigation from "./Navbar";
import "../styles/pageThree.css";
import MyImage from "./Image";
import MyTable from "./Tables";
import MerchForm from "./MerchForm";

function PageThree() { //our third page '2022' with images, table, merchfrom, and footer at the bottom
  return (
    <div className="page-container">
      <Navigation />
      <div className="content">
        <h1>The 2022 Stanley Cup</h1>
        <h2> Top Players </h2>
        <MyImage />
        <MyTable />
        <div>
          <MerchForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default PageThree;
