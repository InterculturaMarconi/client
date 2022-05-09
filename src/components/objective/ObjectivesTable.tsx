import React from 'react';
import { Container, Grid } from '@mui/material';

import ObjectiveButton, { IObjectiveButton } from '~/components/objective/ObjectiveButton';
import { useImage } from '~/hooks/Image';

const btns: IObjectiveButton[] = [
    { id: 1, icon: useImage('obbiettivi/1.jpg') },
    { id: 2, icon: useImage('obbiettivi/2.jpg') },
    { id: 3, icon: useImage('obbiettivi/3.jpg') },
    { id: 4, icon: useImage('obbiettivi/4.jpg') },
    { id: 5, icon: useImage('obbiettivi/5.jpg') },
    { id: 6, icon: useImage('obbiettivi/6.jpg') },
    { id: 7, icon: useImage('obbiettivi/7.jpg') },
    { id: 8, icon: useImage('obbiettivi/8.jpg') },
    { id: 9, icon: useImage('obbiettivi/9.jpg') },
    { id: 10, icon: useImage('obbiettivi/10.jpg') },
    { id: 11, icon: useImage('obbiettivi/11.jpg') },
    { id: 12, icon: useImage('obbiettivi/12.jpg') },
    { id: 13, icon: useImage('obbiettivi/13.jpg') },
    { id: 14, icon: useImage('obbiettivi/14.jpg') },
    { id: 15, icon: useImage('obbiettivi/15.jpg') },
    { id: 16, icon: useImage('obbiettivi/16.jpg') },
    { id: 17, icon: useImage('obbiettivi/17.jpg') },
    {
        id: 18,
        icon: 'https://images.unric.org/it/wp-content/uploads/sites/3/2019/03/SDG_LOGO_IT_RGB-696x450.jpg',
    },
];

const ObjectivesTable = () => (
    <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="space-around">
            {btns.map(btn => (
                <Grid
                    item
                    container
                    xs={6}
                    sm={4}
                    md={2}
                    justifyContent="space-around"
                    key={btn.icon}
                >
                    <ObjectiveButton {...btn} />
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default ObjectivesTable;
