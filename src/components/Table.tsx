import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ob1 from '~/img/obbiettivi/1.jpg';
import ob2 from '~/img/obbiettivi/2.jpg';
import ob3 from '~/img/obbiettivi/3.jpg';
import ob4 from '~/img/obbiettivi/4.jpg';
import ob5 from '~/img/obbiettivi/5.jpg';
import ob6 from '~/img/obbiettivi/6.jpg';
import ob7 from '~/img/obbiettivi/7.jpg';
import ob8 from '~/img/obbiettivi/8.jpg';
import ob9 from '~/img/obbiettivi/9.jpg';
import ob10 from '~/img/obbiettivi/10.jpg';
import ob11 from '~/img/obbiettivi/11.jpg';
import ob12 from '~/img/obbiettivi/12.jpg';
import ob13 from '~/img/obbiettivi/13.jpg';
import ob14 from '~/img/obbiettivi/14.jpg';
import ob15 from '~/img/obbiettivi/15.jpg';
import ob16 from '~/img/obbiettivi/16.jpg';
import ob17 from '~/img/obbiettivi/17.jpg';
// import ob18 from '~/img/obbiettivi/18.jpg';
import ObjectiveButton from '~/components/ObjectiveButton';

interface IObjectiveButton {
    id: number;
    icon: string;
}

const grid: IObjectiveButton[][] = [
    [
        { id: 1, icon: ob1 },
        { id: 2, icon: ob2 },
        { id: 3, icon: ob3 },
        { id: 4, icon: ob4 },
        { id: 5, icon: ob5 },
        { id: 6, icon: ob6 },
    ],
    [
        { id: 7, icon: ob7 },
        { id: 8, icon: ob8 },
        { id: 9, icon: ob9 },
        { id: 10, icon: ob10 },
        { id: 11, icon: ob11 },
        { id: 12, icon: ob12 },
    ],
    [
        { id: 13, icon: ob13 },
        { id: 14, icon: ob14 },
        { id: 15, icon: ob15 },
        { id: 16, icon: ob16 },
        { id: 17, icon: ob17 },
        // { id: 18, icon: ob18 },
    ],
];

const Table = () => (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {grid.map((line) => (
                <Grid container item spacing={1}>
                    {line.map((btn) => (
                        <Grid item spacing={1}>
                            <ObjectiveButton id={btn.id} icon={btn.icon} />
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default Table;
