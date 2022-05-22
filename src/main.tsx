import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '~/App';
import { PaletteModeProvider } from '~/hooks/Theme';
import { store } from '~/hooks/Store';

const root = ReactDOM.createRoot(document.getElementById('root')!);

export const api = (url: string, opt?: RequestInit) =>
    fetch(`https://pctomarconi.altervista.org/${url}`, {
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${localStorage.getItem('token')}`,
        },
        ...opt,
    });

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PaletteModeProvider>
                    <App />
                </PaletteModeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
