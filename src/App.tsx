import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import {createTheme, ThemeProvider} from "@mui/material/styles";

// Set new color palette
const theme = createTheme({
    palette: {
        primary: {
            main: '#370894',
        },
        secondary: {
            main: '#1E1E1E',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Home />
            </Router>
        </ThemeProvider>
    );
}

export default App;
