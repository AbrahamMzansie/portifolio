import React from "react";
import MediumHeading from "../UI/MeduimHeading";
import SmallHeading from "../UI/SmallHeading";
import leftImage from "../../assets/images/testimonials-01.jpg";
import centerImage from "../../assets/images/testimonial-pic.jpg";
import rightImage from "../../assets/images/testimonials-02.jpg";
import "./style.css";
import Card from "../UI/Card.js";

const Testimonials = () => {
  return (
    <div className="container">
      <div>
        <SmallHeading text="Testimonials" />
        <MediumHeading text="What People Say" />
      </div>
      <div
        className="flexRow wrap align-center justify-sb"
        style={{ padding: "50px 0" }}
      >
        <div 
        data-aos="flip-left"
        className="testimonialImgContainer">
          <img alt="" src={leftImage} alt=""></img>
        </div>
        <Card data-aos= "fade-right" className="myCard">
          <div className="flexRow align-center ">
            <div className="profileImgContainer">
              <img src={centerImage}></img>
            </div>
            <div className="mlr-10">
              <p style={{ margin: "5px 0" }} className="primaryColor font-16">
                Abraham Nkomo
              </p>
              <p className="textColor font-14 bold-600">Software Enginner</p>
            </div>
          </div>
          <p className="mtb-10 grey">
            Keep up the good work and l am looking forward to a long term
            partnership . You build a beautiful website for my company alongside
            ecommerce web based application{" "}
          </p>
        </Card>
        <div data-aos="flip-right" className="testimonialImgContainer">
          <img src={rightImage} alt=""></img>
        </div>
      </div>
      <Card  data-aos= "fade-left" className="m-auto contactCard">
        <p className="text-align font-16 bold-600">Have any project in mind . Please contact me </p>
        <p className="text-align font-25 mtb-10"><span>+27 7304 655 38</span></p>
        <p className="text-align font-25"><span>abraham.nkomo@gmail.com</span></p>
      </Card>
    </div>
  );
};
export default Testimonials;
