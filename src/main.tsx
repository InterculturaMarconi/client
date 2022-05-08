import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '~/App';
import { PaletteModeProvider } from '~/hooks/Theme';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <PaletteModeProvider>
                <CssBaseline />
                <App />
            </PaletteModeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
