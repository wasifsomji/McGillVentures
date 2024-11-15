import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/events/landing_events.png";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Events.module.scss";
import futureEvent from "../../assets/events/navigating_ai.jpg";
import futureEvent1 from "../../assets/events/intro_vc_panel.jpg";
import eventImage2 from "../../assets/events/venture_capital_and_beyond.png";
import Event from "../../components/Event/Event";
import Footer from "../../components/Footer/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import scarlettPitch1 from "../../assets/events/Scarlet_Pitch_img.png";

import highlight2 from "../../assets/event_highlights_24-25/img3.jpg";
import higlight1 from "../../assets/event_highlights_24-25/img1.jpg";
import highlight3 from "../../assets/event_highlights_24-25/img4.jpg";

// const Description_startupShowcaseWithVCInvestors =
//     <div>
//         McGill Ventures is excited to announce its first event of the year at the historic Thomson House venue: “Startup Showcase with VC Investors” 🚀
//         <br /><br />
//         Seize this exclusive opportunity to meet and learn from local entrepreneurs and venture capitalists. Discover the missions, product differentiators, and future plans of the startup founders, as well as the investment perspectives and roles of the venture capitalists 📈
//         <br /><br />
//         Tickets are limited, so secure yours now! Register through the link in our bio or at:
//         🔗 https://startupshowcase.eventbrite.com/
//         <br /><br />
//         <b>WHAT TO EXPECT</b><br />
//         🌟 Network with ambitious individuals to jumpstart your career in business/finance.
//         <br />🧠 Gain tangible insights into the realms of entrepreneurship/venture capital through presentations.
//         <br />🥪 Enjoy free appetizers and bites, included with your ticket.
//         <br /><br />
//         <b>WHAT TO KNOW</b><br />
//         👔 Business Casual dress code.
//         <br />📅 Friday, October 27th, 1:30 PM to 4:00 PM.
//         <br />📍 PGSS Inc. Thomson House (Ballroom, 2nd Floor), 3650 McTavish St, Montreal.
//         <br /><br />
//         See you soon! 👋
//     </div>

// const Description_vcPanelAndNetworkingEventAtEspaceCDPQ =
//   <div>
//     McGill Ventures is thrilled to announce an event downtown at the dynamic Espace CDPQ: “Venture Capitalist Panel & Networking at Espace CDPQ: Innovation in Media & Entertainment” 🚀
//     <br /><br />
//     The panel discussion will focus on the current landscape of venture capital and innovation in the media & entertainment industry 📈 It will feature VCs from Triptyq Capital and Panache Ventures, as well as the CTO/CIO of La Presse 📰 This is also a fantastic opportunity to visit Espace CDPQ, Canada's largest venture capital community 🏢
//     <br /><br />
//     Tickets are extremely limited and registration ends in a few days - don't miss out! Secure your spot now via the link in our bio or at:
//     🔗 https://bit.ly/vcpanelcdpq
//     <br /><br />
//     <b>WHAT TO EXPECT</b><br />
//     🌟 Expand your professional network within the venture capital/investment ecosystem and connect with like-minded students.
//     🧠 Gain tangible insights into the realms of venture capital, entrepreneurship, and media & entertainment.
//     🥤 Enjoy free snacks and beverages, included with your ticket.
//     <br /><br />
//     <b>WHAT TO KNOW</b><br />
//     👔 Business casual dress code.
//     📅 Friday, November 10th, 2:00 - 5:00 PM.
//     📍 3, Place Ville Marie, bureau 12350 (Salle CDPQ at Espace CDPQ), Montreal, QC H3B 0E7.
//     <br /><br />
//     See you there! 👋
//   </div>

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
                Upcoming Events
                <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                    <div className={styles.eventsHeader}>Upcoming Events</div>
                </ScrollAnimation>
                <div className={styles.eventsContent}>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            title="Bolt x McGill VC: Intro to VC Panel"
                            date="November 21, 2024"
                            location="Brofman Building, Room 340"
                            image={futureEvent1}
                            link="https://www.zeffy.com/en-CA/ticketing/bolt-x-mcgill-ventures-intro-to-vc-panel?fbclid=IwY2xjawGjJwhleHRuA2FlbQIxMQABHbiZdT4PlrJbjH78_ubY9va-Z1_V2i_A3uehIZOmt19MD_KwpHI1haR-KQ_aem_6GvjDd9e6wbj5eR9WxIEXw"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration="1.5" animateOnce="true">
                        <Event
                            title="Navigating Responsibility in AI Startups"
                            date="November 28, 2024"
                            location="Brofman Building"
                            image={futureEvent}
                            link="https://www.eventbrite.com/e/ethics-of-innovation-navigating-responsiblity-in-ai-driven-startups-tickets-1073146924339?aff=oddtdtcreator"
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