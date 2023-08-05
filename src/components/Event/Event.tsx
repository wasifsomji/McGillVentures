import React from 'react';
import styles from "./Event.module.scss";

interface Props {
    title: string;
    date: string;
    location: string;
    description: any;
    image: string;
}

const Event:React.FC<Props> = ({title, date, location, description, image}) => {
    return (
        <div className={styles.eventContainer}>
            <img src={image} className={styles.eventImage} alt="McGill University"/>
            <div className={styles.eventContent}>
                <div className={styles.eventTitle}>{title}</div>
                <div className={styles.eventDetails}>{date}<br/>{location}</div>
                <div className={styles.eventDescription}>{description}</div>
            </div>
        </div>
    )
}

export default Event;