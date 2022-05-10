import React from 'react';

import Page from '~/components/Page';
import obiettivo from '~/img/obbiettivi/1.jpg';
import { Box } from '@mui/system';

const Obiettivo1: React.FC = () => (
    <Page title="Obiettivo 1 | InterculturaMarconi">
        <Box sx={{ marginY: '4em' }}>
            <img src={obiettivo} height={300} alt="" />
        </Box>
    </Page>
);
export default Obiettivo1;
