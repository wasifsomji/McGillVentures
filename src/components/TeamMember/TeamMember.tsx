import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import styles from "./TeamMember.module.scss";

interface Props {
    image: string;
    name?: string;
    role: string;
    major: string;
    hometown: string;
    grad?: string;
}

const TeamMember:React.FC<Props> = ({image, name, role, major, hometown, grad}) => {
    return (
        <div className={styles.teamCard}>
            <Typography variant="h5" align={"center"} gutterBottom={true} fontSize={19}>{role}</Typography>
            <Card sx={{ width: { xs: 275, md: 300 } }}>
                <CardMedia
                    sx={{ height: { xs: 275, md: 300 } }}
                    image={image}
                    title="face card"
                />
                <CardContent>
                    <Typography gutterBottom={true} variant="h6" component="div" align="center">{name}</Typography>
                    <div className={styles.cardContent}><b>Major</b> {major}</div>
                    <div className={styles.cardContent}><b>Hometown</b> {hometown}</div>
                    {grad && <div className={styles.cardContent}><b>Expected Graduation</b> {grad}</div>}
                </CardContent>
            </Card>
        </div>
    )
}

export default TeamMember;