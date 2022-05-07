import React from 'react';
import { createTheme, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import { DocumentScannerTwoTone } from '@mui/icons-material';

interface IPaletteModeContext {
    mode: PaletteMode;
    toggle: () => void;
}

const PaletteModeContext = React.createContext<IPaletteModeContext>({
    mode: 'light',
    toggle: () => {},
});

/**
 * Hook used to handle palette mode changes.
 * @returns The current palette mode.
 */
export const usePaletteMode = () => React.useContext(PaletteModeContext);

/**
 * Checks whether the client prefers dark mode.
 * @returns {@code true} if the client prefers dark mode.
 */
export const prefersDarkMode = (): boolean => useMediaQuery('(prefers-color-scheme: dark)');

interface IPaletteModeProvider {
    children: React.ReactNode;
}

export const PaletteModeProvider: React.FC<IPaletteModeProvider> = ({ children }) => {
    const darkmode = prefersDarkMode();
    const [mode, setMode] = React.useState<PaletteMode>('light');

    React.useEffect(() => {
        const cached = localStorage.getItem('dark-mode');
        if (cached) setMode(cached === 'true' ? 'dark' : 'light');
        else setMode(darkmode ? 'dark' : 'light');
    }, []);

    const toggle = () =>
        setMode(prev => {
            localStorage.setItem('dark-mode', `${prev === 'light'}`);
            return prev === 'light' ? 'dark' : 'light';
        });

    const { theme, value } = React.useMemo(
        () => ({
            theme: createTheme({
                palette: {
                    mode,
                },
            }),
            value: { mode, toggle },
        }),
        [mode],
    );

    return (
        <PaletteModeContext.Provider value={value}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PaletteModeContext.Provider>
    );
};
