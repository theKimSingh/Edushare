import React from "react";
import "./Footer.css";
// import Map from "./map.png"
import { Link } from "react-router-dom";
import facebookLogo from "./facebook_logo.png";
import instagramLogo from "./instagram_logo.png";
import tiktokLogo from "./tiktok_logo.png";
import twitterLogo from "./twitter_logo.png";
import youtubeLogo from "./youtube_logo.png";
import yelpLogo from "./yelp_logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="intro-section footer-left">
          <a href="/" className="logo-container-link">
            <img src={require("./logo.png")} alt="" className="logo-img" />
            <h2 className="logo-header footer-logo-header">EduShare</h2>
          </a>
          <p>
            We are Edushare, the world's leading education platform, built by
            high-schoolers, for children around the globe. Born from a humble
            position of a Quadrant Resource internship, our team put mind and
            soul together to figure out a way to give back to the community for
            all it has given us. Our solution? A platform to help children
            around the globe share educational resources. Join our platform now
            to contribute to our mission and help those less fortunate than you.
          </p>
        </div>
        <div className="footer-right">
          <div class="site-links-section">
            <h2 class="footer-header">Site Links</h2>
            <ul class="site-links">
              <li class="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/donate-resources">Donate Resources</Link>
              </li>
              <li class="nav-item">
                <Link to="/find-resources">Find Resources</Link>
              </li>
              {/* <li class="nav-item"><Link to="/contact"><a>Contact</a></Link></li> */}
            </ul>
          </div>
          <div class="contact-info">
            <h2 class="footer-header">Contact</h2>
            <div class="contact-method " id="contact-method-first">
              <h3 class="contact-method-heading">Email</h3>
              <p class="contact-method-description">
                <a href="mailto:">edusharecontact@gmail.com</a>
              </p>
            </div>
            <div class="contact-method">
              <h3 class="contact-method-heading">Phone Number</h3>
              <p class="contact-method-description">
                <a href="tel:425-553-8188">425-553-8188</a>
              </p>
            </div>
            <div class="contact-method">
              <h3 class="contact-method-heading">Social Media</h3>
              <div class="social-media-container">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
                  <img src={facebookLogo} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                  <img src={instagramLogo} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com">
                  <img src={tiktokLogo} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                  <img src={twitterLogo} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
                  <img src={youtubeLogo} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://yelp.com">
                  <img src={yelpLogo} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="credits">
        <p className="copyright">&copy; Edushare 2023</p>
      </div>
    </>
  );
};

export default Footer;
