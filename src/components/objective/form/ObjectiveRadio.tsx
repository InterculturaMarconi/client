import {
    RadioGroup,
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
    Typography,
} from '@mui/material';
import React from 'react';
import { InputProps } from './ObjectiveForm';

const ObjectiveText = React.forwardRef<any, InputProps>(
    ({ id, testo, tipo, error, ...register }, ref) => {
        const [title, ...values] = testo.split('§');

        return (
            <FormControl error={!!error}>
                <FormLabel>{title}</FormLabel>
                <RadioGroup {...register} ref={ref}>
                    {values.map((value, index) => (
                        <FormControlLabel
                            key={index}
                            value={index}
                            control={<Radio />}
                            label={value}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        );
    },
);

export default ObjectiveText;
