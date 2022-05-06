import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from '~/pages/Home';

import '~/styles/index.css';

const App: React.FC = () => {
    const theme = React.useMemo(() => createTheme(), []);

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
