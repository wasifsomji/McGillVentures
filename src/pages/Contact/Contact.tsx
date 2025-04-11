import styles from "./Contact.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/contact/landingContact.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import Footer from "../../components/Footer/Footer";
import { Link, TextField, Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
    return (
        <div>
            <NavBar />
            <Landing
                title="Unlocking Opportunities, One Message at a Time"
                subtitle="Have questions or inquiries? We're just a click away!
                Whether you're seeking information, assistance, or simply want to connect, feel free to reach out to us."
                image={landingImage} />
            
            {/* Newsletter Signup Component */}
            <div className={styles.newsletterContainer}>
                <div className={styles.newsletterContent}>
                    <div className={styles.newsletterTextContent}>
                        <h1 className={styles.newsletterTitle}>
                            Sign up for the McGill <span className={styles.venturesText}>Ventures</span> <span className={styles.handwrittenText}>Newsletter</span>
                        </h1>
                        <p className={styles.newsletterDescription}>
                            Join our year-long newsletter and get exclusive insights delivered straight 
                            to your inbox ~ twice a month.
                        </p>
                        <p className={styles.newsletterBenefit}>
                            <strong>Stay up to date</strong> with club news and events, articles about VC news and
                            deals, financial and macroeconomic insights, Montreal-based VC
                            networking opportunities, and exclusive job postings.
                        </p>
                    </div>

                    <div className={styles.signupForm}>
                        <TextField 
                            placeholder="Your email" 
                            variant="outlined" 
                            className={styles.emailInput}
                        />
                        <Button 
                            variant="contained" 
                            className={styles.subscribeButton}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
                <div className={styles.newsletterImageContainer}>
                    {/* Images will be displayed here using background images in CSS */}
                </div>
            </div>

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