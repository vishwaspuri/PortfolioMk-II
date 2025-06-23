import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"

interface props {
  iconName: string
}

const Techstack = (props: props) => {
  return (
    <div>
      <div className="tech-icons">
        <i className={`${props.iconName} tech-icon-images`} ></i>
      </div>
    </div>
  );
}

export default Techstack;