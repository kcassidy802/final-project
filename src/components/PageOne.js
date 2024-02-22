// PageOne.js
import React from 'react';
import Navigation from './Navbar';
import Footer from './Footer';
import '../styles/pageOne.css'; // Import the CSS file for PageOne styles

function PageOne() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="content">
        <h1>The 1996 Stanley Cup</h1>
        {/* Your page content goes here */}
      </div>
      <Footer />
    </div>
  );
}

export default PageOne;
