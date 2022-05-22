import React from 'react';

import Page from '~/components/Page';
import ObjectivePage from '~/components/objective/ObjectivePage';

const body_1 =
    "La povertà è un fenomeno altamente complesso, che riguarda diverse sfere della vita di una persona e che non può essere semplicemente calcolato sulla base del reddito. L'Agenda 2030 pone come primo target l'eradicazione della povertà estrema, ovvero di persone che vivono con meno di 1,25 dollari al giorno. Ma oltre a questa dimensione, il rischio di povertà si manifesta in molte forme (disoccupazione, salari bassi, basso livello di istruzione) e causa una bassa capacità di partecipazione alle decisioni politiche e, più in generale, un alto rischio di esclusione sociale.";
const body_2 =
    'Nel mondo ancora oggi più di 700 milioni di persone vivono sotto la soglia di povertà estrema, che rappresenta quasi il 10% della popolazione mondiale. Vivere in estrema povertà significa, oltre a non potersi procurare i beni di prima necessità, non avere nemmeno accesso a servizi essenziali come sanità, educazione, o semplicemente acqua potabile.';
const body_3 =
    'Perciò quando si viaggia andando in paesi esteri, confrontandosi con nuove culture e stili di vita diversi, è bene che si conoscano non soltanto gli aspetti positivi, ma anche quelli negativi come la povertà, perché ci fanno crescere maggiormente, acquisendo più consapevolezza del mondo che ci circonda, guardandolo con più prospettive.';
const body_5 =
    'Entro il 2030, ridurre almeno della metà la quota di uomini, donne e bambini di tutte le età che vivono in povertà in tutte le sue forme, secondo le definizioni nazionali Implementare a livello nazionale adeguati sistemi di protezione sociale e misure di sicurezza per tutti, compresi i livelli più bassi, ed entro il 2030 raggiungere una notevole copertura delle persone povere e vulnerabili';
const Obiettivo1: React.FC = () => {
    const [isFormOpen, setFormOpen] = React.useState(false);

    const handleFormOpen = () => setFormOpen(prev => !prev);

    return (
        <Page title="Obiettivo 1 | InterculturaMarconi">
            <ObjectivePage
                title="Obiettivo 1"
                description="Sconfiggere la povertà"
                backgroundObb="obb1/img1obb1.png"
                squareId={1}
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
};

export default Obiettivo1;
