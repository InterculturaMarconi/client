import React from 'react';
import { createTheme, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';

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

interface IPaletteModeProvider {
    children: React.ReactNode;
}
/**
 * Checks whether the client prefers dark mode.
 * @returns {@code true} if the client prefers dark mode.
 */
export const prefersDarkMode = (): boolean => useMediaQuery('(prefers-color-scheme: dark)');

export const PaletteModeProvider: React.FC<IPaletteModeProvider> = ({ children }) => {
    const darkMode = prefersDarkMode();
    const [mode, setMode] = React.useState<PaletteMode>(darkMode ? 'dark' : 'light');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    const toggle = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

    const value = React.useMemo(() => ({ mode, toggle }), []);

    return (
        <PaletteModeContext.Provider value={value}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PaletteModeContext.Provider>
    );
};
