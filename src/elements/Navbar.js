import React from "react";
import { FaRecycle } from "react-icons/fa";
import "./footer.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "reactstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg" className="footer">
        <Container className="footer">
          <img className="logo-img" src="./logo.png"></img>
          <Navbar.Brand href="home">Edushare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/find-resources">Find Resources</Nav.Link>
              <Nav.Link href="/donate-resources">Donate Resources</Nav.Link>
              {/*               <Nav.Link to="contact">Contact Us</Nav.Link>
               */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
