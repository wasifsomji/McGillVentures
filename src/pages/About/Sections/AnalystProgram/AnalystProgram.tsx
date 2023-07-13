import React from 'react';
import styles from "./AnalystProgram.module.scss";
import {Card, CardContent, Stack, Typography} from "@mui/material";
import introImage from "../../../../assets/mcgill.jpeg";
import partnerImage1 from "../../../../assets/mcgill.jpeg";

const AnalystProgram= () => {
    return (
        <Stack direction="column" padding="0 10% 10% 10%">

            {/* Introduction */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems="center"
                justifyContent="space-between"
            >
                <div>
                    <div className={styles.introTitle}>Introducing our Analyst Program</div>
                    <div className={styles.introSubtitle}>The goal of the program is to create analysts who are equipped with the skills needed to
                        immediately break into Venture Capital as analysts following graduation.
                        The program is created in consultation with multiple prominent Montreal Venture Capital Firms
                    </div>
                </div>
                <img src={introImage} className={styles.introImage} alt="intro"/>
            </Stack>

            {/* What to Expect */}
            <Stack className={styles.whatToExpect}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'center', sm: 'flex-start' }}
                    justifyContent={{ xs: 'center', sm: 'flex-start' }}
                >
                    <div className={styles.introTitle}>What to Expect</div>
                    <div className={styles.expectBoxContainer}>
                        <div className={styles.expectBox}>Workshops at Espace CDPQ</div>
                        <div className={styles.expectBox}>In-house workshops on the basics of Venture Capital</div>
                        <div className={styles.expectBox}>Mock-startup building simulator</div>
                        <div className={styles.expectBox}>Cases created by Venture Capital partners</div>
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
                <div className={styles.introTitle}>Positions</div>
                <Stack
                    direction={{ sm: 'column', md: 'row' }}
                    justifyContent={{ md: 'center'}}
                    alignItems={{ sm: 'center'}}
                    gap="5%"
                >
                    <Card
                        sx={{
                            width: { sm: "100%", md: "40%"},
                            height: { md: "425px", lg: "310px" },
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
                            height: { md: "425px", lg: "310px" },
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
            </Stack>
            <Stack
                direction="column"
                display="flex"
                alignItems="center"
                paddingTop="125px"
            >
                <div className={styles.introTitle}>Our Partners</div>
                <Stack display="flex" direction="row" flexWrap= "wrap" justifyContent="center">
                    <img src={partnerImage1} className={styles.partnerImage} alt="logo"/>
                    <img src={partnerImage1} className={styles.partnerImage} alt="logo"/>
                    <img src={partnerImage1} className={styles.partnerImage} alt="logo"/>
                    <img src={partnerImage1} className={styles.partnerImage} alt="logo"/>
                    <img src={partnerImage1} className={styles.partnerImage} alt="logo"/>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AnalystProgram;