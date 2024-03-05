import React from 'react';
import styles from "./AnalystTeam.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";
import van_bergh from "../../../../assets/exec_headshots/Jacob Van Bergh (Analyst).jpg";
import bernier_michaud from "../../../../assets/exec_headshots/Ludovick Bernier-Michaud (Associate).jpg";
import goralski from "../../../../assets/exec_headshots/Michael Goralski (Associate).jpg";

const AnalystTeam= () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Woo Park" role="Head of Analyst Program" major="Strat. Management + Finance" hometown="Victoria, BC" grad="2023"/>
                </ScrollAnimation>
            </div>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Anthony Azrak" role="Associate" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={goralski} name="Michael Goralski" role="Associate" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={bernier_michaud} name="Ludovick Bernier-Michaud" role="Associate" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
            </div>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Jackson McIntosh" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Soso Cowell" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Tanner Kiss" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Angelika Popovski" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Jules Donzelot" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Leo Chiasson" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Eran Hakki" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={van_bergh} name="Jacob Van Bergh" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Anae Menand" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Stas Mironov" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default AnalystTeam;