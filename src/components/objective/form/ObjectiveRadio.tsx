import { RadioGroup, Radio, FormControl, FormControlLabel, Typography } from '@mui/material';
import React from 'react';
import { InputProps } from './ObjectiveForm';

const ObjectiveText: React.FC<InputProps> = ({ id, tipo, testo, ...rest }) => {
    const [title, ...values] = testo.split('§');

    return (
        <>
            <Typography variant="body1" gutterBottom>
                {title}
            </Typography>
            <FormControl>
                <RadioGroup {...rest}>
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
        </>
    );
};

export default ObjectiveText;
