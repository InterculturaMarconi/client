import React from 'react';

import Navbar from '~/components/Navbar';
import ObjectivesTable from '~/components/objective/ObjectivesTable';
import Page from '~/components/Page';
import Footer from '~/components/footer/Footer';
import TrePersoneMondo from '~/img/TrePersoneMondo.png';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Home: React.FC = () => (
    <Page title="Home | InterculturaMarconi">
        <Navbar />
        {/* <Grid container spacing={1} alignItems="center" justifyContent="left">
            <img src={TrePersoneMondo} height={400} alt="" />
            <Box width={600}>
                <Typography variant="h3" gutterBottom component="div">
                    Agenda 2030
                </Typography>
                <Typography variant="body1" gutterBottom>
                    L’Agenda 2030 per lo Sviluppo Sostenibile è un programma d’azione per le
                    persone, il pianeta e la prosperità sottoscritto nel settembre 2015 dai governi
                    dei 193 Paesi membri dell’ONU. Essa ingloba 17 Obiettivi per lo Sviluppo
                    Sostenibile – Sustainable Development Goals, SDGs – in un grande programma
                    d’azione per un totale di 169 ‘target’ o traguardi. L’avvio ufficiale degli
                    Obiettivi per lo Sviluppo Sostenibile ha coinciso con l’inizio del 2016,
                    guidando il mondo sulla strada da percorrere nell’arco dei prossimi 15 anni: i
                    Paesi, infatti, si sono impegnati a raggiungerli entro il 2030.
                </Typography>
            </Box>
        </Grid> */}
        <Box sx={{ marginY: '4em' }}>
            <ObjectivesTable />
        </Box>
        <Footer />
    </Page>
);

export default Home;
