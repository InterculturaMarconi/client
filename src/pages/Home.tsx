import React from 'react';
import Divider from '@mui/material/Divider';
import ObjectivesTable from '~/components/objective/table/ObjectivesTable';
import ObjectiveGridData from '~/components/objective/ObjectiveGridData';
import Page from '~/components/Page';
import draw1 from '~/img/draw/001-drawkit-content-man-colour.svg';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Home: React.FC = () => (
    <Page title="Home | InterculturaMarconi">
        <Grid container spacing={1} alignItems="center" justifyContent="center">
            <Box sx={{ marginY: '4em' }}>
                <img src={draw1} height={400} alt="" />
            </Box>
            <Box width={600} sx={{ marginY: '4em' }}>
                <Typography variant="h3" gutterBottom component="div">
                    Agenda 2030
                </Typography>
                <Box sx={{ mx: 2 }}>
                    <Typography variant="body1" gutterBottom>
                        L’Agenda 2030 per lo Sviluppo Sostenibile è un programma d’azione per le
                        persone, il pianeta e la prosperità sottoscritto nel settembre 2015 dai
                        governi dei 193 Paesi membri dell’ONU. Essa ingloba 17 Obiettivi per lo
                        Sviluppo Sostenibile – Sustainable Development Goals, SDGs – in un grande
                        programma d’azione per un totale di 169 ‘target’ o traguardi. L’avvio
                        ufficiale degli Obiettivi per lo Sviluppo Sostenibile ha coinciso con
                        l’inizio del 2016, guidando il mondo sulla strada da percorrere nell’arco
                        dei prossimi 15 anni: i Paesi, infatti, si sono impegnati a raggiungerli
                        entro il 2030.
                    </Typography>
                </Box>
            </Box>
        </Grid>
        <ObjectiveGridData
            num1="193"
            text1="Paesi aderenti l'agenda 2030"
            num2="17"
            text2="Obiettivi per lo sviluppo sostenibile"
            num3="169"
            text3="Traguardi prefissati da raggiungere"
            num4="2030"
            text4="anno per il raggiungimento degli obiettivi"
        />
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

export default Home;
