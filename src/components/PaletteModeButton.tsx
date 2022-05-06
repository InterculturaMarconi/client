import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { usePaletteMode } from '~/hooks/Theme';

const PaletteModeButton: React.FC = () => {
    const { mode, toggle } = usePaletteMode();

    return (
        <IconButton onClick={toggle} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
};

export default PaletteModeButton;
