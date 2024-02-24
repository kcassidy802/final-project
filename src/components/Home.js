import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import Navigation from "./Navbar";
import CupPictures from "./Carousel";
import MerchForm from "./MerchForm";

function Home() { // Our homepage where we have a navbar, some cards, cup pictures and buttons to navigate between
  return (        // each page, we also have our footer at the bottom.
    <>
      <div className="text-center" style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
        <Navigation />
        <h1 style={{ color: "#0056b3" }}>The Colorado Avalanche Stanley Cup Championships</h1>
        <Link to="/1996-Stanley-Cup">
          <Button variant="primary">1996 Stanley Cup</Button>
        </Link>
        <Link to="/2001-Stanley-Cup">
          <Button variant="primary">2001 Stanley Cup</Button>
        </Link>
        <Link to="/2022-Stanley-Cup">
          <Button variant="primary">2022 Stanley Cup</Button>
        </Link>

        <div className="d-flex justify-content-center">
  <Card style={{ width: "18rem", margin: "15px" }}>
    <Card.Img
      variant="top"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0aPatgYHHi5AaRi65UGPAafqYA8Ry4dsXeA&usqp=CAU"
      style={{ width: "100%", height: "200px" }}
    />
    <Card.Body>
      <Card.Title>Colorado Avalanche</Card.Title>
      <Card.Text>Ray Bourque</Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: "18rem", margin: "10px" }}>
    <Card.Img
      variant="top"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gTmzSN9wIsIw7QO9lHZVYk71fLEheIujRg&usqp=CAU"
      style={{ width: "100%", height: "200px" }}
    />
    <Card.Body>
      <Card.Title>Colorado Avalanche</Card.Title>
      <Card.Text>Joe Sakic</Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: "18rem", margin: "10px" }}>
    <Card.Img
      variant="top"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXoWb8QgkYw8B8Ajzyi2BrURDshwMmEnosw&usqp=CAU"
      style={{ width: "100%", height: "200px" }}
    />
    <Card.Body>
      <Card.Title>Colorado Avalanche</Card.Title>
      <Card.Text>Nathan Mackinnon</Card.Text>
    </Card.Body>
  </Card>
</div>


        <div>
          <CupPictures />
        </div>

        <div className="text-center" style={{ marginTop: "20px" }}>
          <div style={{ display: 'inline-block', backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px" }}>
            <MerchForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
