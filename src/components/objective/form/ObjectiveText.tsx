import { TextField, Typography } from '@mui/material';
import React from 'react';
import { InputProps } from './ObjectiveForm';

const ObjectiveText: React.FC<InputProps> = ({ id, tipo, testo, ...rest }) => (
    <>
        <Typography variant="body1" gutterBottom>
            {testo}
        </Typography>
        <TextField fullWidth multiline rows={2} {...rest} />
    </>
);

export default ObjectiveText;
