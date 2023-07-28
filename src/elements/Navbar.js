import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "reactstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRecycle } from "react-icons/fa";
import "./Footer.css";
import App from "../pages/App";
import contact_us from "../pages/contact_us";
import donate_resources from "../pages/donate_resources";
import find_resources from "../pages/find_resources";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg" className="footer">
        <Container className="footer">
          <FaRecycle size={30} className="icon-green" />
          <Navbar.Brand href="#home">Team E-Cycle</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="green" to="home" href="home">
                Home
              </Nav.Link>
              <Nav.Link className="green" href="find-resources">
                Find Resources
              </Nav.Link>
              <Nav.Link className="green" href="donate-resources">
                Donate Resources
              </Nav.Link>
              <Nav.Link className="green" href="contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={<App />} />
        <Route path="/contact" component={<contact_us />} />
        <Route path="/donate-resources" component={<donate_resources />} />
        <Route path="/find-resources" component={<find-resources />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbars;
