import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import React from 'react';
import styles from "./DevTeam.module.scss";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';

import somji from "../../../../assets/exec_headshots/Somji(DirectorTech).png";



const ExecTeam = () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={somji} name="Wasif Somji" role="Lead Product Manager" major="Computer Engineering" hometown="Vancouver, BC" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Yassine Mimet" role="Associate Product Manager" major="Computer Engineering" hometown="Tetouan, Morocco" grad="2025"/>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default ExecTeam;