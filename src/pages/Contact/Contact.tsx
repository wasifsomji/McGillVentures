import styles from "./Contact.module.scss";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/mcgill.jpeg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import Footer from "../../components/Footer/Footer";
import {Link} from "@mui/material";


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
                <div className={styles.socialsTitle}>Through<br/>Social Medias</div>
                <div className={styles.socialsIconContainer}>
                    <Link href="https://www.facebook.com/mcgillventuresclub" target="_blank" rel="noreferrer">
                        <FacebookIcon sx={{display: "flex", color: "white", height: {xs: "75px", sm: "125px"}, width: {xs: "75px", sm: "125px"}, padding: {xs:"10px", sm:"40px"}}}/>
                    </Link>
                    <Link href="https://www.instagram.com/mcgillvc/" target="_blank" rel="noreferrer">
                        <InstagramIcon sx={{display: "flex", color: "white", height: {xs: "75px", sm: "125px"}, width: {xs: "75px", sm: "125px"}, padding: {xs:"10px", sm:"40px"}}}/>
                    </Link>
                    <Link href="https://www.linkedin.com/company/mcgill-ventures/" target="_blank" rel="noreferrer">
                        <LinkedinIcon sx={{display: "flex", color: "white", height: {xs: "75px", sm: "125px"}, width: {xs: "75px", sm: "125px"}, padding: {xs:"10px", sm:"40px"}}}/>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Contact;