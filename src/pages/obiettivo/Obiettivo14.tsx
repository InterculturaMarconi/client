import React from 'react';

import Page from '~/components/Page';
import ObjectiveCover from '~/components/objective/ObjectiveCover';
import { useImage } from '~/hooks/Image';
import ObjectiveCard from '~/components/objective/ObjectiveCard';
import { Box } from '@mui/system';

const Obiettivo14: React.FC = () => (
    <Page title="Obiettivo 14 | InterculturaMarconi" background="#1f97d4">
        <ObjectiveCover img={useImage('obb14/img1obb14.jpg')}>
            <div>Obiettivo 14</div>
            <div>Conservare e utilizzare in modo durevole gli oceani</div>
        </ObjectiveCover>
        <Box sx={{ py: 8 }}>
            <ObjectiveCard img={useImage('obb14/img2obb14.png')}>
                Gli <strong>oceani del mondo</strong> - la loro temperatura, la loro composizione
                chimica, le loro correnti e la loro vita -{' '}
                <strong>
                    influenzano i sistemi globali che rendono la Terra un luogo vivibile per il
                    genere umano.
                </strong>
                L'acqua piovana, l'acqua che beviamo, il clima, le nostre coste, molto del nostro
                cibo e persino l'ossigeno presente nell'aria che respiriamo sono{' '}
                <strong>elementi</strong> in definitiva forniti e{' '}
                <strong>regolati dal mare.</strong>
                Nel corso della storia, gli oceani e i mari sono stati e continuano ad essere canali
                vitali per il commercio ed il trasporto.
                <strong>Un'attenta gestione</strong> di questa fondamentale risorsa globale è alla
                base di un <strong>futuro sostenibile.</strong>
            </ObjectiveCard>
        </Box>
    </Page>
);
export default Obiettivo14;
