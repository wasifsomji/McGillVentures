import styles from "./Landing.module.scss";
import React from "react";

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
                <div className={styles.landingTitle}>{title}</div>
                <div className={styles.landingSubtitle}>{subtitle}</div>
            </div>
        </div>
    )
}

export default Landing;