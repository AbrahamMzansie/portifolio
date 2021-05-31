import React from "react";

import { colors } from "../UI/style";

const Button = (props) => {
  return (
    <a
      href={props.to ? props.to : ""}
      target = {props.target ? props.target : ""}
      style={{
        padding: "10px 20px",
        boxSizing: "border-box",
        background: props.inverse ? "transparent" : colors.primaryColor,
        color: props.inverse ? colors.primaryColor : "#ffff",
        display: "inline-block",
        borderRadius: "20px",
        boxShadow: props.inverse ? "none" : "#6dba6d 0px 0px 10px 0px",
        border: "1px solid",
        borderColor: props.inverse ? colors.primaryColor : "transparent",
        fontSize : "12px",
        letterSpacing : "1px",
      }}
    >
      {props.label}
    </a>
  );
};
export default Button;
