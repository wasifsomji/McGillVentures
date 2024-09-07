import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/events/landing_events.png";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Events.module.scss";
import eventImage1 from "../../assets/events/no_poster_event.png";
import eventImage2 from "../../assets/events/venture_capital_and_beyond.png";
import Event from "../../components/Event/Event";
import Footer from "../../components/Footer/Footer";
import pastEventImage1 from "../../assets/events/new_breaking_down.jpg"; 
import startupShowcaseWithVCInvestors from "../../assets/events/startup_showcase_with_vc_investors.png";
import vcPanelAndNetworkingEventAtEspaceCDPQ from "../../assets/events/vc_panel_and_networking_event_at_espace_cdpq.png";
import ScrollAnimation from "react-animate-on-scroll";
import scarlettPitch1 from "../../assets/events/Scarlet_Pitch_img.png"; 

const Description_startupShowcaseWithVCInvestors =
    <div>
        McGill Ventures is excited to announce its first event of the year at the historic Thomson House venue: “Startup Showcase with VC Investors” 🚀
        <br /><br />
        Seize this exclusive opportunity to meet and learn from local entrepreneurs and venture capitalists. Discover the missions, product differentiators, and future plans of the startup founders, as well as the investment perspectives and roles of the venture capitalists 📈
        <br /><br />
        Tickets are limited, so secure yours now! Register through the link in our bio or at:
        🔗 https://startupshowcase.eventbrite.com/
        <br /><br />
        <b>WHAT TO EXPECT</b><br />
        🌟 Network with ambitious individuals to jumpstart your career in business/finance.
        <br />🧠 Gain tangible insights into the realms of entrepreneurship/venture capital through presentations.
        <br />🥪 Enjoy free appetizers and bites, included with your ticket.
        <br /><br />
        <b>WHAT TO KNOW</b><br />
        👔 Business Casual dress code.
        <br />📅 Friday, October 27th, 1:30 PM to 4:00 PM.
        <br />📍 PGSS Inc. Thomson House (Ballroom, 2nd Floor), 3650 McTavish St, Montreal.
        <br /><br />
        See you soon! 👋
    </div>

const Description_vcPanelAndNetworkingEventAtEspaceCDPQ =
  <div>
    McGill Ventures is thrilled to announce an event downtown at the dynamic Espace CDPQ: “Venture Capitalist Panel & Networking at Espace CDPQ: Innovation in Media & Entertainment” 🚀
    <br /><br />
    The panel discussion will focus on the current landscape of venture capital and innovation in the media & entertainment industry 📈 It will feature VCs from Triptyq Capital and Panache Ventures, as well as the CTO/CIO of La Presse 📰 This is also a fantastic opportunity to visit Espace CDPQ, Canada's largest venture capital community 🏢
    <br /><br />
    Tickets are extremely limited and registration ends in a few days - don't miss out! Secure your spot now via the link in our bio or at:
    🔗 https://bit.ly/vcpanelcdpq
    <br /><br />
    <b>WHAT TO EXPECT</b><br />
    🌟 Expand your professional network within the venture capital/investment ecosystem and connect with like-minded students.
    🧠 Gain tangible insights into the realms of venture capital, entrepreneurship, and media & entertainment.
    🥤 Enjoy free snacks and beverages, included with your ticket.
    <br /><br />
    <b>WHAT TO KNOW</b><br />
    👔 Business casual dress code.
    📅 Friday, November 10th, 2:00 - 5:00 PM.
    📍 3, Place Ville Marie, bureau 12350 (Salle CDPQ at Espace CDPQ), Montreal, QC H3B 0E7.
    <br /><br />
    See you there! 👋
  </div>

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
                {/* Upcoming Events */}
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <div className={styles.eventsHeader}>Upcoming Events</div>
                </ScrollAnimation>
                <div className={styles.eventsContent}>
            
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            title="Venture Capital and Beyond"
                            date="September 19, 2024: 5:30 - 7:30 PM"
                            location="Bronfman Building, Room 151"
                            description="Join us for an interactive presentation by Professor Jorge Torres from Yale University, where you'll learn the 
                            essentials of funding a startup, building strong relationships with venture capitalists, and understanding a VC's perspective. 
                            This event is perfect for aspiring entrepreneurs and anyone interested in the startup ecosystem."
                            image={eventImage2}
                            link="https://lnkd.in/dbgNZQDx"
                        />
                    </ScrollAnimation>

                    {/* <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
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
                    </ScrollAnimation> */}
                </div>

                {/* Past Events */}
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <div className={styles.eventsHeader}>Past Events</div>
                </ScrollAnimation>
                <div className={styles.eventsContent}>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                            <Event
                                image={scarlettPitch1}
                                title="The Scarlet Pitch"
                                date="March 20, 2024"
                                location="Desjardins Lounge"
                                description="Join us for this Dragons’ Den- and Shark Tank- style event that aims to:
                                1) Connect emerging Montreal startups with other startup/venture capital ecosystem players, and
                                2) Inspire students to engage with their local tech ecosystem, either from the entrepreneurial or VC side of the table.
                                Featuring one of the actual Dragons from the Canadian TV show Dragons' Den, this event will be a great opportunity to learn from the best and network with other like-minded individuals."
                                link="http://scarletpitch.eventbrite.com"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            image={vcPanelAndNetworkingEventAtEspaceCDPQ}
                            title="VC Panel & Networking Event at Espace CDPQ"
                            date="November 10th 2023, 2:00 - 5:00 PM"
                            location="Salle CDPQ at Espace CDPQ"
                            description={Description_vcPanelAndNetworkingEventAtEspaceCDPQ}
                            link="https://www.instagram.com/p/CzMrksiOtOA/?img_index=1"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                      <Event
                        image={startupShowcaseWithVCInvestors}
                        title="Startup Showcase with VC Investors"
                        date="October 27th 2023, 1:30PM-4:00PM"
                        location="PGSS Inc. Thomson House (Ballroom, 2nd Floor), 3650 McTavish St"
                        description={Description_startupShowcaseWithVCInvestors}
                        link="https://www.instagram.com/p/CycEu1ytWA1/?img_index=1"
                      />
                    </ScrollAnimation>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events;