import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Home from './pages/Home';

import './css/index.css';
import { getTheme, PaletteMode } from './theme';

const ColorTypeContext = React.createContext({ toggle: () => { } });

const App = () => {
  const [mode, setMode] = React.useState<PaletteMode>(
    useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  );

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  const colorType = React.useMemo(() => ({
    toggle: () => {
      setMode(prev => prev === 'light' ? 'dark' : 'light')
    }
  }), []);

  return (
    <ColorTypeContext.Provider value={colorType}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </ColorTypeContext.Provider>
  );
}

export default App;