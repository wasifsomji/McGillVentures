import React from 'react';
import styles from "./OurTeam.module.scss";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";

const OurTeam = () => {
    return (
        <div className={styles.teamCardsContainer}>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
            <TeamMember image={person1} name="Vincent Barsalou" role="VP External" major="Finance" hometown="Montreal, QC" grad="2026"/>
        </div>
    )
}

export default OurTeam;