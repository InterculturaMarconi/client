import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Filter from '~/components/Filter';

interface IObjectiveCover {
    img: string;
    children: React.ReactNode;
}

const ObjectiveCover: React.FC<IObjectiveCover> = ({ children, img }) => {
    return (
        <Box
            sx={{
                widht: '100%',
                height: { sm: '100%', md: '70vh' },
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Filter opacity={0.1}>
                <Grid
                    container
                    justifyContent="flex-end"
                    alignItems="flex-start"
                    direction="column"
                    spacing={2}
                    sx={{
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 100,
                        color: 'white',
                        p: '0 0 2rem 2rem',
                    }}
                >
                    <Grid item>
                        <Filter opacity={0.6} sx={{ p: 1.5 }}>
                            <Typography variant="h3" component="div" fontWeight={700}>
                                {React.Children.toArray(children)[0]}
                            </Typography>
                        </Filter>
                    </Grid>
                    <Grid item>
                        <Filter opacity={0.6} sx={{ p: 1.5 }}>
                            <Typography variant="h4" component="div">
                                {React.Children.toArray(children)[1]}
                            </Typography>
                        </Filter>
                    </Grid>
                </Grid>
            </Filter>
        </Box>
    );
};

export default ObjectiveCover;
