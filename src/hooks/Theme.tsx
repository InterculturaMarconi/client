import React from 'react';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';

const createThemeMode = (mode: PaletteMode) =>
    createTheme({
        palette: {
            mode,
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 640,
                md: 1024,
                lg: 1200,
                xl: 1920,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                    html, body, #root {
                        min-height: 100vh;
                    }
                `,
            },
        },
    });

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
            theme: createThemeMode(mode),
            value: { mode, toggle },
        }),
        [mode],
    );

    return (
        <PaletteModeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </PaletteModeContext.Provider>
    );
};
