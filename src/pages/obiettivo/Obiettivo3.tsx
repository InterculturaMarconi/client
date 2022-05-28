import React from 'react';

import Page from '~/components/Page';
import ObjectivePage from '~/components/objective/ObjectivePage';
import { Typography } from '@mui/material';

const body_1 = (
    <span>
        <Typography variant="h4" gutterBottom sx={{ xs: 'center', md: 'left' }}>
            <strong>L'obiettivo</strong>
        </Typography>
        L’obiettivo di garantire una buona salute rappresenta un fattore determinante per la qualità
        della vita e il benessere delle collettività. Secondo Tedros Adhanom Ghebreyesus, direttore
        generale dell’Organizzazione Mondiale della Sanità (OMS), la salute è il bene più prezioso
        per l’individuo: determina infatti lo sviluppo dell’uomo in tutte le sue fasi, dal benessere
        psico-fisico all’accesso ai percorsi di istruzione e formazione professionale. Le persone in
        buona salute sono infatti in grado di imparare, lavorare e sostenere se stessi e le loro
        famiglie. Come altri obiettivi dell’Agenda 2030, anche questo presenta forti
        interconnessioni con aspetti socio-economici.
    </span>
);

const body_2 =
    'Sono stati fatti grandi progressi per quanto riguarda l’aumento dell’aspettativa di vita e la riduzione di alcune delle cause di morte più comuni legate alla mortalità infantile e materna. Sono stati compiuti  significativi progressi nell’accesso all’acqua pulita e all’igiene, nella riduzione della malaria, della tubercolosi, della poliomielite e della diffusione dell’HIV/AIDS. Nonostante ciò, sono necessari molti altri sforzi per sradicare completamente un’ampia varietà di malattie e affrontare numerose e diverse questioni relative alla salute, siano esse recenti o persistenti nel tempo.';
const body_3 = '';
const body_5 = (
    <span>
        <Typography variant="h4" gutterBottom sx={{ xs: 'center', md: 'left' }}>
            <strong>Traguardi da raggiungere</strong>
        </Typography>
        • Ridurre il tasso di mortalità materna globale a meno di 70 casi per ogni 100.000 bambini
        nati vivi;
        <br />• Porre fine alle morti prevenibili di neonati e bambini sotto i 5 anni di età. Tutti
        i paesi dovranno cercare di ridurre la mortalità neonatale ad almeno 12 casi per ogni 1.000
        bambini nati vivi e la mortalità dei bambini sotto i 5 anni di età ad almeno 25 per 1.000
        bambini nati vivi;
        <br />• Porre fine alle epidemie di AIDS, tubercolosi, malaria e malattie tropicali
        trascurate; combattere l’epatite, le malattie di origine idrica e le altre malattie
        trasmissibili;
        <br />• Prevenire, trattare e promuovere il benessere e la salute mentale;
        <br />• Garantire l’accesso universale ai servizi di assistenza sanitaria sessuale e
        riproduttiva, inclusa la pianificazione familiare, l’informazione, l’educazione e
        l’integrazione della salute riproduttiva nelle strategie e nei programmi nazionali;
        <br />• Sostenere la ricerca e lo sviluppo di vaccini e farmaci per le malattie
        trasmissibili e non trasmissibili che colpiscono soprattutto i paesi in via di sviluppo e
        fornire l’accesso a farmaci e vaccini essenziali ed economici;
        <br />• Aumentare considerevolmente i fondi destinati alla sanità.
    </span>
);

const Obiettivo3: React.FC = () => {
    const [isFormOpen, setFormOpen] = React.useState(false);

    const handleFormOpen = () => setFormOpen(prev => !prev);

    return (
        <Page title="Obiettivo 3 | InterculturaMarconi">
            <ObjectivePage
                title="Obiettivo 3"
                description="Garantire una vita sana e promuovere il benessere di tutti."
                backgroundObb="obb3/img1obb3.jpg"
                squareId={3}
                immagine_2="obb3/img2obb3.jpg"
                body_1={body_1}
                sottotitolo_1="Promuovere il benessere."
                body_2={body_2}
                body_3={body_3}
                body_4=""
                body_5={body_5}
                immagine_3="obb3/img3obb3.jpg"
                sottotitolo_2="I traguardi da raggiungere"
                immagine_4="obb3/img4obb3.jpg"
                sottotitolo_3=""
            />
        </Page>
    );
};

export default Obiettivo3;
