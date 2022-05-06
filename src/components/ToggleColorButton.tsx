import { IconButton, useTheme } from '@mui/material';
import React from 'react';
import { ColorTypeContext } from '../App';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ToggleColorButton = () => {
    const theme = useTheme();
    const colorType = React.useContext(ColorTypeContext);

    return (
        <IconButton sx={{ ml: 1 }} onClick={colorType.toggle} color="inherit">
            { theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon /> }
        </IconButton>
    );
};

export default ToggleColorButton;