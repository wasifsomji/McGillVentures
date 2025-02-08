import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import ScrollToTop from "./ScrollToTop";
import AnalystProgram from "./pages/Program/AnalystProgram";

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="programs" element={<AnalystProgram />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;