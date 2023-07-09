import React from 'react';
import styles from "./AnalystProgram.module.scss";
import {Stack} from "@mui/material";
import introImage from "../../../../assets/mcgill.jpeg";

const AnalystProgram= () => {
    return (
        <Stack direction="column" padding="0 10% 10% 10%">

            {/* Introduction */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems="center"
                justifyContent="flex-start"
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
        </Stack>
    )
}

export default AnalystProgram;