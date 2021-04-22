import React from "react";

import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MeduimHeading";
import Card from "../UI/Card.js";
import "./style.css"
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Skill from "../UI/Skill";
import { colors } from "../UI/style";

const Specializing = (props) => {
  const skills = [
    {
      skillName: "HTML5 / CSS3",
      skillDescription: "Hands On Experience in HTML / CSS3",
      value: 75,
      textColor: colors.primaryColor,
      path: "#f2a154",
    },

    {
      skillName: "Javascript",
      skillDescription: "Hands On Experience in Javascript",
      value: 90,
      textColor: colors.primaryColor,
      path: "#fa7d09",
    },
    {
      skillName: "React JS",
      skillDescription: "Hands On Experience in React JS",
      value: 95,
      textColor: colors.primaryColor,
      path: "#00af91",
    },
    {
      skillName: "Java",
      skillDescription: "Hands On Experience in Java",
      value: 80,
      textColor: colors.primaryColor,
      path: "#845ec2",
    },
    {
      skillName: "Bootstrap",
      skillDescription: "Hands On Experience in Bootstrap 4",
      value: 60,
      textColor: colors.primaryColor,
      path: "#e6dd3b",
    },
    {
      skillName: "Material UI",
      skillDescription: "Hands On Experience in Material UI",
      value: 60,
      textColor: colors.primaryColor,
      path: "#9b3675",
    },
    {
      skillName: "Node JS",
      skillDescription: "Hands On Experience in Node JS",
      value: 80,
      textColor: colors.primaryColor,
      path: "#ffcc29",
    },
    {
      skillName: "Mongo DB",
      skillDescription: "Hands On Experience in Mongo DB",
      value: 65,
      textColor: colors.primaryColor,
      path: "#c70039",
    },
    {
      skillName: "Oracle ADF",
      skillDescription: "Hands On Experience in Oracle ADF",
      value: 95,
      textColor: colors.primaryColor,
      path: "#111d5e",
    },
    {
      skillName: "MYSQL",
      skillDescription: "Hands On Experience in MYSQL Database",
      value: 70,
      textColor: colors.primaryColor,
      path: "#f88f01",
    },
  ];
  return (
    <div className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What i Do" />
        <MediumHeading text="Specializing in" />
        <div data-aos="fade-up" className="flexRow wrap justify-sb" style = {{padding : "30px"}}> 
        {skills &&
          skills.map((skill, index) => (
            <Skill
             className = "name"
              key={index}
              skillName={skill.skillName}
              skillDescription={skill.skillDescription}
              value={skill.value}
              textColor={skill.textColor}
              pathColor={skill.path}
              trailColor= "gold"
            />
          ))}
        </div>
        
      </Card>
    </div>
  );
};
export default Specializing;
