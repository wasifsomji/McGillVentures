import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import React from 'react';
import styles from "./DevTeam.module.scss";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';

import somji from "../../../../assets/exec_headshots/Wasif Somji (Dtech).jpeg";

import joseph from "../../../../assets/devTeam/darlie_joseph_headshot.jpg";
import dmytro from "../../../../assets/devTeam/dmytro_martyniuk_headshot.png";
import hum from "../../../../assets/devTeam/jaden_hum_headshot.jpg";
import heng from "../../../../assets/devTeam/julien_heng_headshot.jpg";
import chen from "../../../../assets/devTeam/noah_chen_headshot.jpeg";



const ExecTeam = () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={somji} name="Wasif Somji" role="Director of Engineering" major="Computer Engineering" hometown="Vancouver, BC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Yassine Mimet" role="Associate Director of Engineering" major="Computer Engineering" hometown="Tetouan, Morocco" grad="2025"/>
                </ScrollAnimation>
            </div>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={heng} name="Julien Heng" role="Fullstack Developer" major="Software Engineering" hometown="Paris, France" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={dmytro} name="Dmytro Martyniuk" role="Backend Developer" major="Software Engineering" hometown="Montreal, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={hum} name="Jaden Hum" role="Frontend Developer" major="Software Engineering" hometown="Montreal, QC" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={chen} name="Noah Chen" role="Frontend Developer" major="CS + Mgmt." hometown="Toronto, ON" grad='2027'/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={joseph} name="Darlie Joseph" role="Product Designer" major="Psychology" hometown="Montreal, QC"/>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default ExecTeam;