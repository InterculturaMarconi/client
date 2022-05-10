import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

export interface IObjectiveCaption {
    title: string;
    children: React.ReactNode;
}

const ObjectiveCaption: React.FC<IObjectiveCaption> = ({ children, title }) => {
    return (
        <Container fixed>
            <Divider variant="middle" color="white" />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                        <Typography component="div" variant="h2" color="white" gutterBottom>
                            {title}
                        </Typography>
                        <Box width={900} sx={{ marginX: '4em' }}>
                            <Typography component="div" variant="body1" color="white">
                                {children}
                            </Typography>
                        </Box>
                    </Grid>
                </CardContent>
            </Box>
            <Divider variant="middle" color="white" />
        </Container>
    );
};
export default ObjectiveCaption;
