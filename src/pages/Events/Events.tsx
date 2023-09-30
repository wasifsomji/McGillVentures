import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/mcgill.jpeg";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Events.module.scss";
import eventImage1 from "../../assets/mcgill.jpeg";
import Event from "../../components/Event/Event";
import Footer from "../../components/Footer/Footer";
import pastEventImage1 from "../../assets/events/BreakingDownVentureCapital.jpeg"

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
        <div className={styles.eventsContainer}>
            <NavBar />
            <Landing
                title="Fueling Ideas, Igniting Connections"
                subtitle="We curate a diverse range of events to cather to the thirst for venture capital knowledge."
                image={landingImage}
            />
            {/* Upcoming Events */}
            <div className={styles.eventsHeader}>Upcoming Events</div>
            <div className={styles.eventsContent}>
                <Event
                    image={eventImage1}
                    title="A McGill Ventures Welcome and Workshop: Term Sheets and Valuation"
                    date="TBA"
                    location="TBA"
                    description="Join our club for a welcome session and interactive startup workshop. Discover the McGill ventures team and watch them present the upcoming programs,
                    workshops, office tours, and networking events. In the featured workshop, learn about term sheets, valuation and startup evaluation. Gain insights into funding,
                    negotiation, and assessing financial health. Connect with fellow members to kickstart your VC journey.
                    Join our club for a welcome session and interactive startup workshop. Discover the McGill ventures team and watch them present the upcoming programs,
                    workshops, office tours, and networking events. In the featured workshop, learn about term sheets, valuation and startup evaluation. Gain insights into funding,
                    negotiation, and assessing financial health. Connect with fellow members to kickstart your VC journey."
                    link="/"
                />
                <Event
                    title="Startup Showcase and Networking Event"
                    date="TBA"
                    location="TBA"
                    description="Join McGill Ventures for a dynamic startup showcase and networking event. Gain insights into startups, learn from successful entrepreneurs,
                    and expand your network."
                    image={eventImage1}
                    link="/"
                />
                <Event
                    title="Panel with McGill's VC Professionals"
                    date="TBA"
                    location="TBA"
                    description="Join McGill Ventures for an exclusive networking event, connecting students with accomplished alumni in venture capital, providing invaluable
                    insights into career paths, experiences, latest trends, and best practices, while fostering an interactive platform for students to seek advice, ask
                    questions, and build valuable relationships with industry experts."
                    image={eventImage1}
                    link="/"
                />
            </div>

            {/* Past Events */}
            <div className={styles.eventsHeader}>Past Events</div>
            <div className={styles.eventsContent}>
                <Event
                    image={pastEventImage1}
                    title="Breaking Down Venture Capital"
                    date="Wednesday April 6th, 2022"
                    location="Thomson House, 3650 Mc Tavish, Montreal"
                    description={pastEventDescription1}
                    link="https://www.facebook.com/events/520995496082804?ref=newsfeed"
                />
            </div>
            <Footer />
        </div>
    )
}

export default Events;