import React from "react";

import { Typography } from "@mui/material";

import profilePhoto from '../../assets/profilePhoto.jpeg';
import './home.css';
import '../../index.css';
import '@fontsource/roboto/300.css';

const HomePhoto = () => {
    return <>
        <img 
            src={profilePhoto}
            className="homePhoto center"
            alt="Vishwas Puri"
        /><br/>
        <Typography variant="h4" display="block" align="center" className="salutation">
            Hi there! <span className="wave">👋🏻</span>
        </Typography>
        <Typography variant="h4" display="block" align="center" className="salutation">
            I'm <b>Vishwas Puri</b>
        </Typography>
    </>;
}


export default HomePhoto;