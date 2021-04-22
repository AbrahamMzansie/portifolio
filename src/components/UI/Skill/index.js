import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.css";

const Skill = (props) => {
  return (
    <div className="flexRow align-center mtb-10 skill">
      <div className="skillContainer">
        <CircularProgressbar
          
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            textColor: props.textColor,
            pathColor: props.pathColor,
          })}
        />
      </div>
      <div className="mlr-10">
        <p className="font-16 bold-500 text-color mtb-10">{props.skillName}</p>
        <p className="font-14 bold-500 gray mtb-10">{props.skillDescription}</p>
      </div>
    </div>
  );
};
export default Skill;
