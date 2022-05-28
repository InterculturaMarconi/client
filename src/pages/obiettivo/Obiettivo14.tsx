import React from 'react';
import { Box } from '@mui/system';

import Page from '~/components/Page';
import ObjectiveCover from '~/components/objective/ObjectiveCover';
import { useImage } from '~/hooks/Image';
import ObjectiveCard from '~/components/objective/ObjectiveCard';
import { Container, Typography, useTheme } from '@mui/material';
import ObjectiveBanner from '~/components/objective/ObjectiveBanner';
import ObjectiveCaption from '~/components/objective/ObjectiveCaption';

const Obiettivo14: React.FC = () => {
    const theme = useTheme();

    return (
        <Page title="Obiettivo 14 | InterculturaMarconi" background="#045389">
            <Box>
                <ObjectiveCover img={useImage('obb14/img1obb14.jpg')} id={14}>
                    <div>
                        <strong>Obiettivo 14</strong>
                    </div>
                    <div>Conservare e utilizzare in modo durevole gli oceani</div>
                </ObjectiveCover>
            </Box>
            <Box sx={{ py: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ObjectiveCard img={useImage('obb14/img2obb14.png')}>
                    <Typography variant="body1" gutterBottom sx={{ xs: 'center', md: 'left' }}>
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
                </ObjectiveCard>
            </Box>
            <ObjectiveCaption sx={{ p: 4, color: 'white' }} title="La vita sott'acqua">
                <Typography variant="h2" gutterBottom textAlign="center">
                    La vita sott'acqua
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }} textAlign="center">
                    Se ci chiedessero di riconoscere la Terra a colpo d'occhio, dallo Spazio, non
                    avremmo dubbi: gli oceani conferiscono a quel nostro "puntino blu" un look
                    inconfondibile che tutti gli altri pianeti ci invidiano.
                    <strong> Mari ed oceani</strong> in salute sono indispensabili per la
                    sopravvivenza dell'uomo: da queste distese d'acqua che coprono i tre quarti del
                    pianeta attingiamo cibo, energia, acqua, ossigeno.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }} textAlign="center">
                    Eppure, da qualche tempo la loro <strong> protezione</strong> sembra esserci...
                    sfuggita di mano. Negli ultimi decenni ci siamo lasciati andare a forme di{' '}
                    <strong>inquinamento</strong> ed incuria degli oceani che minacciano la
                    sopravvivenza delle 200.000 specie viventi che vi abitano, e alla lunga anche la
                    nostra.
                </Typography>
                <Typography variant="body1" textAlign="center">
                    Per fortuna, <strong>l'Obiettivo 14 dell'Agenda 2030</strong> (una lista di
                    sfide in cui lanciarci per migliorare il futuro del Pianeta) ci ricorda che
                    dobbiamo rimboccarci le maniche per <strong>proteggere gli oceani</strong> e{' '}
                    <strong>utilizzare le risorse</strong> che ci offrono{' '}
                    <strong>in modo sostenibile</strong>, cioè con intelligenza e misura, in modo
                    non distruttivo.
                </Typography>
            </ObjectiveCaption>
            <ObjectiveBanner img={useImage('obb14/img3obb14.png')} title="Scopriamo l'obiettivo!" />
            <Box sx={{ py: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                            <strong>I principali traguardi dell'obiettivo 14</strong>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            L'obiettivo 14 mira a ridurre in modo significativo entro il 2025 tutti
                            i tipi di<strong> inquinamento marittimo </strong>e a portare a un
                            livello minimo
                            <strong>l'acidificazione degli oceani</strong>. Già entro il 2020 gli
                            <strong> ecosistemi marini e costieri </strong>dovranno essere gestiti e
                            protetti in modo sostenibile. Entro il 2020 anche la pesca dovrà essere
                            disciplinata in modo efficace. Per porre un limite alla{' '}
                            <strong>pesca eccessiva</strong> nei mari, le attività illegali e non
                            regolamentate in questo campo nonché le{' '}
                            <strong>pratiche distruttive</strong> dovranno essere sradicate entro il
                            2020. Inoltre, determinate forme di sovvenzioni alla pesca dovranno
                            essere vietate.
                        </Typography>
                    </Box>
                </ObjectiveCard>
            </Box>
            {/* <Container sx={{ mt: 5 }}>
            <ReactPlayer url="https://www.youtube.com/watch?v=CcNWGKsCSTc" />
        </Container> */}
        </Page>
    );
};
export default Obiettivo14;
