import React from "react";

const Tile = (props)=>{
    return (
        <div   data-aos="zoom-in-up" className="mtb-10" style = {{backgroundColor : "#ffffff" ,padding : "30px" , width : "300px"}}>
          <p className="primaryColor font-14 bold-600 mtb-10 upperCase">{props.title}</p>
          <p className="textColor font-14 bold-600 mtb-10">{props.mediumTitle}</p>
          <p className="textColor font-14 bold-600 mtb-10">{props.year}</p>
          <p className="grey font-12 mtb-10">{props.description}</p>
        </div>
    )
}

export default Tile;