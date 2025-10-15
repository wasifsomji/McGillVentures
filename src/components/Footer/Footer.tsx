import styles from "./Footer.module.scss"
import { Link } from 'react-router-dom'; 
import baseStyle from "../../styles/Base.module.scss";
import logo from "../../assets/logo_white.png";
import {Stack, Typography} from "@mui/material";

const Footer = () => {
    return (
        <div className={styles.footerBackground}>
            <div className={styles.rightLinks}>
                <div className={styles.linksContainer}>
                    <div className={styles.linksTitle}>Quick Links</div>
                    <a className={styles.linksText} href="/">Home</a>
                    <Link to="/about" className={styles.linksText}>About</Link>
                    <Link to="/events" className={styles.linksText}>Events</Link>
                    <Link to="/contact" className={styles.linksText}>Contact</Link>
                </div>
                <div className={styles.linksContainer}>
                    <div className={styles.linksTitle}>Follow Us</div>
                    <a className={styles.linksText} href="https://www.facebook.com/mcgillventuresclub" target="_blank" rel="noreferrer">Facebook</a>
                    <a className={styles.linksText} href="https://www.instagram.com/mcgillvc/" target="_blank" rel="noreferrer">Instagram</a>
                    <a className={styles.linksText} href="https://www.linkedin.com/company/mcgill-ventures/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className={styles.linksText} href="/" target="_blank" rel="noreferrer">Website</a>
                </div>
            </div>

            <Stack className={styles.copyrightsContainer}>
                <img src={logo} className={baseStyle.UnicornLogo} alt="Company Logo"/>
                <Typography
                    sx={{
                    mr: 2,
                    display: 'flex',
                    fontFamily: 'Helvetica Neue',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: { xs: '12px', md: '16px' }}}
                >© McGill Ventures 2025</Typography>
                <Typography
                    sx={{
                        mr: 2,
                        display: 'flex',
                        fontFamily: 'Helvetica Neue',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: { xs: '12px', md: '16px' },
                        textAlign: {xs: 'center'}}}
                >Proudly part of McGill’s Management Undergraduate Society</Typography>
            </Stack>
        </div>
    )
}

export default Footer;