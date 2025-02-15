import React from 'react';
import styles from "./ExecTeam.module.scss";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import person1 from "../../../../assets/mcgill.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';
import farrell from "../../../../assets/exec_headshots/Cara-Li Farrell (Strategic Advisor).jpeg";
import wu from "../../../../assets/exec_headshots/Ethan Wu (Strategic Advisor).jpeg";
import bains from "../../../../assets/exec_headshots/Jaiden Bains (Events).jpg";
import fadel from "../../../../assets/exec_headshots/Sara Abi Fadel (Finance).jpg";
import quelavoine from "../../../../assets/exec_headshots/Thibault Quelavoine (Co-President).jpg";
import smedt from "../../../../assets/exec_headshots/Margaux De Smedt (Events Coordinator).jpg";
import ahmed from "../../../../assets/exec_headshots/Naureen Ahmed (President).jpeg"; 
import mun from "../../../../assets/exec_headshots/Carrie Mun (Marketing Coordinator).png";
import durra from "../../../../assets/exec_headshots/Hala Durra (Events Coordinator).jpeg";
import francois from "../../../../assets/exec_headshots/Francois-Wavier Chap. Perr. (VP Corporate Relations).jpg";
import aaron from "../../../../assets/exec_headshots/Aaron Anandji (Executive Director).edited1.png"; 
import pennginton from "../../../../assets/exec_headshots/Emma Pennington (Events).jpeg";
import goktug from "../../../../assets/exec_headshots/Goktug Bender(Corporate Relations).jpeg";
import gonzales from "../.././../../assets/exec_headshots/Janine Gonzales (Director of Marketing).jpeg"
import kaur from "../../../../assets/exec_headshots/Sehajdeep Kaur(Co-Director of Events).png";
import mikhaeil from "../../../../assets/exec_headshots/Miriam Mikhaeil (Director of Corporate Relations).jpg";
import robidoux from "../../../../assets/exec_headshots/Edward Robidoux (Director of Finance).jpeg";
import syed from "../../../../assets/exec_headshots/Mustafa Syed(Corp Relations).png";
import bouez from "../../../../assets/exec_headshots/Marc Bouez (Finance Coordinator).jpeg";
import cwu from "../../../../assets/exec_headshots/Canyu Wu (Executive Assistant).jpeg";
import lee from "../../../../assets/exec_headshots/Nikola Lee (Venture Advisory Manager).jpg";
import park from "../../../../assets/exec_headshots/Woo Park (Strategic Advisor).png";
import luu from "../../../../assets/exec_headshots/Charlyne Luu (Director of Events).jpeg";
import sultana from "../../../../assets/exec_headshots/Tanjin Sultana (Executive Assistant).jpeg";
import lukas from "../../../../assets/exec_headshots/Paul Lukas (Director of Corporate Relations).jpg";
import abbas from "../../../../assets/exec_headshots/Tasmia Abbas (HealthTech Innovation Lab Manager).jpg";
import nakouzi from "../../../../assets/exec_headshots/Martin Nakouzi (HealthTech Innovation Lead).jpeg";
import wang from "../../../../assets/exec_headshots/Jennifer Wang (Marketing Coordinator).jpg";
import sun from "../../../../assets/exec_headshots/Kevin Sun (Events Coordinator).jpg";
import chung from "../../../../assets/exec_headshots/Celine Chung (Corporate Relations Coordinate).jpg";
import mebane from "../../../../assets/exec_headshots/Jasper Mebane (Venture Advisory Manager).jpg";
import lu from "../../../../assets/exec_headshots/Catherine Lu (Events Coordinator).jpeg";
import witowski from "../../../../assets/exec_headshots/Eduard Witowski (Finance Coordinator).jpeg";
import rivard from "../../../../assets/exec_headshots/Makena Rivard (Marketing Coordinator).jpeg";
import zhang from "../../../../assets/exec_headshots/Xin Yu Zhang (Events Coordinator).jpeg";
import roufid from "../../../../assets/exec_headshots/Sakina Roufid (Corporate Relations Coordinator).png";
import logan from "../../../../assets/exec_headshots/Angus Logan (Corporate Relations Coordinator).jpg";
import torres from "../../../../assets/exec_headshots/Alexandra Torres (Marketing Coordinator).jpeg";

