import React from "react";
import Card from "../UI/Card.js";
import MediumHeading from "../UI/MeduimHeading";
import SmallHeading from "../UI/SmallHeading";
import Button from "../UI/Button";

import image from "../../assets/projects/project.png";
import kosmos from "../../assets/projects/kosmos-web-project.png";
import kaydeex from "../../assets/projects/kaydeex.png";
import instagram from "../../assets/projects/instagram.png";
import budget from "../../assets/projects/budget.png";
import video_search from "../../assets/projects/video_search.png";
import adopt_village from "../../assets/projects/adopt_village.png";
import kaydeex_websites from "../../assets/projects/kaydeex_websites.png";

import "./style.css";

const LatestProject = (props) => {
  const completedProjest = [
    {
      smallHeading: "Social network project",
      mediumHeading: "MERN stack project",
      link: "https://kosmos-app.herokuapp.com/",
      image: kosmos,
    },
    {
      smallHeading: "ecommerce project",
      mediumHeading: "MERN stack project",
      link: "https://kaydeex.herokuapp.com/",
      image: kaydeex,
    },
    {
      smallHeading: "instagram project",
      mediumHeading: "MERN stack project",
      link: "https://instagramclone100.herokuapp.com/",
      image: instagram,
    },

    {
      smallHeading: "budget project",
      mediumHeading: "React js project",
      link: "https://budget-tracker-abrahammzansie.vercel.app/",
      image: budget,
    },
    {
      smallHeading: "Video Search project",
      mediumHeading: "React js project",
      link: "https://videos-youtube-search-project.vercel.app/",
      image: video_search,
    },
    {
      smallHeading: "A webiste for kaydeex cosmetics and clothing",
      mediumHeading: "HTML5 and CSS3 project",
      link: "http://kaydeex.co.za/",
      image: kaydeex_websites,
    },
    {
      smallHeading: "A website for adopt villager",
      mediumHeading: "HTML5 and CSS3 project",
      link: "http://www.adopt-village.co.za/",
      image: adopt_village,
    },
  ];
  return (
    <div
      data-aos="zoom-in-up"
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <MediumHeading
        style={{ textTransform: "uppercase", marginBottom: "20px" }}
        text="Completed Projects"
      />
      <Card className="flexRow flexCol  align-center justify-sb">
        <div className="projectPortifolioContainer">
          <SmallHeading className="upperCase" text="Portfolios" />
          <MediumHeading
            style={{ textTransform: "uppercase" }}
            text="Latest Projects"
          />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            <Button label="Portfolios"></Button>
          </div>
        </div>
        <div className="projectImgContainer">
          <img src={image} />
        </div>
      </Card>
      {completedProjest.map((project) => (
        <Card className="flexRow flexCol  align-center justify-sb">
          <div className="projectPortifolioContainer">
            <SmallHeading className="upperCase" text={project.smallHeading} />
            <MediumHeading
              style={{ textTransform: "uppercase" }}
              text={project.mediumHeading}
            />
            <div
              className="mtb-10 flexRow"
              style={{ justifyContent: "center" }}
            >
              <Button
                target="_blank"
                to={project.link}
                label="View Project"
              ></Button>
            </div>
          </div>
          <div className="projectImgContainer">
            <a href={project.link} target="_blank">
              {" "}
              <img src={project.image} />
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default LatestProject;
