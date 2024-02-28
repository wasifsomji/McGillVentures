import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/mcgill.jpeg";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Events.module.scss";
import eventImage1 from "../../assets/events/no_poster_event.png";
import Event from "../../components/Event/Event";
import Footer from "../../components/Footer/Footer";
import pastEventImage1 from "../../assets/events/breaking_down_venture_capital.jpg"; 
import ScrollAnimation from "react-animate-on-scroll";

const pastEventDescription1 =
    <div>
        Join us for a live Q&A session about life, strategies, and work in venture capital, hosted by 3 fantastic venture capitalists from Montreal including...
        <ul>
            <li><b>Scott Loong</b>: Partner, Panache Ventures</li>
            <li><b>Antony Acciarri</b>: Angel Investor, Anges Quebec</li>
            <li><b>Matthew Rosenberger</b>: VP Finance, Amplitude Ventures</li>
        </ul>
    </div>

const Events = () => {
    return (
        <div>
            <div className={styles.eventsContainer}>
                <NavBar />
                <Landing
                    title="Fueling Ideas, Igniting Connections"
                    subtitle="We curate a diverse range of events to cather to the thirst for venture capital knowledge."
                    image={landingImage}
                />
                {/* Upcoming Events */}
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <div className={styles.eventsHeader}>Upcoming Events</div>
                </ScrollAnimation>
                <div className={styles.eventsContent}>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            image={eventImage1}
                            title="The Scarlet Pitch"
                            date="March 2024"
                            location="TBA"
                            description="Join us for this Dragons’ Den- and Shark Tank- style event that aims to:
                            1) Connect emerging Montreal startups with other startup/venture capital ecosystem players, and
                            2) Inspire students to engage with their local tech ecosystem, either from the entrepreneurial or VC side of the table."
                            link="/"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            title="Startup Showcase (2nd Ed.)"
                            date="October 2024"
                            location="TBA"
                            description="Seize this exclusive opportunity to meet and learn from local entrepreneurs
                            and venture capitalists. Discover the missions, product differentiators, and future plans
                            of the startup founders, as well as the investment perspectives and roles of the venture capitalists."
                            image={eventImage1}
                            link="/"
                        />
                    </ScrollAnimation>
                </div>

                {/* Past Events */}
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <div className={styles.eventsHeader}>Past Events</div>
                </ScrollAnimation>
                <div className={styles.eventsContent}>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            image={pastEventImage1}
                            title="Breaking Down Venture Capital"
                            date="Wednesday April 6th, 2022"
                            location="Thomson House, 3650 Mc Tavish, Montreal"
                            description={pastEventDescription1}
                            link="https://www.facebook.com/events/520995496082804?ref=newsfeed"
                        />
                    </ScrollAnimation>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events;