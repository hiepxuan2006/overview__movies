import React, { useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import "./Footer.scss";

function Footer(props) {


  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="" className="footer__img" />
        </div>
        <div className="contact">
          <h1>Hiepxuan2006 </h1>
          <a target="_blank" href="https://www.facebook.com/imhx.206/" className="">
            <i className="fb__icon">
              <BsFacebook />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
