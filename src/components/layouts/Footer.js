import React from "react";
import logo from "../../assets/pictures/logo.svg";
import pstore from "../../assets/pictures/playstore.png";
import astore from "../../assets/pictures/applestore.svg";
import fb from "../../assets/pictures/fb.svg";
import pin from "../../assets/pictures/pinterest.png";
import ig from "../../assets/pictures/ig.png";
import "../../assets/styles/Footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer__brand">
          <div className="footer__brand__logo">
            <img src={logo} alt="logo" width="20%" height="20%"></img>
            <h4>CinemaTV</h4>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div className="footer__link">
          <li>
            <ul>
              <p>About us</p>
              <p>Blog</p>
              <p>Services</p>
              <p>Career</p>
              <p>Media Center</p>
            </ul>
          </li>
        </div>
        <div className="footer__media">
          <h5>Download</h5>
          <img
            className="footer__media__store"
            src={pstore}
            alt="Play Store"
          ></img>
          <img
            className="footer__media__store"
            src={astore}
            alt="Apple Store"
          ></img>
          <div>
            <h5>Social Media</h5>
            <img
              className="footer__media__social-media"
              src={fb}
              alt="Facebook"
              width="5%"
              height="5%"
            ></img>
            <img
              className="footer__media__social-media"
              src={pin}
              alt="Pinterest"
              width="5%"
              height="5%"
            ></img>
            <img
              className="footer__media__social-media"
              src={ig}
              alt="Instagram"
              width="5%"
              height="5%"
            ></img>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2000-202 MilanTV. All Rights Reserved</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
