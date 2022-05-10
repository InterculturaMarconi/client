import React from 'react';

import Page from '~/components/Page';
import fishBackground from '~/img/obb14/img1obb14.jpg';
import Typography from '@mui/material/Typography';

const Obiettivo14: React.FC = () => (
    <Page title="Obiettivo 14 | InterculturaMarconi">
        <Typography variant="h3" gutterBottom component="div">
            Obiettivo 14
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
            La vita sott'acqua
        </Typography>
        <img src={fishBackground} alt="" />
    </Page>
);
export default Obiettivo14;
