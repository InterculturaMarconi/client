import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Filter from '~/components/Filter';

interface IObjectiveBanner {
    img: string;
    title: string;
}

const ObjectiveBanner: React.FC<IObjectiveBanner> = ({ title, img }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '40vh',
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Filter opacity={0.3} sx={{ justifyContent: 'center', alignItems: 'center', px: 2 }}>
                <Typography variant="h2" color="white" textAlign="center">
                    {title}
                </Typography>
            </Filter>
        </Box>
    );
};

export default ObjectiveBanner;
