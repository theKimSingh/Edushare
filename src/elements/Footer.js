import React from "react";
import "./footer.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blank-sq"></div>
      <h4 className="footer-text">
        Follow us on: <BsFacebook className="icons" />
        <BsTwitter className="icons" /> <BsInstagram className="icons" />
      </h4>

      <div className="blank-sq"></div>
    </div>
  );
};

export default Footer;
