import React from 'react';

import Page from '~/components/Page';
import obiettivo from '~/img/obbiettivi/1.jpg';
import ObjectiveCard from '~/components/objective/ObjectiveCard';
import { Box } from '@mui/system';
import { Card } from '@mui/material';
import { useImage } from '~/hooks/Image';

const Obiettivo1: React.FC = () => (
    <Page title="Obiettivo 1 | InterculturaMarconi">
        <Box sx={{ marginY: '4em' }}>
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
export default Obiettivo1;
