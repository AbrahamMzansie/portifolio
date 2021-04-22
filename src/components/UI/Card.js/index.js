import React from "react";

import "./style.css";

const Card = ({className = null, children , style , ...rest}) => {
    const _class = className ? `card ${className}` : "card" ;
  return <div className={_class} style = {style} {...rest}>{children}</div>;
};

export default Card;
