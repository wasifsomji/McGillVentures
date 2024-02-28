import React from 'react';
import styles from "./AnalystProgram.module.scss";
import {Card, CardContent, Stack, Typography} from "@mui/material";
import introImage from "../../assets/mcgill.jpeg";
import ScrollAnimation from "react-animate-on-scroll";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/mcgill.jpeg";
import aqcCapital from "../../assets/partners/aqc_capital.png";
import blueVisionCapital from "../../assets/partners/blue_vision_capital.png";
import cycleCapital from "../../assets/partners/cycle_capital.png";
import dobsonCentre from "../../assets/partners/dobson_centre.png";
import frontRowVentures from "../../assets/partners/front_row_ventures.png";
import inovia from "../../assets/partners/inovia.png";
import panacheVentures from "../../assets/partners/panache_ventures.png";
import penderVentures from "../../assets/partners/pender_ventures.png";
import triptyqCapital from "../../assets/partners/triptyq_capital.png";

const AnalystProgram= () => {
    return (
        <div>
            <NavBar />
            <Landing title={"Invest, Analyze,\nSucceed, Excel"}
                     subtitle={"Our program is your launchpad into the exciting world of Venture Capital. Join us and become a part of the future of venture capital!"}
                     image={landingImage} />

            <Stack direction="column" padding="0 10% 10% 10%">

                {/* Introduction */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                    marginTop="125px"
                >
                    <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                        <div>
                            <div className={styles.introTitle}>Introducing our Analyst Program</div>
                            <div className={styles.introSubtitle}>The goal of the program is to create analysts who are equipped with the skills needed to
                                immediately break into Venture Capital as analysts following graduation.
                                The program is created in consultation with multiple prominent Montreal Venture Capital Firms.
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                        <img src={introImage} className={styles.introImage} alt="intro"/>
                    </ScrollAnimation>
                </Stack>

                {/* What to Expect */}
                <Stack className={styles.whatToExpect}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignItems={{ xs: 'center', sm: 'flex-start' }}
                        justifyContent={{ xs: 'center', sm: 'flex-start' }}
                    >
                        <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                            <div className={styles.introTitle}>What to Expect</div>
                        </ScrollAnimation>
                        <div className={styles.expectBoxContainer}>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Workshops at Espace CDPQ</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>In-house workshops on the basics of Venture Capital</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Mock-startup building simulator</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Cases created by Venture Capital partners</div>
                            </ScrollAnimation>
                        </div>
                    </Stack>
                </Stack>

                {/* Positions */}
                <Stack
                    direction="column"
                    display="flex"
                    alignItems="center"
                    paddingTop="125px"
                >
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <div className={styles.introTitle}>Positions</div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Stack
                            direction={{ sm: 'column', md: 'row' }}
                            justifyContent={{ md: 'center'}}
                            alignItems={{ sm: 'center'}}
                            gap="5%"
                        >
                            <Card
                                sx={{
                                    width: { sm: "100%", md: "40%"},
                                    height: { md: "425px", lg: "340px" },
                                    border: "5px solid #370894",
                                    boxShadow: "15px 15px 0px 0px #370894",
                                    borderRadius: "0px",
                                    paddingTop: "15px",
                                    marginBottom: "50px"
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" gutterBottom={true} sx={{textAlign: "center", fontFamily: "Helvetica Neue, sans-serif", fontWeight: "700"}}>Associates</Typography>
                                    <ul className={styles.listPosition}>
                                        <li>Lead a small team of analysts throughout the program.</li>
                                        <li>Be responsible for company ideation for the startup simulator.</li>
                                        <li>Be responsible for ensuring deliverables are submitted in a timely manner.</li>
                                        <li>Manage team schedules & coordinate workload & analyst bandwidth with the McGill Ventures Executive Team.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card
                                sx={{
                                    width: { sm: "100%", md: "40%"},
                                    height: { md: "425px", lg: "340px" },
                                    border: "5px solid #370894",
                                    boxShadow: "15px 15px 0px 0px #370894",
                                    borderRadius: "0px",
                                    paddingTop: "15px",
                                    marginBottom: "50px"
                                }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom={true} sx={{textAlign: "center", fontFamily: "Helvetica Neue, sans-serif", fontWeight: "700"}}>Analysts</Typography>
                                    <ul className={styles.listPosition}>
                                        <li>Work under Associates to complete deliverables and participate in projects.</li>
                                        <li>Participate in cases hosted by industry partners.</li>
                                        <li>Attend Demo Days hosted by partner companies.</li>
                                        <li>Work under Associates to complete the startup simulator project.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Stack>
                    </ScrollAnimation>
                </Stack>
                {/* <Stack
                    direction="column"
                    display="flex"
                    alignItems="center"
                    paddingTop="125px"
                >
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <div className={styles.introTitle}>Our Partners</div>
                    </ScrollAnimation>
                    <Stack display="flex" direction="row" flexWrap= "wrap" justifyContent="center">
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <img src={triptyqCapital} className={styles.partnerImage} alt="logo"/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <img src={panacheVentures} className={styles.partnerImage} alt="logo"/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <img src={inovia} className={styles.partnerImage} alt="logo"/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <img src={penderVentures} className={styles.partnerImage} alt="logo"/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <img src={frontRowVentures} className={styles.partnerImage} alt="logo"/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <img src={dobsonCentre} className={styles.partnerImage} alt="logo"/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <img src={blueVisionCapital} className={styles.partnerImage} alt="logo"/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <img src={aqcCapital} className={styles.partnerImage} alt="logo"/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <img src={cycleCapital} className={styles.partnerImage} alt="logo"/>
                        </ScrollAnimation>
                    </Stack>
                </Stack> */}
            </Stack>
        </div>

    )
}

export default AnalystProgram;