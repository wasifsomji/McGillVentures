import React from 'react';
import { useRef } from 'react';
import styles from "./Event.module.scss";
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Flippy, { FrontSide, BackSide } from "react-flippy";

interface Props {
    title: string;
    date: string;
    location: string;
    description: any;
    image: string;
    link: string;
}

const Event:React.FC<Props> = ({title, date, location, description, image, link}) => {

    const ref = useRef<Flippy>()
    return (
        <div>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal"
                ref={ref}
            >
                <FrontSide style={{boxShadow: "none" , width: "500px", height: "500px"}}>
                    <div className={styles.eventCard}>
                        <Card sx={{ width: {xs: 300, sm: 400, md: 400, lg: 400}, height: {xs: 550, sm: 600, md: 600, lg: 600} }}>
                            <CardMedia
                                sx={{ width: {xs: 300, sm: 400, md: 400, lg: 400}, height: {xs: 300, sm: 400, md: 400, lg: 400} }}
                                image={image}
                                title="event card"
                            />
                            <CardContent sx={{margin: "10px"}}>
                                <Typography gutterBottom={true} variant="h5" component="div" align="center">{title}</Typography>
                                <div className={styles.cardContent}><b>Date</b> {date}</div>
                                <div className={styles.cardContent}><b>Location</b> {location}</div>
                            </CardContent>
                        </Card>
                    </div>
                </FrontSide>
            </Flippy>
            <div className={styles.buttonContainer}>
                {link === "/" ?
                <Button variant="contained" disabled
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{width: "200px"}}>
                    Link
                </Button>
                :
                <Button variant="contained"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        sx={{width: "200px"}}>
                    Link
                </Button>}
            </div>
        </div>
    )
}

export default Event;