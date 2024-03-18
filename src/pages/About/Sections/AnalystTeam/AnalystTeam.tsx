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

const AnalystTeam= () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={park} name="Woo Park" role="Head of Analyst Program" major="Strat. Management + Finance" hometown="Victoria, BC" grad="2023"/>
                </ScrollAnimation>
            </div>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Anthony Azrak" role="Analyst" major="Software Engineering" hometown="Montreal, QC" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={goralski} name="Michael Goralski" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={bernier_michaud} name="Ludovick Bernier-Michaud" role="Analyst" major="undefined" hometown="undefined" grad="undefined"/>
                </ScrollAnimation>
            </div>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={mcintosh} name="Jackson McIntosh" role="Analyst" major="Finance" hometown="undefined" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Soso Cowell" role="Analyst" major="Finance" hometown="2025" grad="undefined"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={kiss} name="Tanner Kiss" role="Analyst" major="Finance + CS" hometown="Toronto,ON" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={pop} name="Angelika Popovski" role="Analyst" major="Strategic Management" hometown="Toronto, ON" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={donzelot} name="Jules Donzelot" role="Analyst" major="Finance" hometown="undefined" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={chiasson} name="Leo Chiasson" role="Analyst" major="Economics" hometown="Montreal, QC" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={hakki} name="Eran Hakki" role="Analyst" major="Finance" hometown="Nicosia, Cyprus" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={van_bergh} name="Jacob Van Bergh" role="Analyst" major="Economics" hometown="Toronto, ON" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={menand} name="Anae Menand" role="Analyst" major="Finance - Concentration Business Analyt." hometown="undefined" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={stas} name="Stas Mironov" role="Analyst" major="Finance" hometown="Toronto, ON" grad="2027"/>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default AnalystTeam;