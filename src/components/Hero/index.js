import React from "react";
import image from "../../assets/images/abraham.jpeg";
import Specializing from "../Specializing";
import Button from "../UI/Button";
import "./style.css";

const Hero = (props) => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center  mtb-10">
        <div data-aos="fade-right">
          <p className="upperCase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello , </span> i am Abraham Nkomo
          </p>
          <h1 className="textColor ls-1 mtb-10">Software Engineer</h1>
          <p className="font-12 grayColor mtb-10">
            Full Stack Developer in Javascript
          </p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button label="Hire Me"></Button>
            </div>
            <div className="mlr-10">
              <Button inverse label="Download CV"></Button>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
            <img alt="profile picture" src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
