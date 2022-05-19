import { Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import { useImage } from '~/hooks/Image';
import Page from '~/components/Page';
import ObjectivePage from '~/components/objective/ObjectivePage';
import ObjectiveBanner from '~/components/objective/ObjectiveBanner';
import ObjectiveCover from '~/components/objective/ObjectiveCover';
import ObjectiveCard from '~/components/objective/ObjectiveCard';

const body_1 = (
    <span>
        <Typography variant="h4" gutterBottom sx={{ xs: 'center', md: 'left' }}>
            <strong>Cos'è l'obiettivo 13?</strong>
        </Typography>
        Il cambiamento climatico rappresenta una sfida centrale per lo sviluppo sostenibile.
        L’obiettivo 13 invita gli Stati a integrare misure di protezione dell’ambiente nelle proprie
        politiche nazionali e di sostenersi reciprocamente di fronte alle sfide. Riconosce la
        Convenzione quadro delle Nazioni Unite sui cambiamenti climatici come principale forum
        intergovernativo per le negoziazioni volte a individuare una risposta globale ai cambiamenti
        climatici.
    </span>
);
const body_2 =
    'Nel mondo ancora oggi più di 700 milioni di persone vivono sotto la soglia di povertà estrema, che rappresenta quasi il 10% della popolazione mondiale. Vivere in estrema povertà significa, oltre a non potersi procurare i beni di prima necessità, non avere nemmeno accesso a servizi essenziali come sanità, educazione, o semplicemente acqua potabile.';
const body_3 =
    'Perciò quando si viaggia andando in paesi esteri, confrontandosi con nuove culture e stili di vita diversi, è bene che si conoscano non soltanto gli aspetti positivi, ma anche quelli negativi come la povertà, perché ci fanno crescere maggiormente, acquisendo più consapevolezza del mondo che ci circonda, guardandolo con più prospettive.';
const body_5 =
    'Entro il 2030, ridurre almeno della metà la quota di uomini, donne e bambini di tutte le età che vivono in povertà in tutte le sue forme, secondo le definizioni nazionali Implementare a livello nazionale adeguati sistemi di protezione sociale e misure di sicurezza per tutti, compresi i livelli più bassi, ed entro il 2030 raggiungere una notevole copertura delle persone povere e vulnerabili';
const Obiettivo13: React.FC = () => (
    <Page title="Obiettivo 13 | InterculturaMarconi">
        <Box>
            <ObjectiveCover img={useImage('obb13/img1obb13.png')} id={13}>
                <div>
                    <strong>Obiettivo 13</strong>
                </div>
                <div>
                    Adottare misure urgeniti per combattere i cambiamenti climatici e le loro
                    conseguenze
                </div>
            </ObjectiveCover>
        </Box>
        <Box sx={{ py: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ObjectiveCard img={useImage('obb13/img2obb13.png')}>
                <Typography variant="body1" gutterBottom sx={{ xs: 'center', md: 'left' }}>
                    {body_1}
                </Typography>
            </ObjectiveCard>
        </Box>

        <ObjectiveBanner img={useImage('obb13/img3obb13.jpg')} title="Sfide mensili!" />
    </Page>
);

export default Obiettivo13;
