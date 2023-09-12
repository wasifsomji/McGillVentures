import styles from "./Landing.module.scss";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
    title: string;
    subtitle: string;
    image: string;
}

const Landing:React.FC<Props> = ({title, subtitle, image}) => {
    return (
        <div className={styles.landingBackground}>
            <img className={styles.leftImage} src={image} alt="mcgill campus"/>
            <div className={styles.rightTitles}>
                {/*<ScrollAnimation animateIn="fadeIn" animatePreScroll='false'>*/}
                    <div className={styles.landingTitle}>{title}</div>
                    <div className={styles.landingSubtitle}>{subtitle}</div>
                {/*</ScrollAnimation>*/}
            </div>
        </div>
    )
}

export default Landing;