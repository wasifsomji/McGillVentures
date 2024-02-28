import React from 'react';
import styles from "./ExecTeam.module.scss";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';
import farrell from "../../../../assets/exec_headshots/Cara-Li Farrell (Corporate Relations).jpg";
import wu from "../../../../assets/exec_headshots/Ethan Wu (Marketing).png";
import bains from "../../../../assets/exec_headshots/Jaiden Bains (Events).jpg";
import fadel from "../../../../assets/exec_headshots/Sara Abi Fadel (Finance).jpg";
import sun from "../../../../assets/exec_headshots/Sofi Sun (Finance).jpg";
import quelavoine from "../../../../assets/exec_headshots/Thibault Quelavoine (Co-President).jpg";
import smedt from "../../../../assets/exec_headshots/Margaux De Smedt (Events Coordinator).jpg";
import somji from "../../../../assets/exec_headshots/Wasif Somji (Technology Lead).png";
import ahmed from "../../../../assets/exec_headshots/Naureen Ahmed (VP Staff).jpg"; 

const ExecTeam = () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Aaron Anandji" role="Co-President" major="Strategic Management" hometown="Vancouver, BC" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={quelavoine} name="Thibault Quelavoine" role="Co-President" major="Investment Management" hometown="The Hague" grad="2024"/>
                </ScrollAnimation>
            </div>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={bains} name="Jaiden Bains" role="VP Events" major="Economics and Finance" hometown="Vancouver, BC" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Hala Durra" role="Events Coordinator" major="Business Analytics" hometown="Amman, Jordan" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={smedt} name="Margaux De Smedt" role="Events Coordinator" major="Joint Honours Finance + Econ" hometown="Paris, France" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={farrell} name="Cara-Li Farrell" role="VP Corporate Relations" major="Bus. Analytics and Finance" hometown="Montreal, QC" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="François-Xavier Chap. Perr." role="VP Corporate Relations" major="Economics and Social Entrep" hometown="Montreal, QC" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={ahmed} name="Naureen Ahmed" role="VP Staff" major="Finance and IT Mgnt." hometown="Gatineau, QC" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={fadel} name="Sara Abi Fadel" role="VP Finance" major="Joint Honours Finance + Econ" hometown="Beirut, Lebanon" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={wu} name="Ethan Wu" role="VP Marketing" major="Honours in Inv. Mgnt." hometown="Montreal, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Carrie Mun" role="Marketing Coordinator" major="Economics and Mathematics" hometown="New York" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Wasif Somji" role="Director of Technology" major="Computer Engineering" hometown="Vancouver, BC" grad="2025"/>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default ExecTeam;