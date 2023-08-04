import React from 'react';
import styles from "./OurTeam.module.scss";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";

const OurTeam = () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
                <TeamMember image={person1} name="Aaron Anandji" role="Co-President" major="Strategic Management" hometown="Vancouver, CA" grad="2025"/>
                <TeamMember image={person1} name="Thibault Quelavoine" role="Co-President" major="Investment Management (Honours)" hometown="Belgium" grad="2024"/>
            </div>
            <div className={styles.teamInnerContainer}>
                <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Saint-Burno, CA" grad="2025"/>
                <TeamMember image={person1} name="Jaiden Bains" role="VP Events" major="Economics and Finance" hometown="Vancouver, CA" grad="2025"/>
                <TeamMember image={person1} name="Ethan Wu" role="VP Communications & Media" major="Finance" hometown="Montreal, CA" grad="2026"/>
                <TeamMember image={person1} name="Rio Pesochin" role="VP Communications & Media" major="General Management" hometown="Vancouver, CA" grad="2025"/>
                <TeamMember image={person1} name="Sofi Sun" role="VP Finance" major="Finance and Accounting" hometown="China" grad="2023"/>
                <TeamMember image={person1} name="Sara Abi Fadel" role="VP Finance" major="Economics and Finance" hometown="Lebanon" grad="2024"/>
            </div>
            <div className={styles.teamInnerContainer}>
                <TeamMember image={person1} name="Ludovick Bernier-Michaud" role="Director - Analyst Program" major="Earth Science and Economics" hometown="Montreal, CA" grad="2024"/>
            </div>
        </div>
    )
}

export default OurTeam;