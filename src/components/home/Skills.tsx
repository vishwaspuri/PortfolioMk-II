import React from "react";

import { Typography, Grid } from "@mui/material";
import Techstack from "./TechStack";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"
import { Box } from "@mui/system";



const Skills = () => {
  return <>
    <Typography variant="h5" display="block" align="center">
      <b>
        Some of the things that I'm good at...
      </b>
    </Typography>
    <Box
      sx={{
        border: 0,
        display: "block"
      }}
      className="skillsBox"
    >
      <Grid container>
        <Techstack iconName="devicon-cplusplus-line" />
        <Techstack iconName="devicon-python-plain-wordmark " />
        <Techstack iconName="devicon-go-plain" />
        <Techstack iconName="devicon-javascript-plain " />
        <Techstack iconName="devicon-bash-plain" />
        <Techstack iconName="devicon-nodejs-plain-wordmark " />
        <Techstack iconName="devicon-django-plain " />
        <Techstack iconName="devicon-express-original-wordmark" />
        <Techstack iconName="devicon-mongodb-plain-wordmark" />
        <Techstack iconName="devicon-postgresql-plain-wordmark" />
        <Techstack iconName="devicon-amazonwebservices-plain-wordmark" />
        <Techstack iconName="devicon-git-plain-wordmark" />
        <Techstack iconName="devicon-docker-plain-wordmark" />
        <Techstack iconName="devicon-nginx-original-wordmark" />
      </Grid>
    </Box>
  </>;
}


export default Skills;