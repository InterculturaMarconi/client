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
                widht: '100%',
                height: { sm: '50%', md: '30vh' },
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Filter opacity={0.25} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Filter
                    opacity={0.6}
                    sx={{ width: 'max-content', height: 'max-content', p: '1rem 2rem' }}
                >
                    <Typography variant="h2" color="white">
                        {title}
                    </Typography>
                </Filter>
            </Filter>
        </Box>
    );
};

export default ObjectiveBanner;
