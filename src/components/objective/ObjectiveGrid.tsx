import * as React from 'react';
import { CardContent, Card, CardMedia, Grid } from '@mui/material';

export interface IObjectiveGrid {
    img1: String;
    img2: String;
    img3: String;
    img4: String;
    text1: React.ReactNode;
    text2: React.ReactNode;
    text3: React.ReactNode;
    text4: React.ReactNode;
    text5: React.ReactNode;
    text6: React.ReactNode;
    text7: React.ReactNode;
    children: React.ReactNode;
}

const ObjectiveCaption: React.FC<IObjectiveGrid> = ({
    img1,
    img2,
    img3,
    img4,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    children,
}) => {
    return (
        <Card sx={{ display: 'flex', p: 1 }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                {children}
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        {text1}

                        <CardMedia
                            component="img"
                            sx={{ width: 250, borderRadius: 1.25 }}
                            image={img1}
                        />

                        {text2}

                        <CardMedia
                            component="img"
                            sx={{ width: 250, borderRadius: 1.25 }}
                            image={img2}
                        />

                        {text3}
                    </Grid>
                    <Grid item xs={3}>
                        {text4}

                        <CardMedia
                            component="img"
                            sx={{ width: 250, borderRadius: 1.25 }}
                            image={img3}
                        />

                        {text5}
                    </Grid>
                    <Grid item xs={3}>
                        {text6}

                        <CardMedia
                            component="img"
                            sx={{ width: 250, borderRadius: 1.25 }}
                            image={img4}
                        />

                        {text7}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
export default ObjectiveCaption;
