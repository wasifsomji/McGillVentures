import React from 'react';
import '@fontsource/roboto/700.css';
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.scss"
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/mcgill.jpeg";
import coverImage from "../../assets/mcgill.jpeg";
import Footer from "../../components/Footer/Footer";
import home1 from "../../assets/home/home1.jpeg";
import home2 from "../../assets/home/home2.jpeg";
import home3 from "../../assets/home/home3.jpeg";
import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Landing title="Building Bridges to Tomorrow’s Innovators"
                     subtitle="We aim to educate students on Venture Capital and Private Equity."
                     image={landingImage}/>
            <div className={styles.quoteContainer}>
                <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                    <div className={styles.quoteText}>
                        “We need to start to talk about money in ways that dethrone it and make it subject to human ethics and standards of love and decency.”
                    </div>
                    <div className={styles.quoteAuthor}>
                        — Joel Solomon, The Clean Money Revolution: Reinventing Power, Purpose and Capitalism
                    </div>
                </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeIn" duration="2">
                <img src={coverImage} className={styles.coverImage} alt="home cover"/>
            </ScrollAnimation>
            <div className={styles.whoWeAreContainer}>
                <div className={styles.titleText}>
                    <div className={styles.whoWeAreTitle}>
                        <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                            Who We Are
                        </ScrollAnimation>
                    </div>
                    <div className={styles.whoWeAreText}>
                        <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                        Founded in 2020, McGill Ventures is a dynamic student-run organization based in Montreal, Quebec.
                        Comprised of McGill students passionate about venture capital and private equity, our club offers a supportive community and valuable opportunities for learning and networking.
                        If you are interested in joining our club, collaborating on projects, or learning more about the venture capital and private equity landscape, we encourage you to reach out to us.
                        McGill Ventures looks forward to connecting with you and supporting your journey in this exciting field.
                        </ScrollAnimation>
                    </div>
                </div>
                <div className={styles.titleText}>
                    <div className={styles.whoWeAreTitle}>
                        <ScrollAnimation animateIn="slideInLeft" animateOnce="true">
                            What We Do
                        </ScrollAnimation>
                    </div>
                    <div className={styles.whoWeAreText}>
                        <ScrollAnimation animateIn="slideInRight" animateOnce="true">
                        We aim to educate students on Venture Capital and Private Equity, providing a dynamic platform for learning, networking, and exploring the ever-evolving landscape of investment opportunities.
                        Through engaging events, industry insights, and hands-on experiences, we empower aspiring investors to navigate the realm of innovation, fostering an ecosystem where bold ideas thrive and promising ventures take flight.
                        Join us as we bridge the gap between academia and entrepreneurship, unlocking a world of possibilities for tomorrow's visionary leaders.
                        </ScrollAnimation>
                    </div>
                </div>
                <div className={styles.whoWeAreImagesContainer}>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <img src={home1} className={styles.whoWeAreImage} alt="who we are"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <img src={home2} className={styles.whoWeAreImage} alt="who we are"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <img src={home3} className={styles.whoWeAreImage} alt="who we are"/>
                    </ScrollAnimation>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;