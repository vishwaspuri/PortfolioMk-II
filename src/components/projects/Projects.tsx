import { Grid, Typography } from '@mui/material';
import React from 'react';
import ProjectCard from './ProjectCard';

import covid from "../../assets/projects/covid19-1600x900.png";
import powertrain from "../../assets/projects/powertrain.jpeg";
import dim from "../../assets/projects/dim.jpg";
import socors from "../../assets/projects/socors.jpeg";
import chatbot from "../../assets/projects/chatbot.png";
import virTryOn from "../../assets/projects/1.png"
import { Box } from '@mui/system';

const Projects = () => {
    return <>
        <Typography variant="h5" display="block" align="center">
            <b>
                My Projects
            </b>
        </Typography>
        <Box
            className='projects'
            sx={{
                border: 0,
                display: "block",
                marginLeft: "13%",
                borderRadius: "2%"
            }}
            width="80%"
        >
            <Grid container>
                <ProjectCard
                    link='https://github.com/vishwaspuri/VirtualTryOn'
                    title='Virtual Trial Room'
                    image={virTryOn}
                    summary='Built a augmented reality based virtual trial room to try on clothes and find the size that fits best. The application is built using Unity and Vuforia engine. A golang server was also created for storage and editing video streams.'
                />
                <ProjectCard
                    link='https://github.com/vishwaspuri/Interactive-Voice-Response'
                    title='Interactive Voice Response Multi-lingual ChatBot'
                    image={chatbot}
                    summary='Created a voice enabled chatbot capable of speech-to-speech conversation in 4 languages for creating everday functions like getting appointments, checking payment statuses etc.'
                />
                <ProjectCard
                    link='https://devpost.com/software/covifight'
                    title='Covifight'
                    image={covid}
                    summary="Covifight is a 3-tier contract tracing solution used for tracing Covid-19 virus. The solution leverages neo4j graph database, modern machine learning techniques and social network analysis to provide it's user with alerts related to covid-19."
                />
                <ProjectCard
                    link='https://github.com/vishwaspuri/nvh-datascience-python-implementation'
                    title='Powertrain mounting using data science techniques'
                    image={powertrain}
                    summary='The powerplant or engine of a car is arguably the single most vital piece of equipment in an automobile. Its positioning and drive-train connection are obviously subjects of a great deal of research and analysis. The project uses gaussian optimization to find optimum position of powertrain in order to minimize noise and vibrations.'
                />
                <ProjectCard
                    link='https://github.com/vishwaspuri/socors'
                    title='Socors'
                    image={socors}
                    summary='I developed a web application for consumers to purchase goods from local shops based on their location and a web application for sellers to register on the socors platform and control how their shops are shown to the consumers.'
                />
            </Grid>
        </Box>
    </>;
}

export default Projects;