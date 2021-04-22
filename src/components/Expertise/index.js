import React from "react";
import Card from "../UI/Card.js";
import MediumHeading from "../UI/MeduimHeading";
import SmallHeading from "../UI/SmallHeading";
import { colors } from "../UI/style";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import image from "../../assets/images/abraham.jpeg";
import "./style.css";
import SocialConnect from "../SocialConnect/index.js";

const Expertise = (props) => {
  const skills = {
    skillName: "Development",
    skillDescription:
      "l do web based application using MERN that is Mongo DB , Express JS , React JS and Node JS",
    value: 80,
    textColor: colors.primaryColor,
    path: "#ad1d45",
  };

  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <div data-aos="fade-right" className="meLeftImgContainer">
        <img src={image} alt="profile picture" />
        <SocialConnect  style={{ position: "absolute", bottom: "-40px" }}/>
      </div>
      <div>
        <SmallHeading text="Expertise" />
        <MediumHeading text="Special Skills " />
      </div>
      <Card data-aos="flip-up" style={{
          padding: "30px",
          width: "320px",
          margin: "100px auto",
          position: "relative",
          zIndex : "1"
         
        }}>
        <div className=" flexRow">
          <div className="skillContainer">
            {skills && (
              <CircularProgressbar
                value={skills.value}
                text={`${skills.value}%`}
                styles={buildStyles({
                  textColor: skills.textColor,
                  pathColor: skills.pathColor,
                })}
              />
            )}
          </div>
          <div style={{ marginTop: "20px" }} className="mlr-10  text-align">
            <p className="font-16 bold-500 text-color mtb-10">
              {skills && skills.skillName}
            </p>
          </div>
        </div>
        <p className="font-14 bold-500 gray mtb-10">
          {skills && skills.skillDescription}
        </p>
      </Card>
    
    </div>
  );
};
export default Expertise;
