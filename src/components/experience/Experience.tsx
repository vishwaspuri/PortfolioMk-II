import { Button, Grid, TableCell, TableRow } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Particle from '../Particle';
import ResumeContent from './ResumeContent';

import "./experience.css"

const Experience = () => {

    return (
        <Container className="resume-section">
            <Particle />
            <Container>
                <Grid container className="resume">
                    <Grid item className="resume-left">
                        <h3 className="resume-title">Work Experience</h3>
                        <ResumeContent
                            title="Amazon India, SDE Intern"
                            date="May 2022 - July 2022"
                            content={[
                                "Created mock services to replicate the services of external payment processors in Java",
                                "Wrote stress tests to simulate peak loads of 500+ TPS using internal",
                                "Created chaos tests that simulate service failure to test service resiliency"
                            ]}
                            url="http://www.multipie.co"
                        />
                        <ResumeContent
                            title="Multipie(Now ICICI Direct), SDE Intern"
                            date="August 2021 - November 2021"
                            content={[
                                "Created REST API for the platform using Ruby on Rail and Node.Js based on a microservices architecture",
                                "Solved user raised issues in the UI made with React.Js",
                                "Integrated Clevertap analytics with the Multipie web and mobile platforms"
                            ]}
                            url="http://www.multipie.co"
                        />
                        <ResumeContent
                            title="Variety innovation ventures Ltd, Software Developer Intern"
                            date="June 2020 - August 2020"
                            content={[
                                "Implemented backend for track and trace system for assembly lines using Node.Js along with managing cloud infrastructure",
                                "Programmed edge device(Microprocessor) to process data and control the physical end-point by implementing pre-decided constraints",
                                "Successfully built a prototype for track and trace system in 2 months in a team of 3 people"
                            ]}
                            url="https://www.varietyinnovation.com/"
                        />
                        <ResumeContent
                            title="Hertztech Solutions Private Limited, Chennai, Data Science Intern"
                            date="May 2020 - June 2020"
                            content={[
                                "Created a model for the Powertrain Mounting System(PMS) with an objective to find the maximum force transmitted from the frame to the PMS",
                                "Used Bayesian Optimization to find the optimum position of mounts in order to minimize the force transmitted from frame to PMS. After the optimization, I was able to reduce the force transmitted by 40 percent."
                            ]}
                            url="https://www.zaubacorp.com/company/HERTZTECH-SOLUTIONS-PRIVATE-LIMITED/U93090TN2018PTC125952"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Experience;

