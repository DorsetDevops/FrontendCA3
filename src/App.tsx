// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React,{useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './assets/App.css';

import {ThemeProvider} from '@mui/material';
import Router from './router/Router.tsx';
import generateTheme from "./utils/generateTheme.ts";

const App = () => {
    const theme = generateTheme();

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router />
            </ThemeProvider>
        </>
    );
};

export default App;
