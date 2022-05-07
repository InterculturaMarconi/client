import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';
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
