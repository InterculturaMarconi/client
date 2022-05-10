import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import obb14 from '~/img/obb14/img2obb14.png';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

export interface IObjectiveCard {
    img: string;
    children: React.ReactNode;
}

const ObjectiveCard: React.FC<IObjectiveCard> = ({ children, img }) => {
    const theme = useTheme();
    return (
        <Container maxWidth="md">
            <Card sx={{ display: 'flex', p: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="center">
                            <CardMedia
                                component="img"
                                sx={{ width: 200 }}
                                image={img}
                                alt="Live from space album cover"
                            />
                            <Box width={600} sx={{ marginX: '4em' }}>
                                <Typography component="div" variant="body1">
                                    {children}
                                </Typography>
                            </Box>
                        </Grid>
                    </CardContent>
                </Box>
            </Card>
        </Container>
    );
};
export default ObjectiveCard;
