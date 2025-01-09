import React from 'react';
import styles from "./AnalystTeam.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import TeamMember from "../../../../components/TeamMember/TeamMember";
import mcintosh from "../../../../assets/analyst_headshots/Jackson McIntosh (General Manager).png";
import hamam from "../../../../assets/analyst_headshots/Alexis Hamam (General Manager).png";
import sun from "../../../../assets/analyst_headshots/Iris Sun (General Manager).png";
import vaillancourt from "../../../../assets/analyst_headshots/Noah Vaillancourt(Analyst).jpg";
import chung from "../../../../assets/analyst_headshots/Celine Chung (Analyst).jpg";
import sadid from "../../../../assets/analyst_headshots/Urfaan Sadid (Analyst).jpg";
import rabbath from "../../../../assets/analyst_headshots/Jonathan Rabbath (Analyst).jpg";
import scodigor from "../../../../assets/analyst_headshots/Elisabeth Scodigor.jpg";
import comtois from "../../../../assets/analyst_headshots/Alexandre Comtois (Analyst).jpg";
import xu from "../../../../assets/analyst_headshots/Violet Xu (Analyst).jpg";
import gaspar from "../../../../assets/analyst_headshots/Gaspar Billerault (Analyst).jpg";
import almir from "../../../../assets/analyst_headshots/Almir Hajdarevic (Analyst).jpg";
import kirin from "../../../../assets/analyst_headshots/Kirin Dejacobson (Analyst).jpg";
import gonzalez from "../../../../assets/analyst_headshots/Gael Gonzalez (Analyst).jpg";
import ham from "../../../../assets/analyst_headshots/Oscar Ham (Analyst).jpg";
import cartier from "../../../../assets/analyst_headshots/Charles Cartier (Analyst).jpg";
import harris from "../../../../assets/analyst_headshots/Alhan Harris(Analyst).png";
import margaux from "../../../../assets/analyst_headshots/Margaux Ghazzoui (Analyst).jpg";
import clarke from "../../../../assets/analyst_headshots/Nathaniel Clarke (Analyst).jpg";

const managers = [
    { image: mcintosh, name: "Jackson McIntosh", role: "General Manager", major: "Finance", hometown: "Montreal, QC", grad: "2026" },
    { image: hamam, name: "Alexis Hamam", role: "General Manager", major: "Finance", hometown: "Montreal, QC", grad: "2025" },
    { image: sun, name: "Iris Sun", role: "General Manager", major: "Bioengineering", hometown: "Vancouver, BC", grad: "2026" },
];

const analysts = [
    { image: margaux, name: "Margaux Ghazzoui", role: "Analyst", major: "International Development", hometown: "London, ON", grad: "2025" },
    { image: scodigor, name: "Elisabeth Scodigor", role: "Analyst", major: "Strat. Management + Operations", hometown: "Belfort, France", grad: "2026" },
    { image: cartier, name: "Charles Cartier", role: "Analyst", major: "Finance", hometown: "Montreal, QC", grad: "2026" },
    { image: harris, name: "Alhaan Harris", role: "Analyst", major: "Joint Honours Econ + Finance", hometown: "Karachi, Pakistan", grad: "2026" },
    { image: chung, name: "Celine Chung", role: "Analyst", major: "International Management", hometown: "Dallas, TX", grad: "2027" },
    { image: comtois, name: "Alexandre Comtois", role: "Analyst", major: "Finance", hometown: "Montreal, QC", grad: "2027" },
    { image: gaspar, name: "Gaspar Billerault", role: "Analyst", major: "Computer Science", hometown: "Alicante, Spain", grad: "2027" },
    { image: kirin, name: "Kirin DeJacobson", role: "Analyst", major: "Finance", hometown: "Seattle, WA", grad: "2027" },
    { image: gonzalez, name: "Gael Gonzalez", role: "Analyst", major: "Strat. Management + Finance", hometown: "Saltillo, Mexico", grad: "2027" },
    { image: ham, name: "Oscar Ham", role: "Analyst", major: "Civil Engineering", hometown: "Montreal, QC", grad: "2027" },
    { image: sadid, name: "Urfaan Sadid", role: "Analyst", major: "Joint Honours Econ + Finance", hometown: "Calgary, AB", grad: "2028" },
    { image: rabbath, name: "Jonathan Rabbath", role: "Analyst", major: "Joint Honours Econ + Finance", hometown: "Boca Raton, Florida", grad: "2028" },
    { image: vaillancourt, name: "Noah Vaillancourt", role: "Analyst", major: "Software Engineering", hometown: "Lac-Mégantic, QC", grad: "2028" },
    { image: xu, name: "Violet Xu", role: "Analyst", major: "Management", hometown: "Markham, ON", grad: "2028" },
    { image: almir, name: "Almir Hajdarevic", role: "Analyst", major: "International Management", hometown: "Chicago, IL", grad: "2028" },
    { image: clarke, name: "Nathaniel Clarke", role: "Analyst", major: "Finance", hometown: "Vancouver, BC", grad: "2028" },
];

const AnalystTeam = () => {
    return (
        <div className={styles.teamCardsContainer}>
            <div className={styles.teamInnerContainer}>
                {managers.map((manager, index) => (
                    <ScrollAnimation key={index} animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <TeamMember
                            image={manager.image}
                            name={manager.name}
                            role={manager.role}
                            major={manager.major}
                            hometown={manager.hometown}
                            grad={manager.grad}
                        />
                    </ScrollAnimation>
                ))}
            </div>
            <div className={styles.teamInnerContainer}>
                {analysts.map((analyst, index) => (
                    <ScrollAnimation key={index} animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <TeamMember
                            image={analyst.image}
                            name={analyst.name}
                            role={analyst.role}
                            major={analyst.major}
                            hometown={analyst.hometown}
                            grad={analyst.grad}
                        />
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    );
}

export default AnalystTeam;