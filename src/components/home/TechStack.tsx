import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"

import { Grid } from "@mui/material";


interface props {
  iconName: string
}

const Techstack = (props: props) => {
  return (
    <div>
      <Grid item className="tech-icons">
        <i className={`${props.iconName} tech-icon-images`} ></i>
      </Grid>
    </div>
  );
}

export default Techstack;