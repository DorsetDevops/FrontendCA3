import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root');

if (!rootElement)
    throw new Error('No root element.');

const root = ReactDOM.createRoot(rootElement);
root.render(<React.StrictMode><App /></React.StrictMode>);

