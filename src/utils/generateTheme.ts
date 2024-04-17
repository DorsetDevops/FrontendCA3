import {createTheme,ThemeOptions} from '@mui/material';

function generateTheme(): ThemeOptions {
    return createTheme({
        palette: {
            background: {
                default: "#101828",
                paper: "#1D2939"
            }
        },
        typography: {
            fontFamily: [
                '"Montserrat"',
                'sans-serif',
            ].join(','),

            h1: {
                color: "#FFFFFF",
                fontSize: '2.25rem',
                fontWeight: 'bold',
            },
            h2: {
                color: "#FFFFFF",
                fontSize: '1.75rem',
                fontWeight: 'bold',
            },
            h3: {
                color: "#FFFFFF",
                fontSize: '1.5rem'
            },
            h4: {
                color: "#B7B7FF",
                fontSize: '1.25rem'
            },
            h5: {
                color: "#B7B7FF",
                fontSize: '1rem'
            },
            h6: {
                color: "#B7B7FF",
                fontSize: '0.875rem'
            },

            body1: {
                color: "#FFFFFF",
                fontSize: '1rem'
            },
            body2: {
                color: "#FFFFFF",
                fontSize: '1rem'
            },
        }
    });
}

export default generateTheme;
