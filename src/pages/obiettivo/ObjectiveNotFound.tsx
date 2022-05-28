import React from 'react';
import Divider from '@mui/material/Divider';
import ObjectivesTable from '~/components/objective/table/ObjectivesTable';
import ObjectiveGridData from '~/components/objective/ObjectiveGridData';
import Page from '~/components/Page';
import draw1 from '~/img/draw/039-error-404-colour.svg';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const ObjectiveNotFound: React.FC = () => (
    <Page title="Credits | InterculturaMarconi">
        <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Box width={600} sx={{ marginY: '12em' }}>
                <Typography variant="h3" gutterBottom component="div">
                    Ci siamo lavorando
                </Typography>
                <Box>
                    <Typography variant="body1" gutterBottom>
                        Ci scusiamo per il disagio, ma la pagina di questo obiettivo non è ancora
                        disponibile, ti consigliamo di riprovare in futuro! Nel mentre puoi visitare
                        un'altra pagina.
                    </Typography>
                </Box>
            </Box>
            <Box>
                <img src={draw1} height={400} alt="" />
            </Box>
        </Grid>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Box width={800} sx={{ marginY: '2em' }}>
                <Divider sx={{ borderBottomWidth: 5 }} variant="middle" color="#007bb8" />
            </Box>
        </Grid>

        <Box sx={{ marginY: '4em' }}>
            <ObjectivesTable />
        </Box>
    </Page>
);

export default ObjectiveNotFound;
