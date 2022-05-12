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
import ObjectiveGrid from '~/components/objective/ObjectiveGrid';

const Obiettivo14: React.FC = () => (
    <Page title="Obiettivo 14 | InterculturaMarconi" background="#045389">
        <ObjectiveCover img={useImage('obb14/img1obb14.jpg')} id={14}>
            <div>
                <strong>Obiettivo 14</strong>
            </div>
            <div>Conservare e utilizzare in modo durevole gli oceani</div>
        </ObjectiveCover>
        <Box sx={{ py: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ObjectiveCard img={useImage('obb14/img2obb14.png')}>
                <Typography variant="body1" gutterBottom sx={{ xs: 'center', md: 'left' }}>
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
        <ObjectiveCaption sx={{ p: 4, color: 'white' }} title="La vita sott'acqua">
            <Typography variant="h2" gutterBottom textAlign="center">
                La vita sott'acqua
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }} textAlign="center">
                Se ci chiedessero di riconoscere la Terra a colpo d'occhio, dallo Spazio, non
                avremmo dubbi: gli oceani conferiscono a quel nostro "puntino blu" un look
                inconfondibile che tutti gli altri pianeti ci invidiano.
                <strong> Mari ed oceani</strong> in salute sono indispensabili per la sopravvivenza
                dell'uomo: da queste distese d'acqua che coprono i tre quarti del pianeta attingiamo
                cibo, energia, acqua, ossigeno.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }} textAlign="center">
                Eppure, da qualche tempo la loro <strong> protezione</strong> sembra esserci...
                sfuggita di mano. Negli ultimi decenni ci siamo lasciati andare a forme di{' '}
                <strong>inquinamento</strong> ed incuria degli oceani che minacciano la
                sopravvivenza delle 200.000 specie viventi che vi abitano, e alla lunga anche la
                nostra.
            </Typography>
            <Typography variant="body1" textAlign="center">
                Per fortuna, <strong>l'Obiettivo 14 dell'Agenda 2030</strong> (una lista di sfide in
                cui lanciarci per migliorare il futuro del Pianeta) ci ricorda che dobbiamo
                rimboccarci le maniche per <strong>proteggere gli oceani</strong> e{' '}
                <strong>utilizzare le risorse</strong> che ci offrono{' '}
                <strong>in modo sostenibile</strong>, cioè con intelligenza e misura, in modo non
                distruttivo.
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
                        L'obiettivo 14 mira a ridurre in modo significativo entro il 2025 tutti i
                        tipi di<strong> inquinamento marittimo </strong>e a portare a un livello
                        minimo
                        <strong>l'acidificazione degli oceani</strong>. Già entro il 2020 gli
                        <strong> ecosistemi marini e costieri </strong>dovranno essere gestiti e
                        protetti in modo sostenibile. Entro il 2020 anche la pesca dovrà essere
                        disciplinata in modo efficace. Per porre un limite alla{' '}
                        <strong>pesca eccessiva</strong> nei mari, le attività illegali e non
                        regolamentate in questo campo nonché le{' '}
                        <strong>pratiche distruttive</strong> dovranno essere sradicate entro il
                        2020. Inoltre, determinate forme di sovvenzioni alla pesca dovranno essere
                        vietate.
                    </Typography>
                </Box>
            </ObjectiveCard>
        </Box>
        {/* <Container sx={{ mt: 5 }}>
            <ReactPlayer url="https://www.youtube.com/watch?v=CcNWGKsCSTc" />
        </Container> */}
        <ObjectiveGrid
            img1={useImage('obb14/img5obb14.jpg')}
            img2={useImage('obb14/img6obb14.jpg')}
            img3={useImage('obb14/img7obb14.jpg')}
            img4={useImage('obb14/img8obb14.jpg')}
            text1="14.1: Entro il 2025, prevenire e ridurre 
            in modo significativo ogni forma di inquinamento marino, in particolar modo quello derivante da attività esercitate sulla terraferma, compreso l'inquinamento dei detriti marini e delle sostanze nutritive."
            text2="14.2: Entro il 2020, gestire in modo sostenibile e proteggere l'ecosistema marino e costiero per evitare impatti particolarmente negativi, anche rafforzando la loro resilienza, e agire per il loro ripristino in modo da ottenere oceani salubri e produttivi."
            text3="14.3: Ridurre al minimo e affrontare gli effetti dell'acidificazione degli oceani, anche attraverso una maggiore collaborazione scientifica su tutti i livelli."
            text4="14.4: Entro il 2020, regolare in modo efficace la pesca e porre termine alla pesca eccessiva, illegale, non dichiarata e non regolamentata e ai metodi di pesca distruttivi. Implementare piani di gestione su base scientifica, così da ripristinare nel minor tempo possibile le riserve ittiche, riportandole almeno a livelli che producano il massimo rendimento sostenibile, come determinato dalle loro caratteristiche biologiche."
            text5="14.5: Entro il 2020, preservare almeno il 10% delle aree costiere e marine, in conformità al diritto nazionale e internazionale e basandosi sulle informazioni scientifiche disponibili più accurate.
            14.6: Entro il 2020, vietare quelle forme di sussidi alla pesca che contribuiscono a un eccesso di capacità e alla pesca eccessiva, eliminare i sussidi che contribuiscono alla pesca illegale, non dichiarata e non regolamentata e astenersi dal reintrodurre tali sussidi, riconoscendo che il trattamento speciale e differenziato per i paesi in via di sviluppo e per quelli meno sviluppati che sia appropriato ed efficace, dovrebbe essere parte integrante dei negoziati per i sussidi alla pesca dell'Organizzazione Mondiale del Commercio."
            text6="14.7: Entro il 2030, aumentare i benefici economici dei piccoli stati insulari in via di sviluppo e dei paesi meno sviluppati, facendo ricorso a un utilizzo più sostenibile delle risorse marine, compresa la gestione sostenibile della pesca, dell'acquacoltura e del turismo.

            14.a: Aumentare la conoscenza scientifica, sviluppare la capacità di ricerca e di trasmissione della tecnologia marina, tenendo in considerazione i criteri e le linee guida della Commissione Oceanografica Intergovernativa sul Trasferimento di Tecnologia Marina, con lo scopo di migliorare la salute dell'oceano e di aumentare il contributo della biodiversità marina allo sviluppo dei paesi emergenti, in particolar modo dei piccoli stati insulari in via di sviluppo e dei paesi meno sviluppati."
            text7="14.b: Fornire l'accesso ai piccoli pescatori artigianali alle risorse e ai mercati marini.

            14.c: Potenziare la conservazione e l'utilizzo sostenibile degli oceani e delle loro risorse applicando il diritto internazionale, come riportato nella Convenzione delle Nazioni Unite sul Diritto del Mare, che fornisce il quadro legale per la conservazione e per l'utilizzo sostenibile degli oceani e delle loro risorse, come riferito nel paragrafo 158 de Il futuro che vogliamo."
        >
            I sottobiettivi
        </ObjectiveGrid>
    </Page>
);
export default Obiettivo14;
