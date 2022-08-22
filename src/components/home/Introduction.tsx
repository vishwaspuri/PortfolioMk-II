import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import './home.css';
import '@fontsource/roboto/400.css';

const Introduction = () => {
    return <>
        <Box
            sx={{
                border: 0,
                display: "block",
                marginLeft: "20%",
                borderRadius: "2%"
            }}
            width= "60%"
        >
            <Typography
                sx={{
                    padding: "2%",
                    textAlign: "center"
                }}
                variant="h6"
                className="introductionContent"
            >
                    I am an engineer from BITS Pilani. <br />

                    I like to work on <span className="bwahaha">serverside development, robotics & machine learning. </span> <br/>

                    I have written servers in many languages mostly based around the object oriented paradigm.<br />

                    Other than serverside development, I have also worked on IoT and machine learning projects.<br />

                    Currently my focus is to learn more about distributed systems and machine learning.  <br />
            </Typography>
        </Box>
    </>
}

export default Introduction;