import React from "react";
import "./Navbar.css";
// import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <a href="/" className="logo-container-link">
          <img src={"./logo.png"} alt="" className="logo-img" />
          <h2 className="logo-header">Edushare</h2>
        </a>
      </div>
      <ul className="nav-link-container" ref={navRef}>
        <li className="nav-item">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/donate-resources"
          >
            Donate Resources
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/find-resources"
          >
            Find Resources
          </Link>
        </li>
        <button onClick={showNavbar} className="hamburger nav-close-button">
          <FaTimes />
        </button>
      </ul>
      <button
        onClick={showNavbar}
        className="hamburger"
        style={{ color: props.color }}
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;

  /* <div>
      <Navbar expand="lg" className="footer">
        <Container className="footer">
          <img className="logo-img" alt="logo" src="./logo.png"></img>
          <Navbar.Brand href="home">Edushare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/donate-resources"
                >
                  Donate Resources
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/find-resources"
                >
                  Find Resources
                </Link>
</Nav.Link>*/


  /*               <Nav.Link to="contact">Contact Us</Nav.Link>
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
 */

