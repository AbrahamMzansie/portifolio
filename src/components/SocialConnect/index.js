import React from "react";
import socialIcon from "../../assets/social-icons";
import "./style.css";
const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <a
        target="_blank"
        className="socialLink"
        href="https://www.facebook.com/abraham.nkomo/"
      >
        <img src={socialIcon.facebook}></img>
      </a>
      <a
        target="_blank"
        className="socialLink"
        href="https://www.instagram.com/mzansie100/"
      >
        <img src={socialIcon.instagram}></img>
      </a>
      <a
        target="_blank"
        className="socialLink"
        href="https://www.linkedin.com/in/abraham-nkomo-0977a128/"
      >
        <img src={socialIcon.linkedin}></img>
      </a>
      <a
        target="_blank"
        className="socialLink"
        href="https://www.youtube.com/user/Abraham14031987"
      >
        <img src={socialIcon.youtube}></img>
      </a>
    </div>
  );
};
export default SocialConnect;
