import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"> My Final Project </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://www.nhl.com/avalanche/"></Nav.Link>
              <Nav.Link href="https://www.nhl.com/avalanche/">
                Colorado Avalanche
              </Nav.Link>
              <NavDropdown title="Colorado Avalanche" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://en.wikipedia.org/wiki/1996_Stanley_Cup_Finals">
                  1996 NHL Champions
                </NavDropdown.Item>
                <NavDropdown.Item href="https://en.wikipedia.org/wiki/2001_Stanley_Cup_Finals">
                  2001 NHL Champions
                </NavDropdown.Item>
                <NavDropdown.Item href="https://en.wikipedia.org/wiki/2022_Stanley_Cup_Finals">
                  2022 NHL Champions
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.britannica.com/topic/Colorado-Avalanche">
                  Complete Team History
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
