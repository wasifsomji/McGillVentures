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

const AnalystProgram = () => {
    return (
        <>
            {/* Introduction */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems="center"
                justifyContent="space-between"
                marginTop="125px"
            >
                <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                    <div>
                        <div className={styles.introTitle}>Analyst Program</div>
                        <div className={styles.introSubtitle}>Our inaugural Analyst Program selects driven
                            student-analysts to be mentored through exclusive venture capital workshops and case studies,
                            in collaboration with Blue Vision Capital, Triptyq Capital, and Panache Ventures.
                        </div>
                    </div>
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
        </>
    );
}

const HealthTechInnovation = () => {
    return (
        <>
            {/* HealthTech Innovation Lab Introduction */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                    marginTop="125px"
                >
                    <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                        <div>
                            <div className={styles.introTitle}>HealthTech Innovation Lab (HTIL)</div>
                            <div className={styles.introSubtitle}>The HealthTech Innovation Lab (HTIL): a 7-week initiative by the McGill Entrepreneurship and Innovation Initiative and McGill Ventures, fosters interdisciplinary collaboration among McGill students in business and science. The partner for projects is Mayo Clinic, a globally renowned medical center that is consistently ranked among the best hospitals in the world.
                                <br/>
                                <br/>
                                <a className={styles.introSubtitle} href='https://docs.google.com/document/d/180nRHFLRa7zdQ2o02MaBdv36_sSlebtp0H4I-c1NWe8/edit?tab=t.0'>Apply here</a>
                            </div>
                        </div>
                    </ScrollAnimation>
                </Stack>

                {/* HealthTech Innovation Lab What to Expect */}
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
                                <div className={styles.expectBox}>Real-world, physician-led case studies provided by Mayo Clinic</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Interdisciplinary collaboration between business and science students</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Workshops led by industry professionals and entrepreneurs</div>
                            </ScrollAnimation>
                        </div>
                    </Stack>
                </Stack>
        </>  
    );
}

const McGillVenturesNewsletter = () => {
    return (
        <>
            {/* McGill Ventures Newsletter Introduction */}
            <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                    marginTop="125px"
                >
                    <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                        <div>
                            <div className={styles.introTitle}>McGill Ventures Newsletter</div>
                            <div className={styles.introSubtitle}>The McGill Ventures Newsletter is a continuous, year-long newsletter that will be sent to subscribers approximately twice per month. The newsletter will contain news about the club and club events, articles about VC news and deals, general financial and macroeconomic news that can tie into VC, Montreal VC events, and relevant job postings.</div>
                            <br/>
                            <div className={styles.introSubTitle}>Launching Mar 1, 2025</div>
                        </div>
                    </ScrollAnimation>
                </Stack>

                {/* McGill Ventures Newsletter What to Expect */}
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
                                <div className={styles.expectBox}>News about the club and club events</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Articles about VC news and deals</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>General financial and macroeconomic news</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Montreal VC events and relevant job postings</div>
                            </ScrollAnimation>
                        </div>
                    </Stack>
                </Stack>
        </>
    );
}

const VenturesFund = () => {
    return (
        <>

                {/* McGill Ventures Fund Introduction */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                    marginTop="125px"
                >
                    <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                        <div>
                            <div className={styles.introTitle}>McGill Ventures Fund</div>
                            <div className={styles.introSubtitle}>The McGill Ventures Fund will provide early-stage capital to McGill-affiliated founders while training students in venture investing, due diligence, and managing a real VC fund!</div>
                            <br/>
                                <br/>
                                <a className={styles.introSubtitle} href='https://docs.google.com/forms/d/e/1FAIpQLSfDKvzofnRnd_0dSH_D_GsPx0reTNwgOjSgHiUZDdVERtVWnQ/viewform'>Interest Form</a>
                        </div>
                    </ScrollAnimation>
                </Stack>

                {/* McGill Ventures Fund What to Expect */}
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
                                <div className={styles.expectBox}>Research, deal sourcing, and defining fund structure</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Meeting with lawyers and securing McGill’s approval</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Raising $300K from alumni donations</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Investing $25K in 10 McGill-affiliated startups</div>
                            </ScrollAnimation>
                        </div>
                    </Stack>
                </Stack>
        </>
    );
}

const VenturesAdvisory = () => {
    return (
        <>
             {/* Venture Advisory Program Introduction */}
             <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                    marginTop="125px"
                >
                    <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                        <div>
                            <div className={styles.introTitle}>Venture Advisory Program</div>
                            <div className={styles.introSubtitle}>Ventures Advisory is a collaborative program designed to support startups in acquiring and raising venture funding. The program connects innovative startups with skilled teams of consultants who provide actionable feedback based on the startups’ pitch decks and overall business strategies.</div>
                        </div>
                    </ScrollAnimation>
                </Stack>

                {/* Venture Advisory Program What to Expect */}
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
                                <div className={styles.expectBox}>Advanced venture financial modeling course</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Practical skills through deliverables for real startups</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                                <div className={styles.expectBox}>Deliverables reviewed by experienced VC community members</div>
                            </ScrollAnimation>
                        </div>
                    </Stack>
                </Stack>
        </>
    );
}

const Program = () => {
    return (
        <div>
            <NavBar />
            <Landing title={"Invest, Analyze,\nSucceed, Excel"}
                     subtitle={"Our programs are your launchpad into the exciting world of Venture Capital. Join us and become a part of the future of venture capital!"}
                     image={landingImage} />

            <Stack direction="column" padding="0 10% 10% 10%">
                <VenturesFund/>
                <HealthTechInnovation />
                <McGillVenturesNewsletter />
                <AnalystProgram />
                <VenturesAdvisory />
            </Stack>
            <Footer />
        </div>

    )
}

export default Program;