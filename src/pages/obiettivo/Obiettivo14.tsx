import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@mui/system';

import Page from '~/components/Page';
import ObjectiveCover from '~/components/objective/ObjectiveCover';
import { useImage } from '~/hooks/Image';
import ObjectiveCard from '~/components/objective/ObjectiveCard';
import { Container, Typography } from '@mui/material';
import ObjectiveBanner from '~/components/objective/ObjectiveBanner';

const Obiettivo14: React.FC = () => (
    <Page title="Obiettivo 14 | InterculturaMarconi" background="#1f97d4">
        <ObjectiveCover img={useImage('obb14/img1obb14.jpg')}>
            <div>Obiettivo 14</div>
            <div>Conservare e utilizzare in modo durevole gli oceani</div>
        </ObjectiveCover>
        <Box sx={{ py: 8 }}>
            <ObjectiveCard img={useImage('obb14/img2obb14.png')}>
                <Typography variant="body1" gutterBottom>
                    Gli <strong>oceani del mondo</strong> - la loro temperatura, la loro
                    composizione chimica, le loro correnti e la loro vita -{' '}
                    <strong>
                        influenzano i sistemi globali che rendono la Terra un luogo vivibile per il
                        genere umano.
                    </strong>
                    L'acqua piovana, l'acqua che beviamo, il clima, le nostre coste, molto del
                    nostro cibo e persino l'ossigeno presente nell'aria che respiriamo sono{' '}
                    <strong>elementi</strong> in definitiva forniti e{' '}
                    <strong>regolati dal mare.</strong>
                    Nel corso della storia, gli oceani e i mari sono stati e continuano ad essere
                    canali vitali per il commercio ed il trasporto.
                    <strong>Un'attenta gestione</strong> di questa fondamentale risorsa globale è
                    alla base di un <strong>futuro sostenibile.</strong>
                </Typography>
            </ObjectiveCard>
        </Box>
        <ObjectiveBanner img={useImage('obb14/img3obb14.png')} title="- Scopriamo l'obiettivo! -" />
        <Box sx={{ py: 8 }}>
            <ObjectiveCard img={useImage('obb14/img4obb14.png')}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="h4" gutterBottom fontWeight={500}>
                        Titolo del cazzo
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Gli <strong>oceani del mondo</strong> - la loro temperatura, la loro
                        composizione chimica, le loro correnti e la loro vita -{' '}
                        <strong>
                            influenzano i sistemi globali che rendono la Terra un luogo vivibile per
                            il genere umano.
                        </strong>
                        L'acqua piovana, l'acqua che beviamo, il clima, le nostre coste, molto del
                        nostro cibo e persino l'ossigeno presente nell'aria che respiriamo sono{' '}
                        <strong>elementi</strong> in definitiva forniti e{' '}
                        <strong>regolati dal mare.</strong>
                        Nel corso della storia, gli oceani e i mari sono stati e continuano ad
                        essere canali vitali per il commercio ed il trasporto.
                        <strong>Un'attenta gestione</strong> di questa fondamentale risorsa globale
                        è alla base di un <strong>futuro sostenibile.</strong>
                    </Typography>
                </Box>
            </ObjectiveCard>
        </Box>
        <Container sx={{ mt: 5 }}>
            <ReactPlayer url="https://www.youtube.com/watch?v=CcNWGKsCSTc" />
        </Container>
    </Page>
);
export default Obiettivo14;
