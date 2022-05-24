import { TextField, FormLabel, FormControl } from '@mui/material';
import React from 'react';
import { InputProps } from './ObjectiveForm';

const ObjectiveText = React.forwardRef<any, InputProps>(
    ({ id, testo, tipo, error, ...register }, ref) => {
        return (
            <FormControl error={!!error} sx={{ display: 'flex' }}>
                <FormLabel sx={{ mb: 1 }}>{testo}</FormLabel>
                <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={2}
                    {...register}
                    ref={ref}
                />
            </FormControl>
        );
    },
);

export default ObjectiveText;
