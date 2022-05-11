import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

export interface IObjectiveGrid {
    img1: String;
    img2: String;
    img3: String;
    children: React.ReactNode;
}

const ObjectiveCaption: React.FC<IObjectiveGrid> = ({ img1, img2, img3, children }) => {
    return (
        <Card sx={{ display: 'flex', p: 1 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        {children}

                        <CardMedia
                            component="img"
                            sx={{ width: 250, borderRadius: 1.25 }}
                            image={img1}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia
                            component="img"
                            sx={{ width: 250, borderRadius: 1.25 }}
                            image={img2}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia
                            component="img"
                            sx={{ width: 250, borderRadius: 1.25 }}
                            image={img3}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
export default ObjectiveCaption;
