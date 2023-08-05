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
        <div>
            <NavBar />
            <Landing
                title="Fueling Ideas, Igniting Connections"
                subtitle="We curate a diverse range of events to cather to the thirst for venture capital knowledge."
                image={landingImage}
            />
            <div className={styles.eventsContent}>
                {/* Upcoming Events */}
                <div className={styles.eventsHeader}>Upcoming Events</div>
                <Event
                    image={eventImage1}
                    title="Meet our Speaker: John Smith!"
                    date="Friday October 18th, 2023"
                    location="Bronfman Building, 202"
                    description="Join us for an exclusive event, as we delve into the world of venture capital and private equity with one of the industry's
                    esteemed professionals. John Smith, a renowned figure in the field, brings a wealth of expertise and insights to the table. During this engaging session,
                    attendees will have the unique opportunity to learn from his vast experience, gain valuable industry knowledge, and explore the latest trends shaping the
                    venture capital landscape. Whether you're an aspiring venture capitalist, an entrepreneur looking for funding, or simply curious about the inner workings
                    of this dynamic industry, this event promises to be an enriching and enlightening experience. Don't miss this chance to network with like-minded individuals,
                    expand your horizons, and be inspired by John Smith's journey and invaluable advice. Secure your spot now and embark on a journey of discovery with us!"
                />
                <Event
                    title="Uncovering the Future of Tech Startups"
                    date="Friday December 1st, 2023"
                    location="Bronfman Building, 201"
                    description="Get ready to embark on an exciting journey into the world of tech startups at our event.Join us as we bring together a panel of visionary
                    entrepreneurs, seasoned investors, and industry experts to share their insights and perspectives on the ever-evolving tech startup ecosystem.
                    From groundbreaking innovations to navigating funding challenges, our esteemed panelists will shed light on the secrets to success in this dynamic landscape.
                    Discover the latest trends, emerging technologies, and disruptive business models that are reshaping industries. Engage in lively discussions, ask burning questions,
                    and gain a deeper understanding of the strategies that drive successful tech startups. Whether you're an aspiring entrepreneur, a seasoned investor, or
                    simply fascinated by the power of technology and innovation, this event promises to be a source of inspiration and knowledge.
                    Join us for an evening of networking, collaboration, and boundless possibilities. Connect with fellow enthusiasts, industry pioneers, and potential partners,
                    as we collectively explore the future of tech startups and the transformative impact they have on our world. Don't miss this chance to gain unparalleled
                    insights and fuel your passion for innovation. Reserve your spot now and be part of this captivating exploration into the future of tech startups!"
                    image={eventImage1}
                />

                {/* Past Events */}
                <div className={styles.eventsHeader}>Past Events</div>
                <Event
                    image={pastEventImage1}
                    title="Breaking Down Venture Capital"
                    date="Wednesday April 6th, 2022"
                    location="Thomson House, 3650 Mc Tavish, Montreal"
                    description={pastEventDescription1}
                />
            </div>
            <Footer />
        </div>
    )
}

export default Events;