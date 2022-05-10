import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@mui/system';

import Page from '~/components/Page';
import ObjectiveCover from '~/components/objective/ObjectiveCover';
import { useImage } from '~/hooks/Image';
import ObjectiveCard from '~/components/objective/ObjectiveCard';
import { Container, Typography } from '@mui/material';
import ObjectiveBanner from '~/components/objective/ObjectiveBanner';
import ObjectiveCaption from '~/components/objective/ObjectiveCaption';

const Obiettivo14: React.FC = () => (
    <Page title="Obiettivo 14 | InterculturaMarconi" background="#045389">
        <ObjectiveCover img={useImage('obb14/img1obb14.jpg')} id={14}>
            <div>Obiettivo 14</div>
            <div>Conservare e utilizzare in modo durevole gli oceani</div>
        </ObjectiveCover>
        <Box sx={{ py: 4 }}>
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
        <Box sx={{ p: 4 }}>
            <ObjectiveCaption title="La vita sott'acqua">
                Se ci chiedessero di riconoscere la Terra a colpo d'occhio, dallo Spazio, non
                avremmo dubbi: gli oceani conferiscono a quel nostro "puntino blu" un look
                inconfondibile che tutti gli altri pianeti ci invidiano.
                <strong> Mari ed oceani</strong> in salute sono indispensabili per la sopravvivenza
                dell'uomo: da queste distese d'acqua che coprono i tre quarti del pianeta attingiamo
                cibo, energia, acqua, ossigeno.
                <br />
                <br />
                Eppure, da qualche tempo la loro <strong> protezione</strong> sembra esserci...
                sfuggita di mano. Negli ultimi decenni ci siamo lasciati andare a forme di{' '}
                <strong>inquinamento</strong> ed incuria degli oceani che minacciano la
                sopravvivenza delle 200.000 specie viventi che vi abitano, e alla lunga anche la
                nostra.
                <br />
                <br />
                Per fortuna, <strong>l'Obiettivo 14 dell'Agenda 2030</strong> (una lista di sfide in
                cui lanciarci per migliorare il futuro del Pianeta) ci ricorda che dobbiamo
                rimboccarci le maniche per <strong>proteggere gli oceani</strong> e{' '}
                <strong>utilizzare le risorse</strong> che ci offrono{' '}
                <strong>in modo sostenibile</strong>, cioè con intelligenza e misura, in modo non
                distruttivo.
            </ObjectiveCaption>
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
