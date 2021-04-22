import React from "react";
import MediumHeading from "../UI/MeduimHeading";
import SmallHeading from "../UI/SmallHeading";
import image from "../../assets/images/abraham.jpeg";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import "./style.css";

const Qualification = (props) => {
  const qualifications = [
    {
      title: "Udemy Online Course",
      mediumTitle: "Certificate in React JS",
      year : "2020",
      description: "Redux , React Concept , React Router , React Hooks",
    },
    {
      title: "Udemy Online Course",
      mediumTitle: "Certificate in Node JS",
      year : "2020-2021",
      description: "Express JS , Mongo DB",
    },
    {
      title: "Udemy Online Course",
      mediumTitle: "Certificate in MERN Stack",
      year : "2020",
      description: "Mongo DB , Express JS , React JS , Mongo DB",
    },
    {
      title: "Intec college",
      mediumTitle: "Certificate in Java Progtramming",
      year : "2012",
      description: "Introduction To Java Programming",
    },
    {
      title: "Intec college",
      mediumTitle: "Certificate in Computer Software Design",
      year : "2010",
      description: "Introduction To Computer Software Design",
    },
  ];
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Education" />
      <MediumHeading text="Qualification" />
      <div className="flexRow flexCol justify-sb align-center" style ={{margin : "50px 0"}}>
        <div data-aos="fade-up-right" className="meLeftContainer">
          <img src={image}></img>
          <div
         
            className="flexRow"
            style={{
              borderRadius: "10px",
              justifyContent: "start",
              backgroundColor: "#ffffff",
              display: "flex",
              boxSizing: "borderBox",
              display: "flex",
              padding: "5px 10px",
              width: "300px",
            }}
          >
            <div className="mlr-10">
              <Button label="Hire Me"></Button>
            </div>
            <div className="mlr-10">
              <Button inverse label="Download CV"></Button>
            </div>
          </div>
        </div>
        <div>
          {qualifications &&
            qualifications.map((course, index) => (
              <Tile key = {index}
                title={course.title}
                mediumTitle={course.mediumTitle}
                year = {course.year}
                description={course.description}
              ></Tile>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
