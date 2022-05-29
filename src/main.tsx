import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from '~/App';
import { PaletteModeProvider } from '~/hooks/Theme';
import { store } from '~/hooks/Store';

const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <PaletteModeProvider>
                    <App />
                </PaletteModeProvider>
            </HashRouter>
        </Provider>
        ,
    </React.StrictMode>,
);
