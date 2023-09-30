import styles from "./Contact.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/mcgill.jpeg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import Footer from "../../components/Footer/Footer";
import {Link} from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";


const Contact = () => {
    return (
        <div>
            <NavBar />
            <Landing
                title="Unlocking Opportunities, One Message at a Time"
                subtitle="Have questions or inquiries? We’re just a click away!
                Whether you're seeking information, assistance, or simply want to connect, feel free to reach out to us."
                image={landingImage} />
            <div className={styles.socialsContainer}>
                <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                    <div className={styles.socialsTitle}>Through<br/>Social Medias</div>
                </ScrollAnimation>
                <div className={styles.socialsIconContainer}>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <Link href="https://www.facebook.com/mcgillventuresclub" target="_blank" rel="noreferrer">
                            <FacebookIcon sx={{display: "flex", color: "white", height: {xs: "75px", sm: "125px"}, width: {xs: "75px", sm: "125px"}, padding: {xs:"10px", sm:"40px"}, "&:hover": {animation: "bounce 0.75s"}}}/>
                        </Link>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <Link href="https://www.instagram.com/mcgillvc/" target="_blank" rel="noreferrer">
                            <InstagramIcon sx={{display: "flex", color: "white", height: {xs: "75px", sm: "125px"}, width: {xs: "75px", sm: "125px"}, padding: {xs:"10px", sm:"40px"}, "&:hover": {animation: "bounce 0.75s"}}}/>
                        </Link>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <Link href="https://www.linkedin.com/company/mcgill-ventures/" target="_blank" rel="noreferrer">
                            <LinkedinIcon sx={{display: "flex", color: "white", height: {xs: "75px", sm: "125px"}, width: {xs: "75px", sm: "125px"}, padding: {xs:"10px", sm:"40px"}, "&:hover": {animation: "bounce 0.75s"}}}/>
                        </Link>
                    </ScrollAnimation>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Contact;