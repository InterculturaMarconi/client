import React from 'react';

import Navbar from '~/components/Navbar';
import ObjectivesTable from '~/components/objective/ObjectivesTable';
import Page from '~/components/Page';
import Footer from '~/components/footer/Footer';
import obiettivo from '~/img/obbiettivi/1.jpg';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Obiettivo1: React.FC = () => (
    <Page title="Obiettivo 1 | InterculturaMarconi">
        <Navbar />
        <Box sx={{ marginY: '4em' }}>
            <img src={obiettivo} height={300} alt="" />
        </Box>
        <Footer />
    </Page>
);
export default Obiettivo1;
