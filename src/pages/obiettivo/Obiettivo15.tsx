import { Typography } from '@mui/material';
import React from 'react';

import Page from '~/components/Page';
import ObjectivePage from '~/components/objective/ObjectivePage';

const body_1 = (
    <span>
        <Typography variant="h4" gutterBottom sx={{ xs: 'center', md: 'left' }}>
            <strong>Cos'è l'obiettivo 15?</strong>
        </Typography>
        l’obiettivo 15 si propone di proteggere, ripristinare e promuovere l’uso sostenibile degli
        ecosistemi terrestri, gestire in modo sostenibile le foreste, contrastare la
        desertificazione, arrestare e invertire il degrado dei suoli e fermare la perdita di
        biodiversità.
    </span>
);

const body_2 =
    'Nel mondo ancora oggi più di 700 milioni di persone vivono sotto la soglia di povertà estrema, che rappresenta quasi il 10% della popolazione mondiale. Vivere in estrema povertà significa, oltre a non potersi procurare i beni di prima necessità, non avere nemmeno accesso a servizi essenziali come sanità, educazione, o semplicemente acqua potabile.';
const body_3 =
    'Perciò quando si viaggia andando in paesi esteri, confrontandosi con nuove culture e stili di vita diversi, è bene che si conoscano non soltanto gli aspetti positivi, ma anche quelli negativi come la povertà, perché ci fanno crescere maggiormente, acquisendo più consapevolezza del mondo che ci circonda, guardandolo con più prospettive.';
const body_5 =
    'Entro il 2030, ridurre almeno della metà la quota di uomini, donne e bambini di tutte le età che vivono in povertà in tutte le sue forme, secondo le definizioni nazionali Implementare a livello nazionale adeguati sistemi di protezione sociale e misure di sicurezza per tutti, compresi i livelli più bassi, ed entro il 2030 raggiungere una notevole copertura delle persone povere e vulnerabili';
const Obiettivo15: React.FC = () => (
    <Page
        title="Obiettivo 15 | InterculturaMarconi"
        background="#96d284"
        navcolor="#59ba47"
        footcolor="#59ba47"
    >
        <ObjectivePage
            title="Obiettivo 15"
            description="La vita sulla terra"
            backgroundObb="obb1/img1obb1.png"
            squareId={15}
            immagine_2="obb1/img2obb1.jpg"
            body_1={body_1}
            sottotitolo_1=""
            body_2={body_2}
            body_3={body_3}
            body_4=""
            body_5={body_5}
            immagine_3="obb1/img3obb1.jpg"
            sottotitolo_2="Scopriamo l'obiettivo!"
            immagine_4="obb1/img4obb1.jpg"
            sottotitolo_3="I principali traguardi dell'obiettivo 1"
        />
    </Page>
);

export default Obiettivo15;
