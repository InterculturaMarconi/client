import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton, useTheme } from '@mui/material';
import React from 'react';
import { usePaletteMode } from '~/hooks/Theme';

const PaletteModeButton: React.FC = () => {
    const { palette } = useTheme();
    const { toggle } = usePaletteMode();

    return (
        <IconButton onClick={toggle} color="inherit">
            {palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
};

export default PaletteModeButton;
