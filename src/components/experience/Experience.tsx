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
                            title="SDE Intern [Multipie]"
                            date="August 2021 - November 2021"
                            content={[
                                "Created REST API for the platform using Ruby on Rail and Node.Js based on a microservices architecture",
                                "Solved user raised issues in the UI made with React.Js",
                                "Integrated Clevertap analytics with the Multipie web and mobile platforms"
                            ]}
                            url="http://www.multipie.co"
                        />
                        <ResumeContent
                            title="Software developer intern [Variety innovation ventures Ltd]"
                            date="June 2020 - August 2020"
                            content={[
                                "Implemented backend for track and trace system for assembly lines using Node.Js along with managing cloud infrastructure",
                                "Programmed edge device(Microprocessor) to process data and control the physical end-point by implementing pre-decided constraints",
                                "Successfully built a prototype for track and trace system in 2 months in a team of 3 people"
                            ]}
                            url="https://www.varietyinnovation.com/"
                        />
                        <ResumeContent
                            title="Data Science intern [Hertztech Solutions Private Limited, Chennai]"
                            date="May 2020 - June 2020"
                            content={[
                                "Created a model for the Powertrain Mounting System(PMS) with an objective to find the maximum force transmitted from the frame to the PMS",
                                "Used Bayesian Optimization to find the optimum position of mounts in order to minimize the force transmitted from frame to PMS. After the optimization, I was able to reduce the force transmitted by 40 percent."
                            ]}
                            url="https://www.zaubacorp.com/company/HERTZTECH-SOLUTIONS-PRIVATE-LIMITED/U93090TN2018PTC125952"
                        />
                        {/* <h3 className="resume-title">Education</h3>
                        <ResumeContent
                            title="M.Sc. Physics and B.E. Mechanical [BITS, Pilani] "
                            date="2018 - Present"
                            content={["Double degree"]}
                            url=""
                        />
                        <ResumeContent
                            title="12TH BOARD [Delhi Public School, Gurgaon]"
                            date="2015 - 2017"
                            content={["Precentage: 92% (Best 4 subjects)"]}
                            url=""
                        />
                        <ResumeContent
                            title="10TH BOARD [Delhi Public School, Gurgaon] "
                            date="2014 - 2015"
                            content={["Precentage: 92%"]}
                            url=""
                        />
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
                            title="COVID-19 Hack Challenge"
                            date=""
                            content={[
                                "Aimed to develop and launch open-source code using AI and/or blockchain to combat COVID-19, reduce risks from future infectious outbreaks, and cope with the COVID-19 pandemic situation. The award is a year of Wolfram One Personal Edition and a one-year subscription to Wolfram Alpha Pro."
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
                        /> */}
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
}

export default Experience;

