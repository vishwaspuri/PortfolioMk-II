import { Button, Grid, TableCell, TableRow } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Particle from '../Particle';
import ResumeContent from './ResumeContent';

import "./experience.css"

const Achievements = () => {

    return (
        <Container className="resume-section">
            <Particle />
            <Container>
                <Grid container className="resume">
                    <Grid item className="resume-left">
                        <h3 className="resume-title">Achievements</h3>
                        <ResumeContent
                            title="Amazon HackOn 2021"
                            date="Virtual Try-On"
                            content={[
                                "Won runner up position at Amazon HackOn 2021",
                                "Created a virtual trial room to try clothes and find correct size"
                            ]}
                            url=""
                        />
                        <ResumeContent
                            title="AB InBev Maverick 2.0 Botathon Winner"
                            date="Interactive Voice Response(IVR) Chatbot"
                            content={[
                                "Secured second runners up position AB InBev Maverick 2.0 Bot-a-thon",
                                "Created IVR chatbot capable of conversing in multiple languages",
                                "The chatbot created can be used for business usecases like scheduling appointments, checking payment status etc."
                            ]}
                            url=""
                        />
                        <ResumeContent
                            title="#EUvsVirus Global Challenge Winner"
                            date="Project CoviFight"
                            content={[
                                "Secured second position in the Real-time Communication and Prevention challenge. Organised by the European Innovation Council, with over 9000 participants and 2000 teams. The META Group awarded us with award money for our solution."
                            ]}
                            url=""
                        />
                        <ResumeContent
                            title="The Resiliency Challenge"
                            date="Project CoviFight"
                            content={[
                                "Aimed at catalyzing student innovation in response to the unprecedented situation facing colleges and communities in the wake of the coronavirus pandemic. We secured the second position in the competition."
                            ]}
                            url=""
                        />
                        <ResumeContent
                            title="AB InBev Maverick 2.0 Hackathon Finalist"
                            date="Cross-sell Up-sell Recommendation System"
                            content={[
                                "Finalist at AB InBev Maverick 2.0 Hackathon",
                                "Created Cross-sell Up-sell based recommendation system",
                                "The chatbot has proven metrics to increase the revenue"
                            ]}
                            url=""
                        /> 
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Achievements;

