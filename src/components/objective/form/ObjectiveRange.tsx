import React from 'react';
import { InputProps } from './ObjectiveForm';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Box } from '@mui/material';

const ObjectiveRange = React.forwardRef<unknown, InputProps>(
    ({ id, testo, tipo, error, ...register }, ref) => {
        const [title, l, r] = testo.split('§');

        return (
            <FormControl error={!!error} sx={{ display: 'flex' }}>
                <FormLabel>{title}</FormLabel>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <FormLabel>{l}</FormLabel>
                    <RadioGroup row>
                        {Array(10)
                            .fill(0)
                            .map((_, i) => (
                                <FormControlLabel
                                    value={i + 1}
                                    label={i + 1}
                                    labelPlacement="bottom"
                                    key={i}
                                    control={<Radio />}
                                    {...register}
                                    ref={ref}
                                />
                            ))}
                    </RadioGroup>
                    <FormLabel>{r}</FormLabel>
                </Box>
            </FormControl>
        );
    },
);

export default ObjectiveRange;
