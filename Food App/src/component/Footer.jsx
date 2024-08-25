import React from "react";
import logo from "../images/mask-dark-face-theater-logo-symbol-icon-illustration-design-vector.jpg";
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer  flex-md-row gap-4">
      <div className="imageFooter">
        <img src={logo} alt="logo" />
      </div>
      <div className="list">
        <h2>Servises</h2>
        <ul>
          <li>Foods</li>
          <li>Drinks</li>
          <li>Reserve Seats</li>
        </ul>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}

export default Footer;
