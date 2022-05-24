import React from 'react';
import { InputProps } from './ObjectiveForm';
import { Checkbox, FormGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';

const ObjectiveCheck = React.forwardRef<unknown, InputProps>(
    ({ id, testo, tipo, error, ...register }, ref) => {
        const [title, ...values] = testo.split('§');

        return (
            <FormControl error={!!error}>
                <FormLabel>{title}</FormLabel>
                <FormGroup {...register} ref={ref}>
                    {values.map((value, index) => (
                        <FormControlLabel
                            key={index}
                            value={index}
                            control={<Checkbox />}
                            label={value}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        );
    },
);

export default ObjectiveCheck;
