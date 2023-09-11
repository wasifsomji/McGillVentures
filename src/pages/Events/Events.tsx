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
                    title="Meet our Speaker: John Smith!"
                    date="Friday October 18th, 2023"
                    location="Bronfman Building, 202"
                    description="Join us for an exclusive event, as we delve into the world of venture capital and private equity with one of the industry's
                    esteemed professionals. John Smith, a renowned figure in the field, brings a wealth of expertise and insights to the table. During this engaging session,
                    attendees will have the unique opportunity to learn from his vast experience, gain valuable industry knowledge, and explore the latest trends shaping the
                    venture capital landscape."
                    link="/"
                />
                <Event
                    title="Uncovering the Future of Tech Startups"
                    date="Friday December 1st, 2023"
                    location="Bronfman Building, 201"
                    description="Get ready to embark on an exciting journey into the world of tech startups at our event.Join us as we bring together a panel of visionary
                    entrepreneurs, seasoned investors, and industry experts to share their insights and perspectives on the ever-evolving tech startup ecosystem.
                    From groundbreaking innovations to navigating funding challenges, our esteemed panelists will shed light on the secrets to success in this dynamic landscape.
                    Discover the latest trends, emerging technologies, and disruptive business models that are reshaping industries. "
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