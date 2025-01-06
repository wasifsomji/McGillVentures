import React from 'react';
import styles from "./ExecTeam.module.scss";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';
import farrell from "../../../../assets/exec_headshots/Cara-Li Farrell (Corporate Relations).jpg";
import wu from "../../../../assets/exec_headshots/EthanWu.jpeg";
import bains from "../../../../assets/exec_headshots/Jaiden Bains (Events).jpg";
import fadel from "../../../../assets/exec_headshots/Sara Abi Fadel (Finance).jpg";
import quelavoine from "../../../../assets/exec_headshots/Thibault Quelavoine (Co-President).jpg";
import smedt from "../../../../assets/exec_headshots/Margaux De Smedt (Events Coordinator).jpg";
import ahmed from "../../../../assets/exec_headshots/Naureen Ahmed (VP Staff).jpg"; 
import mun from "../../../../assets/exec_headshots/Carrie Mun (Marketing Coordinator).png";
import durra from "../../../../assets/exec_headshots/Hala Durra (Events Coordinator).jpeg";
import francois from "../../../../assets/exec_headshots/Francois-Wavier Chap. Perr. (VP Corporate Relations).jpg";
import aaron from "../../../../assets/exec_headshots/Aaron Anandji (Executive Director).edited1.png"; 
import pennginton from "../../../../assets/exec_headshots/Emma Pennington (Events).jpeg";
import goktug from "../../../../assets/exec_headshots/Goktug Bender(Corporate Relations).jpeg";
import jrg from "../.././../../assets/exec_headshots/Janine RG (Marketing Director).jpeg"
import kaur from "../../../../assets/exec_headshots/Sehajdeep Kaur(Co-Director of Events).png";
import mikhail from "../../../../assets/exec_headshots/Miriam Mikhail (Corp Relations).jpg";
import robidoux from "../../../../assets/exec_headshots/Ed Robidoux (Finance).png";
import syed from "../../../../assets/exec_headshots/Mustafa Syed(Corp Relations).png";
import bouez from "../../../../assets/exec_headshots/Marc Bouez (Associate Director of Finance).jpeg";
import cwu from "../../../../assets/exec_headshots/Canyu Wu (Events Coordinator).jpg";
import lee from "../../../../assets/exec_headshots/Nikola Lee (Executive Assistant).jpg";
import park from "../../../../assets/exec_headshots/Woo Park (Strategic Advisor).png";
import lu from "../../../../assets/exec_headshots/Charlyne Lu (Director of Events).jpeg";

const ExecTeam = () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
            <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={ahmed} name="Naureen Ahmed" role="President" major="Finance & IT Mgnt." hometown="Gatineau, QC" grad="2027"/>
                </ScrollAnimation>
            </div>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={lu} name="Charlyne Luu" role="Director of Events" major="Finance" hometown="Montreal, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={jrg} name="Janine Gonzales" role="Director of Marketing" major="Marketing & CS" hometown="Halifax, Nova Scotia" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={durra} name="Hala Durra" role="Events Coordinator" major="Economics & Business Analyt." hometown="Amman, Jordan" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={kaur} name="Sehajdeep Kaur" role="Events Coordinator" major="International Development" hometown="Nabha, India" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={cwu} name="Canyu Wu" role="Events Coordinator" major="Bioengineering" hometown="Montreal, QC" grad="2028"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={mikhail} name="Miriam Mikhaeil" role="Director of Corporate Relations" major="Finance & Accounting" hometown="Cairo, Egypt" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={goktug} name="Göktuğ Bender" role="Associate Director of Corporate Relations" major="Psychology" hometown="Tekirdağ/Türkiye" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={syed} name="Mustafa Syed" role="Associate Director of Corporate Relations" major="Economics, Math & Mgmt." hometown="Tekirdağ/Türkiye" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={robidoux} name="Edward Robidoux" role="Director of Finance" major="Economics & Finance" hometown="Rosemere, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={bouez} name="Marc Bouez" role="Associate Director of Finance" major="Finance" hometown="Ottawa, ON" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={bains} name="Jaiden Bains" role="Strategic Advisor" major="Economics & Finance" hometown="Vancouver, BC" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={aaron} name="Aaron Anandji" role="Strategic Advisor" major="Strategic Management" hometown="Vancouver, BC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={park} name="Woo Park" role="Strategic Advisor" major="Strat. Management + Finance" hometown="Vancouver, BC"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={francois} name="François-Xavier Chap. Perr." role="Strategic Advisor" major="Economics" hometown="Montreal, QC"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={lee} name="Nikola Lee" role="Executive Assistant" major="Finance & Entrepeneurship" hometown="Toronto, ON" grad="2027"/>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default ExecTeam;