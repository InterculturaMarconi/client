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
                <RadioGroup>
                    {values.map((value, index) => (
                        <FormControlLabel
                            key={index}
                            value={index}
                            control={<Radio />}
                            label={value}
                            {...register}
                            ref={ref}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        );
    },
);

export default ObjectiveText;
