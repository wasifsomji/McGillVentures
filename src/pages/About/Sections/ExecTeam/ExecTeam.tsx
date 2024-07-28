import React from 'react';
import styles from "./ExecTeam.module.scss";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';
import farrell from "../../../../assets/exec_headshots/Cara-Li Farrell (Corporate Relations).jpg";
import wu from "../../../../assets/exec_headshots/Ethan Wu (Marketing).png";
import bains from "../../../../assets/exec_headshots/Jaiden Bains (Events).jpg";
import fadel from "../../../../assets/exec_headshots/Sara Abi Fadel (Finance).jpg";
import quelavoine from "../../../../assets/exec_headshots/Thibault Quelavoine (Co-President).jpg";
import smedt from "../../../../assets/exec_headshots/Margaux De Smedt (Events Coordinator).jpg";
import ahmed from "../../../../assets/exec_headshots/Naureen Ahmed (VP Staff).jpg"; 
import mun from "../../../../assets/exec_headshots/Carrie Mun (Marketing Coordinator).png";
import durra from "../../../../assets/exec_headshots/Hala Durra (Events Coordinator).jpeg";
import francois from "../../../../assets/exec_headshots/Francois-Wavier Chap. Perr. (VP Corporate Relations).jpg";
import aaron from "../../../../assets/exec_headshots/Aaron Anandji (Executive Director).edited1.png"; 
import somji from "../../../../assets/exec_headshots/Somji(DirectorTech).png";
import pennginton from "../../../../assets/exec_headshots/Emma Pennington (Events).jpeg";
import goktug from "../../../../assets/exec_headshots/Goktug Bender(Corporate Relations).jpeg";
import jrg from "../.././../../assets/exec_headshots/Janine RG (Marketing Director).jpeg"
import kaur from "../../../../assets/exec_headshots/Sehajdeep Kaur(Co-Director of Events).png";
import mikhail from "../../../../assets/exec_headshots/Miriam Mikhail (Corp Relations).jpg";
import robidoux from "../../../../assets/exec_headshots/Ed Robidoux (Finance).png";
import syed from "../../../../assets/exec_headshots/Mustafa Syed(Corp Relations).png";
const ExecTeam = () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={wu} name="Ethan Wu" role="Co-President" major="Honours in Inv. Mgnt." hometown="Montreal, QC" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={bains} name="Jaiden Bains" role="Co-President" major="Economics & Finance" hometown="Vancouver, BC" grad="2025"/>
                </ScrollAnimation>
            </div>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={durra} name="Hala Durra" role="Co-Director of Events" major="Business Analytics" hometown="Amman, Jordan" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={kaur} name="Sehajdeep Kaur" role="Co-Director of Events" major="International Development & Religious Studies" hometown="Nabha, India" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={pennginton} name="Emma Pennington" role="Associate Director of Events" major="Political Science" hometown="Toronto, Ontario" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={mikhail} name="Miriam Mikhaeil" role="Director of Corporate Relations" major="Finance & Accounting" hometown="Cairo, Egypt" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={goktug} name="Göktuğ Bender" role="Associate Director of Corporate Relations" major="Psychology" hometown="Tekirdağ/Türkiye" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={francois} name="François-Xavier Chap. Perr." role="Associate Director of Corporate Relations" major="Economics" hometown="Montreal, QC" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={syed} name="Mustafa Syed" role="Associate Director of Corporate Relations" major="Economics, Math & Mgmt." hometown="Tekirdağ/Türkiye" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={ahmed} name="Naureen Ahmed" role="Director of Innovation" major="Finance & IT Mgnt." hometown="Gatineau, QC" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={robidoux} name="Edward Robidoux" role="Director of Finance" major="Finance + Economics" hometown="Rosemere, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={jrg} name="Janine Gonzales" role="Director of Marketing" major="Marketing & CS" hometown="Halifax, Nova Scotia" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={mun} name="Carrie Mun" role="Marketing Coordinator" major="Economics & Mathematics" hometown="New York" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={somji} name="Wasif Somji" role="Director of Technology" major="Computer Engineering" hometown="Vancouver, BC" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={aaron} name="Aaron Anandji" role="Strategic Advisor" major="Strategic Management" hometown="Vancouver, BC" grad="2025"/>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default ExecTeam;