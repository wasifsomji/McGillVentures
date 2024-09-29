import React from 'react';
import styles from "./AnalystTeam.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";
import van_bergh from "../../../../assets/exec_headshots/Jacob Van Bergh (Analyst).jpg";
import bernier_michaud from "../../../../assets/exec_headshots/Ludovick Bernier-Michaud (Associate).jpg";
import goralski from "../../../../assets/exec_headshots/Michael Goralski (Associate).jpg";
import park from "../../../../assets/analyst_headshots/Woo Park (Head of Analysts).png";
import menand from "../../../../assets/analyst_headshots/Anae Menand (Analyst).png";
import donzelot from "../../../../assets/analyst_headshots/Jules Donzelot (Analyst).png"; 
import mcintosh from "../../../../assets/analyst_headshots/Jackson McIntosh (Analyst).png";
import hakki from "../../../../assets/analyst_headshots/Eran Hakki(Analyst).jpeg"; 
import chiasson from "../../../../assets/analyst_headshots/Leo Chiasson(Analyst).jpeg"; 
import kiss from "../../../../assets/analyst_headshots/Tanner Kiss(Analyst).jpeg";
import pop from "../../../../assets/analyst_headshots/Angelika Popovski.png";
import stas from "../../../../assets/analyst_headshots/Stas Mironov (Analyst).png"; 
import hamam from "../../../../assets/analyst_headshots/Alexis Hamam (General Manager).png"
import sun from "../../../../assets/analyst_headshots/Iris Sun (General Manager).png";

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import program from "../../../../assets/program/analyst_program.jpg";

const AnalystTeam= () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={mcintosh} name="Jackson McIntosh" role="General Manager of Analyst Program" major="Finance" hometown="Montreal, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={hamam} name="Alexis Hamam" role="General Manager of Analyst Program" major="Finance" hometown="Montreal, QC" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={sun} name="Iris Sun" role="General Manager of Analyst Program" major="Bioengineering" hometown="Vancouver, BC" grad="2026"/>
                </ScrollAnimation>
            </div> 
            <div className={styles.teamComingSoonContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <Typography variant="h5" align={"center"} gutterBottom={true} fontSize={19}>Analyst Sign Up Form</Typography>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDBP87RwOkYrTAvz2JGXJKP7x2Cn786JaXuvUOAkdmJbG3xQ/viewform" target="_blank" rel="noopener noreferrer">
                        <Card sx={{ width: { xs: 275, md: 300 } }}>
                            <CardMedia
                                sx={{ height: { xs: 275, md: 300 } }}
                                image={program}
                                title="face card"
                            />
                        </Card>
                    </a>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default AnalystTeam;