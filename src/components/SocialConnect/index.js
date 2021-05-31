import React from "react";
import socialIcon from "../../assets/social-icons";
import "./style.css";
const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <a className="socialLink" href="#">
        <img src={socialIcon.facebook}></img>
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcon.instagram}></img>
      </a>
      <a
        className="socialLink"
        href="https://www.linkedin.com/in/abraham-nkomo-0977a128/"
      >
        <img src={socialIcon.linkedin}></img>
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcon.youtube}></img>
      </a>
    </div>
  );
};
export default SocialConnect;
