import React from 'react';
import { Box, Grid, Typography, styled } from '@mui/material';
import Filter from '~/components/Filter';
import { useImage } from '~/hooks/Image';

interface IObjectiveCover {
    img: string;
    id: number;
    children: React.ReactNode;
}

const Image = styled('img')(({ theme }) => ({
    width: theme.spacing(12),
    height: theme.spacing(12),
    borderRadius: theme.spacing(1),
    zIndex: 4,
    [theme.breakpoints.up('sm')]: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));
const ObjectiveCover: React.FC<IObjectiveCover> = ({ children, img, id }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: '93vh', md: '70vh' },
                backgroundImage: `url('${img}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Filter
                opacity={0.1}
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', sm: 'row' },
                    p: { xs: 2, sm: 3 },
                }}
            >
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
                <Image src={useImage(`obbiettivi/${id}.jpg`)} alt="" />
            </Filter>
        </Box>
    );
};

export default ObjectiveCover;
