import React from 'react'
import "./Navbar.css"
// import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import {useRef} from 'react'

const Navbar = (props) => {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }
  
  return (
    <nav className="nav">
        <div className="logo-container">
            <a href="/" className="logo-container-link">
              <img src={props.logo} alt="" className="logo-img"/>
              <h2 className="logo-header">Edushare</h2>
            </a>
        </div>
        <ul className="nav-link-container" ref={navRef}>
            <li className="nav-item"><a>Home</a></li>
            <li className="nav-item"><a>Menu</a></li>
            <li className="nav-item"><a>Reservations</a></li>
            <li className="nav-item"><a>Contact</a></li>
            <button onClick={showNavbar} className="hamburger nav-close-button">
                <FaTimes />
            </button>
        </ul>
        <button 
            onClick={showNavbar} 
            className="hamburger" 
            style={{color: props.color}}
        >
            <FaBars />
        </button>
    </nav>  
   ) 
}


export default Navbar
