import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/events/landing_events.png";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Events.module.scss";
import futureEvent from "../../assets/events/navigating_ai.jpg";
import futureEvent1 from "../../assets/events/intro_vc_panel.jpg";
import futureEvent2 from "../../assets/events/ventures-summit.jpg";
import eventImage2 from "../../assets/events/venture_capital_and_beyond.png";
import Event from "../../components/Event/Event";
import Footer from "../../components/Footer/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import scarletPitch from "../../assets/events/scarlet_pitch_2025.jpeg";
import northstar from "../../assets/events/north_star.png";
import watchmojo from "../../assets/events/watch_mojo.jpg";

import highlight2 from "../../assets/event_highlights_24-25/img3.jpg";
import higlight1 from "../../assets/event_highlights_24-25/img1.jpg";
import highlight3 from "../../assets/event_highlights_24-25/img4.jpg";

const Events = () => {
    return (
        <div>
            <div className={styles.eventsContainer}>
                <NavBar />
                <Landing
                    title="Fueling Ideas, Igniting Connections"
                    subtitle="We curate a diverse range of events to cater to the thirst for venture capital knowledge."
                    image={landingImage}
                />
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <div className={styles.eventsHeader}>Upcoming Events</div>
                </ScrollAnimation>
                <div className={styles.eventsContent}>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            image={scarletPitch}
                            title="The Scarlet Pitch"
                            date="March 27, 2025, 5:00 - 9:00 PM"
                            location="EY Offices, 23rd Floor"
                            description="Join us for this Dragons’ Den- and Shark Tank- style event that aims to:
                            1) Connect emerging Montreal startups with other startup/venture capital ecosystem players, and
                            2) Inspire students to engage with their local tech ecosystem, either from the entrepreneurial or VC side of the table.
                            Featuring one of the actual Dragons from the Canadian TV show Dragons' Den, this event will be a great opportunity to learn from the best and network with other like-minded individuals."
                            link="https://lu.ma/p2zi21ru"
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
                            title="MVC x MES x McMillan Present: A Top 10 Event You Can’t Miss!"
                            date="February 6, 2025"
                            location="1000 Sherbrooke West"
                            image={watchmojo}
                            link="/"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            title="North Star: Inspiring Entrepeneurs"
                            date="Jan 23, 2025"
                            location="HEC Montréal"
                            image={northstar}
                            link="/"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            title="Bolt x McGill VC: Intro to VC Panel"
                            date="November 21, 2024"
                            location="Brofman Building, Room 340"
                            image={futureEvent1}
                            link="/"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            title="Navigating Responsibility in AI Startups"
                            date="November 28, 2024"
                            location="Brofman Building"
                            image={futureEvent}
                            link="/"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            title="Ventures Summit"
                            date="November 29, 2024"
                            location="Espace CDPQ"
                            image={futureEvent2}
                            link="/"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            title="Venture Capital and Beyond"
                            date="September 19, 2024: 5:30 - 7:30 PM"
                            location="Bronfman Building, Room 151"
                            description="Join us for an interactive presentation by Professor Jorge Torres from Yale University, where you'll learn the 
                            essentials of funding a startup, building strong relationships with venture capitalists, and understanding a VC's perspective. 
                            This event is perfect for aspiring entrepreneurs and anyone interested in the startup ecosystem."
                            image={eventImage2}
                            link="/"
                        />
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <div className={styles.eventsHeader}>Highlights '24-25</div>
                    </ScrollAnimation>
                    <div className={styles.highlightsContainer}>
                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                            <img src={higlight1} alt="Event Highlight 1" className={styles.highlightImage} loading="lazy" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                            <img src={highlight2} alt="Event Highlight 2" className={styles.highlightImage} loading="lazy" />
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                            <img src={highlight3} alt="Event Highlight 3" className={styles.highlightImage} loading="lazy" />
                        </ScrollAnimation>
                        {/* Add more images as needed */}
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events;