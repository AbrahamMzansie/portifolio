import React from "react";
import Card from "../UI/Card.js";
import MediumHeading from "../UI/MeduimHeading";
import SmallHeading from "../UI/SmallHeading";
import Button from "../UI/Button";

import image from "../../assets/projects/project.png";
import "./style.css";

const LatestProject = (props) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <Card className="flexRow flexCol  align-center justify-sb">
        <div className="projectPortifolioContainer"
          
        >
          <SmallHeading className="upperCase" text="Portfolios" />
          <MediumHeading style = {{textTransform : "uppercase"}} text="Latest Projects" />
          <div className="mtb-10 flexRow" style = {{justifyContent : "center"}}> 
            <Button label="Portfolios"></Button>
          </div>
        </div>
        <div className="projectImgContainer">
          <img src={image} />
        </div>
      </Card>
    </div>
  );
};
export default LatestProject;
