import React from 'react';
import '@fontsource/roboto/700.css';
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/home/landing_home.png";
import coverImage from "../../assets/mcgill.jpeg";
import Footer from "../../components/Footer/Footer";
import home1 from "../../assets/home/home1.png";
import home2 from "../../assets/home/home2.png";
import home3 from "../../assets/home/home3.png";
import ScrollAnimation from "react-animate-on-scroll";
import aqcCapital from "../../assets/partners/aqc_capital.png";
import blueVisionCapital from "../../assets/partners/blue_vision_capital.png";
import cycleCapital from "../../assets/partners/cycle_capital.png";
import dobsonCentre from "../../assets/partners/dobson_centre.png";
import frontRowVentures from "../../assets/partners/front_row_ventures.png";
import inovia from "../../assets/partners/inovia.png";
import panacheVentures from "../../assets/partners/panache_ventures.png";
import penderVentures from "../../assets/partners/pender_ventures.png";
import triptyqCapital from "../../assets/partners/triptyq_capital.png";
import telus from "../../assets/partners/Telus-Logo-White.png";
import deloitte from "../../assets/partners/Deloitte-Black-Logo.png";
import {Card, CardContent, Stack, Typography} from "@mui/material";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Landing title="Building Bridges to Tomorrow’s Innovators"
                     subtitle="At McGill Ventures, we’re igniting tomorrow’s Canadian entrepreneurs and innovation investors."
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
                <LazyLoadImage effect="blur" src={coverImage} className={styles.coverImage} alt="home cover"/>
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
                        <LazyLoadImage effect="blur" src={home1} className={styles.whoWeAreImage} alt="who we are"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <LazyLoadImage effect="blur" src className={styles.whoWeAreImage} alt="who we are"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <LazyLoadImage effect="blur" src={home3} className={styles.whoWeAreImage} alt="who we are"/>
                    </ScrollAnimation>
                </div>
            <Stack
                direction="column"
                display="flex"
                alignItems="center"
                paddingTop="125px"
            >
                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                    <div className={styles.introTitle}>Firms We've Worked With</div>
                </ScrollAnimation>
                <Stack display="flex" direction="row" flexWrap= "wrap" justifyContent="center">
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <LazyLoadImage effect="blur" src={triptyqCapital} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <LazyLoadImage effect="blur" src={panacheVentures} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <LazyLoadImage effect="blur" src={inovia} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <LazyLoadImage effect="blur" src={penderVentures} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <LazyLoadImage effect="blur" src={dobsonCentre} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <LazyLoadImage effect="blur" src={blueVisionCapital} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <img src={aqcCapital} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <img src={cycleCapital} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <img src={telus} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                        <img src={deloitte} className={styles.partnerImage} alt="logo"/>
                    </ScrollAnimation>
                </Stack>
            </Stack>

            </div>
                
            <Footer />
        </div>
    )
}

export default Home;