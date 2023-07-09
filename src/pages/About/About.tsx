import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/mcgill.jpeg";
import {Button, ButtonGroup} from "@mui/material";
import OurTeam from "./Sections/OurTeam/OurTeam";
import styles from "./About.module.scss";
import AnalystProgram from "./Sections/AnalystProgram/AnalystProgram";
import Footer from "../../components/Footer/Footer";


const About = () => {

    function displayContent(myID: string) {

        const content = ["ourTeam", "ourProgram"];
        const idx = content.indexOf(myID);
        const ourTeam = document.getElementById("ourTeam")!;
        const ourProgram = document.getElementById("ourProgram")!;

        if (idx === 0) {
            ourTeam.style.display = "block";
            ourProgram.style.display = "none";
        }
        else {
            ourProgram.style.display = "block";
            ourTeam.style.display = "none";
        }
    }

    return (
        <div>
            <NavBar />
            <Landing title={"Collaborating Minds,\nVenture Pioneers"}
                     subtitle={"Our team consists of talented and knowledgeable individuals ready to drive " +
                         "innovation and fuel entrepreneurial success through our Analyst Program."}
                     image={landingImage} />

            <div className={styles.buttonsContainer}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" className={styles.buttonGroup}>
                    <Button
                        sx={{
                            color: "#FFF",
                            fontSize: "16px",
                            fontFamily: "Helvetica Neue",
                            fontWeight: 700,
                            textTransform: 'capitalize',
                            padding: '10px 20px 10px 20px'
                        }}
                        className={styles.displayOurTeam}
                        onClick={() => displayContent("ourTeam")}
                    >Our Team</Button>
                    <Button
                        sx={{
                            color: "#FFF",
                            fontSize: "16px",
                            fontFamily: "Helvetica Neue",
                            fontWeight: 700,
                            textTransform: 'capitalize',
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '15px',
                            padding: '10px 20px 10px 20px'
                        }}
                        className={styles.displayOurProgram}
                        onClick={() => displayContent("ourProgram")}
                    ><div>Our Analyst</div><div>Program</div></Button>
                </ButtonGroup>
            </div>

            <div id="ourTeam">
                <OurTeam />
            </div>
            <div id="ourProgram">
                <AnalystProgram />
            </div>

            <Footer/>
        </div>
    )
}

export default About;