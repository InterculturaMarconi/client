import React from 'react';

import Navbar from '~/components/Navbar';
import ObjectivesTable from '~/components/objective/ObjectivesTable';
import Page from '~/components/Page';
import Footer from '~/components/footer/Footer';
import fishBackground from '~/img/obb14/img1obb14.jpg';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Obiettivo14: React.FC = () => (
    <Page title="Obiettivo 14 | InterculturaMarconi">
        <Navbar />
        <Typography variant="h3" gutterBottom component="div">
            Obiettivo 14
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
            La vita sott'acqua
        </Typography>
        <img src={fishBackground} alt="" />
        <Footer />
    </Page>
);
export default Obiettivo14;
