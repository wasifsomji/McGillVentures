import React from 'react';
import styles from "./AnalystProgram.module.scss";
import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/program/landing_program.png";
import aqcCapital from "../../assets/partners/aqc_capital.png";
import blueVisionCapital from "../../assets/partners/blue_vision_capital.png";
import cycleCapital from "../../assets/partners/cycle_capital.png";
import dobsonCentre from "../../assets/partners/dobson_centre.png";
import frontRowVentures from "../../assets/partners/front_row_ventures.png";
import inovia from "../../assets/partners/inovia.png";
import panacheVentures from "../../assets/partners/panache_ventures.png";
import penderVentures from "../../assets/partners/pender_ventures.png";
import triptyqCapital from "../../assets/partners/triptyq_capital.png";
import Footer from '../../components/Footer/Footer';
import programDetails from "../../assets/program/programdescription.jpg";

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
                            <div className={styles.introSubtitle}>Our inaugural Analyst Program selects driven
                                student-analysts to be mentored through exclusive venture capital workshops and case studies,
                                in collaboration with Blue Vision Capital, Triptyq Capital, and Panache Ventures.
                            </div>
                        </div>
                    </ScrollAnimation>
                    {/*<ScrollAnimation animateIn="slideInRight" animateOnce="true">*/}
                    {/*    <img src={introImage} className={styles.introImage} alt="intro"/>*/}
                    {/*</ScrollAnimation>*/}
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
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDBP87RwOkYrTAvz2JGXJKP7x2Cn786JaXuvUOAkdmJbG3xQ/viewform" target="_blank" rel="noopener noreferrer">
                            <Card sx={{ width: { xs: 275, md: 300 } }}>
                                <CardMedia
                                    sx={{ height: { xs: 275, md: 300 } }}
                                    image={programDetails}
                                    title="face card"
                                />
                            </Card>
                        </a>
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
            <Footer />
        </div>

    )
}

export default AnalystProgram;