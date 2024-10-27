import NavBar from "../../components/NavBar/NavBar";
import Landing from "../../components/Landing/Landing";
import landingImage from "../../assets/exec_headshots/landing_about.png";
import { Button, ButtonGroup } from "@mui/material";
import ExecTeam from "./Sections/ExecTeam/ExecTeam";
import styles from "./About.module.scss";
import AnalystTeam from "./Sections/AnalystTeam/AnalystTeam";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import DevTeam from "./Sections/DevTeam/DevTeam";

const About = () => {

    function displayContent(myID: string) {
        const content = ["ourTeam", "ourProgram", "ourDevTeam"];
        const idx = content.indexOf(myID);
        const ourTeam = document.getElementById("ourTeam")!;
        const ourProgram = document.getElementById("ourProgram")!;
        const ourDevTeam = document.getElementById("ourDevTeam")!;
        const ourTeamButton = document.getElementById("ourTeamButton")!;
        const ourProgramButton = document.getElementById("ourProgramButton")!;
        const ourDevTeamButton = document.getElementById("ourDevTeamButton")!;

        if (idx === 0) {
            ourTeam.style.display = "block";
            ourProgram.style.display = "none";
            ourDevTeam.style.display = "none";
            ourTeamButton.style.backgroundColor = "#370894";
            ourTeamButton.style.color = "white";
            ourProgramButton.style.backgroundColor = "white";
            ourProgramButton.style.color = "#370894";
            ourDevTeamButton.style.backgroundColor = "white";
            ourDevTeamButton.style.color = "#370894";
        } else if (idx === 1) {
            ourProgram.style.display = "block";
            ourTeam.style.display = "none";
            ourDevTeam.style.display = "none";
            ourProgramButton.style.backgroundColor = "#370894";
            ourProgramButton.style.color = "white";
            ourTeamButton.style.backgroundColor = "white";
            ourTeamButton.style.color = "#370894";
            ourDevTeamButton.style.backgroundColor = "white";
            ourDevTeamButton.style.color = "#370894";
        } else {
            ourDevTeam.style.display = "block";
            ourTeam.style.display = "none";
            ourProgram.style.display = "none";
            ourDevTeamButton.style.backgroundColor = "#370894";
            ourDevTeamButton.style.color = "white";
            ourTeamButton.style.backgroundColor = "white";
            ourTeamButton.style.color = "#370894";
            ourProgramButton.style.backgroundColor = "white";
            ourProgramButton.style.color = "#370894";
        }
    }

    useEffect(() => {
        displayContent("ourTeam");
    }, []);

    return (
        <div>
            <NavBar />
            <Landing
                title={"Collaborating Minds,\nVenture Pioneers"}
                subtitle={"Our team consists of talented and knowledgeable individuals ready to drive " +
                    "innovation and fuel entrepreneurial success through our Analyst Program."}
                image={landingImage}
            />

            <div className={styles.buttonsContainer}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" className={styles.buttonGroup}>
                    <Button
                        id="ourTeamButton"
                        sx={{
                            color: "#FFF",
                            fontSize: "16px",
                            fontFamily: "Helvetica Neue",
                            fontWeight: 700,
                            textTransform: 'capitalize',
                            padding: '10px 20px 10px 20px',
                            width: "175px",
                            border: "2px solid #370894"
                        }}
                        className={styles.displayOurTeam}
                        onClick={() => displayContent("ourTeam")}
                    >Executive Team</Button>
                    <Button
                        id="ourProgramButton"
                        sx={{
                            color: "#FFF",
                            fontSize: "16px",
                            fontFamily: "Helvetica Neue",
                            fontWeight: 700,
                            textTransform: 'capitalize',
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '15px',
                            padding: '10px 20px 10px 20px',
                            width: "175px",
                            border: "2px solid #370894"
                        }}
                        className={styles.displayOurProgram}
                        onClick={() => displayContent("ourProgram")}
                    ><div>Analyst Team</div></Button>
                    <Button
                        id="ourDevTeamButton"
                        sx={{
                            color: "#FFF",
                            fontSize: "16px",
                            fontFamily: "Helvetica Neue",
                            fontWeight: 700,
                            textTransform: 'capitalize',
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '15px',
                            padding: '10px 20px 10px 20px',
                            width: "175px",
                            border: "2px solid #370894"
                        }}
                        className={styles.displayOurDevTeam}
                        onClick={() => displayContent("ourDevTeam")}
                    ><div>Dev Team</div></Button>
                </ButtonGroup>
            </div>

            <div id="ourTeam">
                <ExecTeam />
            </div>
            <div id="ourProgram">
                <AnalystTeam />
            </div>
            <div id="ourDevTeam">
                <DevTeam />
            </div>

            <Footer />
        </div>
    );
}

export default About;