import React from 'react';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ObjectiveButton, { IObjectiveButton } from '~/components/objective/ObjectiveButton';
import { useImage } from '~/hooks/Image';

export interface IObjectiveGridData {
    num1: React.ReactNode;
    text1: React.ReactNode;
    num2: React.ReactNode;
    text2: React.ReactNode;
    num3: React.ReactNode;
    text3: React.ReactNode;
    num4: React.ReactNode;
    text4: React.ReactNode;
}

const ObjectiveGridData: React.FC<IObjectiveGridData> = ({
    num1,
    text1,
    num2,
    text2,
    num3,
    text3,
    num4,
    text4,
}) => {
    return (
        <Container maxWidth="md" sx={{ mb: 3 }}>
            <Grid container spacing={2} justifyContent="space-around">
                <Grid xs={6} sm={3} justifyContent="space-around" item>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h4">
                                    <strong>{num1}</strong>
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                >
                                    {text1}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
                <Grid xs={6} sm={3} justifyContent="space-around" item>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h4">
                                    <strong>{num2}</strong>
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                >
                                    {text2}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
                <Grid xs={6} sm={3} justifyContent="space-around" item>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h4">
                                    <strong>{num3}</strong>
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                >
                                    {text3}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
                <Grid xs={6} sm={3} justifyContent="space-around" item>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h4">
                                    <strong>{num4}</strong>
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                >
                                    {text4}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};
export default ObjectiveGridData;
