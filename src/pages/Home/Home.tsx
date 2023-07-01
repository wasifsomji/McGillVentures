import React from 'react';
import '@fontsource/roboto/700.css';
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Home.module.scss"
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/mcgill.jpeg";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Landing title="Building Bridges to Tomorrow’s Innovators"
                     subtitle="We aim to educate students on Venture Capital and Private Equity."
                     image={landingImage}/>
        </div>
    )
}

export default Home;