import React from "react";
import SocialConnect from "../SocialConnect";
import image from "../../assets/images/conversation.png";
import "./style.css";

const Footer = (props) => {
  return (
    <div className="container">
      <div className="flexRow flexCol justify-sb align-center"  style={{ margin: "50px 0" }}>
        <div data-aos="fade-down-right" className="flexRow justify-sb mtb-10">
          <SocialConnect />
        </div>
        <div data-aos="fade-down-left" className="footerMenu grey mtb-10">
          <nav>
            <a href="">Home</a>
            <a href="">About Me</a>
            <a href="">Portifolios</a>
            <a href="">Blog</a>
            <a href="">Contact Me</a>
          </nav>
        </div>
        <div data-aos="fade-down-right" className="conversationContainer primaryBgColor mtb-10">
          <img alt="" src={image} />
        </div>
      </div>
    </div>
  );
};
export default Footer;
