import React from "react";
import { Link } from "react-router-dom";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import Navigation from "./Navbar";
function Home() {
  return (
    <div>
      <Navigation />
      <h1> Home </h1>
      <Link to="/1996-Stanley-Cup">
        <Button> 1996 Stanley Cup </Button>
      </Link>
      <Link to="/2001-Stanley-Cup">
        <Button> 2001 Stanley Cup </Button>
      </Link>
      <Link to="/2021-Stanley-Cup">
        <Button> 2021 Stanley Cup </Button>
      </Link>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/61-1Br6ip+L._AC_UF894,1000_QL80_.jpg"
          />
          <Card.Body>
            <Card.Title> Colorado Avalanche</Card.Title>
            <Card.Text>Best Expansion Team to ever play</Card.Text>
            <Button variant="primary">Click Me</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
