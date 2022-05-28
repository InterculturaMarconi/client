import React from 'react';
import Divider from '@mui/material/Divider';
import ObjectivesTable from '~/components/objective/table/ObjectivesTable';
import ObjectiveGridData from '~/components/objective/ObjectiveGridData';
import Page from '~/components/Page';
import draw1 from '~/img/draw/027-drawkit-notebook-man-colour.svg';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Credits: React.FC = () => (
    <Page title="Credits | InterculturaMarconi">
        <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Box width={600} sx={{ marginY: '4em' }}>
                <Typography variant="h3" gutterBottom component="div">
                    Crediti
                </Typography>
                <Box>
                    <Typography variant="body1" gutterBottom>
                        L'applicazione web nasce da una collaborazione dell'istituto tecnico
                        informatico con il liceo dell'I.I.S. Marconi di Latina. I ragazzi
                        dell'istituto tecnico hanno fornito le loro competenze informatiche per la
                        realizzazione del sito mentre i ragazzi del liceo hanno messo a frutto la
                        loro creatività e hanno fornito agli sviluppatori in particolare le idee e i
                        contenuti da inserire nel sito. L'obiettivo del progetto era proprio quello
                        di sfruttare a 360° le competenze dei ragazzi del Marconi, realizzando un
                        vero e proprio progetto tecnico grazie alle competenze tecniche informatiche
                        dei ragazzi dell'istituto informatico e ai contenuti dei ragazzi del liceo.
                    </Typography>
                </Box>
            </Box>
            <Box>
                <img src={draw1} height={550} alt="" />
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

export default Credits;
