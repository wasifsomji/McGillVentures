import styles from "./Contact.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/contact/landingContact.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import Footer from "../../components/Footer/Footer";
import { Link, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { createClient } from '@supabase/supabase-js';
import { useState } from "react";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;

console.log('supabaseUrl:', supabaseUrl);
console.log('supabaseAnonKey:', supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Contact = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    // Modal state
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleModalClose = () => {
        setOpen(false);
        // If success, redirect to the given link
        if (success) {
            window.location.href = 'https://lu.ma/lcxg8gcr';
        }
    };

    const handleSubmit = async () => {
        if (!email) {
            setError('Please enter your email');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        try {
            const { data, error } = await supabase
                .from('newsletter')
                .insert([{ email }]);
            
            console.log('data:', data, 'error:', error);

            if (error) {
                setError('Error subscribing to the newsletter');
                setModalTitle('Subscription Error');
                setModalMessage('There was an error subscribing to the newsletter. Please try again.');
                setSuccess(false);
                setOpen(true);
            } else {
                setEmail('');
                setError('');
                setModalTitle('Subscribed Successfully!');
                setModalMessage('Thank you for subscribing to the newsletter. To confirm your subscription, please click "Continue" and follow payment instructions.');
                setSuccess(true);
                setOpen(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An unexpected error occurred');
            setModalTitle('Subscription Error');
            setModalMessage('An unexpected error occurred. Please try again.');
            setSuccess(false);
            setOpen(true);
        }
    };

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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Button 
                            variant="contained" 
                            onClick={handleSubmit}
                            className={styles.subscribeButton}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
                <div className={styles.newsletterImageContainer}>
                    {/* Images displayed via background image in CSS */}
                </div>
            </div>

            {/* Social Media Links */}
            <div className={styles.socialsContainer}>
                <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                    <div className={styles.socialsTitle}>Through<br/>Social Medias</div>
                </ScrollAnimation>
                <div className={styles.socialsIconContainer}>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <Link href="https://www.facebook.com/mcgillventuresclub" target="_blank" rel="noreferrer">
                            <FacebookIcon sx={{ display: "flex", color: "white", height: { xs: "75px", sm: "125px" }, width: { xs: "75px", sm: "125px" }, padding: { xs: "10px", sm: "40px" }, "&:hover": { animation: "bounce 0.75s" }}} />
                        </Link>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <Link href="https://www.instagram.com/mcgillvc/" target="_blank" rel="noreferrer">
                            <InstagramIcon sx={{ display: "flex", color: "white", height: { xs: "75px", sm: "125px" }, width: { xs: "75px", sm: "125px" }, padding: { xs: "10px", sm: "40px" }, "&:hover": { animation: "bounce 0.75s" }}} />
                        </Link>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <Link href="https://www.linkedin.com/company/mcgill-ventures/" target="_blank" rel="noreferrer">
                            <LinkedinIcon sx={{ display: "flex", color: "white", height: { xs: "75px", sm: "125px" }, width: { xs: "75px", sm: "125px" }, padding: { xs: "10px", sm: "40px" }, "&:hover": { animation: "bounce 0.75s" }}} />
                        </Link>
                    </ScrollAnimation>
                </div>
            </div>
            <Footer />

            {/* Modal for success / error messages */}
            <Dialog
                open={open}
                onClose={handleModalClose}
            >
                <DialogTitle>{modalTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {modalMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose} color="primary">
                        {success ? "Continue" : "Close"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default Contact;