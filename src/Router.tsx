import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;