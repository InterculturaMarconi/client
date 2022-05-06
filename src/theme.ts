import { createTheme, PaletteMode } from "@mui/material";

export const getTheme = (mode: PaletteMode) => createTheme({
    palette: {
        mode
    }
});

export type { PaletteMode };