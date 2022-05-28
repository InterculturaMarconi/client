import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '~/App';
import { PaletteModeProvider } from '~/hooks/Theme';
import { store } from '~/hooks/Store';

const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PaletteModeProvider>
                    <App />
                </PaletteModeProvider>
            </BrowserRouter>
        </Provider>
        ,
    </React.StrictMode>,
);
