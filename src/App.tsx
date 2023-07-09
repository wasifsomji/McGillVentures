import React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Router from "./Router";

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
            <Router />
        </ThemeProvider>
    );
}

export default App;