const ExecTeam = () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
            <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={ahmed} name="Naureen Ahmed" role="President" major="Finance & IT Mgnt." hometown="Gatineau, QC" grad="2026"/>
                </ScrollAnimation>
            </div>
            <div className={styles.teamInnerContainer}>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={luu} name="Charlyne Luu" role="Director of Events" major="Finance" hometown="Montreal, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={person1} name="Christine Wu" role="Director of Events" major="Finance, Entrepreneurship, Strategic Management" hometown="Montreal, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={durra} name="Hala Durra" role="Events Coordinator" major="Economics & Business Analyt." hometown="Amman, Jordan" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={smedt} name="Margaux De Smedt" role="Events Coordinator" major="Honors in Economics and Finance" hometown="Paris, France" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={sun} name="Kevin Sun" role="Events Coordinator" major="Finance, Accounting & Business Analytics" hometown="Montreal, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={kaur} name="Sehajdeep Kaur" role="Events Coordinator" major="International Development" hometown="Nabha, India" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={lu} name="Catherine Lu" role="Events Coordinator" major="Honours Economics" hometown="Boston, MA" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={zhang} name="Xin Yu Zhang" role="Events Coordinator" major="Finance" hometown="Montreal, QC" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={gonzales} name="Janine Gonzales" role="Director of Marketing" major="Marketing & Information Technology Management" hometown="Halifax, Nova Scotia" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={wang} name="Jennifer Wang" role="Marketing Coordinator" major="Marketing, IT Management" hometown="Montreal, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={rivard} name="Makena Rivard" role="Marketing Coordinator" major="Psychology" hometown="Montreal, QC" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={torres} name="Alexandra Torres" role="Marketing Coordinator" major="Economics" hometown="Escazu, Costa Rica" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={lukas} name="Paul Lukas" role="Director of Corporate Relations" major="Strategy, International Management, Sustainability" hometown="North Bethesda, MD" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={mikhaeil} name="Miriam Mikhaeil" role="Director of Corporate Relations" major="Finance" hometown="Cairo, Egypt" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={goktug} name="Göktuğ Bender" role="Associate Director of Corporate Relations" major="Psychology" hometown="Tekirdağ/Türkiye" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={syed} name="Mustafa Syed" role="Associate Director of Corporate Relations" major="Economics, Math & Mgmt." hometown="Tekirdağ/Türkiye" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={chung} name="Celine Chung" role="Corporate Relations Coordinator" major="International Management" hometown="Dallas, TX" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={roufid} name="Sakina Roufid" role="Corporate Relations Coordinator" major="Joint Honours Economics and Finance" hometown="Montreal, QC" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={logan} name="Angus Logan" role="Corporate Relations Coordinator" major="Finance" hometown="Aberdeen, Scotland" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={robidoux} name="Edward Robidoux" role="Director of Finance" major="Finance" hometown="Rosemere, QC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={bouez} name="Marc Bouez" role="Finance Coordinator" major="Finance" hometown="Ottawa, ON" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={witowski} name="Eduard Witowski" role="Finance Coordinator" major="Finance" hometown="Montreal, QC" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={farrell} name="Cara-Li Farrell" role="Strategic Advisor" major="Analytics" hometown="Montreal, QC" grad="2024"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={bains} name="Jaiden Bains" role="Strategic Advisor" major="Economics & Finance" hometown="Vancouver, BC" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={aaron} name="Aaron Anandji" role="Strategic Advisor" major="Strategic Management" hometown="Vancouver, BC" grad="2026"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={wu} name="Ethan Wu" role="Strategic Advisor" major="Honours in Investment Management" hometown="Montreal, QC" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={park} name="Woo Park" role="Strategic Advisor" major="Strat. Management + Finance" hometown="Vancouver, BC"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={francois} name="François-Xavier Chap. Perr." role="Strategic Advisor" major="Economics" hometown="Montreal, QC"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={sultana} name="Tanjin Sultana" role="Executive Assistant" major="Bioengineering" hometown="Montreal, QC" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={cwu} name="Canyu Wu" role="Executive Assistant" major="Bioengineering" hometown="Montreal, QC" grad="2028"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={abbas} name="Tasmia Abbas" role="HealthTech Innovation Lab Manager" major="Finance & Entrepreneurship" hometown="Toronto, ON" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={nakouzi} name="Martin Nakouzi" role="HealthTech Innovation Lab Manager" major="Neuroscience" hometown="Beirut, Lebanon" grad="2025"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={lee} name="Nikola Lee" role="Venture Advisory Manager" major="Finance" hometown="Toronto, ON" grad="2027"/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <TeamMember image={mebane} name="Jasper Mebane" role="Venture Advisory Manager" major="Finance" hometown="Brooklyn, NY" grad="2027"/>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default ExecTeam;