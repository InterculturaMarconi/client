import { Typography } from '@mui/material';
import React from 'react';

import Page from '~/components/Page';
import ObjectiveCard from '~/components/objective/ObjectiveCard';
import ObjectivePage from '~/components/objective/ObjectivePage';
import ObjectiveGridData from '~/components/objective/ObjectiveGridData';
import { useImage } from '~/hooks/Image';
import { Box } from '@mui/material';
import ObjectiveBanner from '~/components/objective/ObjectiveBanner';
import ObjectiveCover from '~/components/objective/ObjectiveCover';

const body_1 = (
    <span>
        <Typography variant="h4" gutterBottom sx={{ xs: 'center', md: 'left' }}>
            <strong>Migliorare l'alimentazione</strong>
        </Typography>
        Avere un alimentazione corretta è molto importante dato che ci fa rimanere in forma e in
        ottima salute. Oggi giorno molte persone non danno peso alla loro dieta mangiando cibo
        spazzatura senza pensare agli effetti negativi. Alcuni studiosi dicono che mangiare cibi con
        grassi saturi alza sicuramente il colesterolo e comporta altri disturbi come stress e
        tachicardia, portando anche a forme di obesità.
        <br />
        <br />
        <Typography variant="h5" gutterBottom sx={{ xs: 'center', md: 'left' }}>
            <strong>Consigli</strong>
        </Typography>
        Avere un’alimentazione corretta è fondamentale anche quando ci troviamo in un paese
        straniero con una famiglia che ci ospita e far vedere la propria educazione alimentare può
        essere molto importante agli occhi del nuovo nucleo familiare.{' '}
    </span>
);
const body_2 = (
    <span>
        Con il termine di agricoltura sostenibile si intende un'agricoltura rispettosa non solo
        delle risorse naturali ma anche del lavoratore e produttore. Il concetto di agricoltura
        sostenibile può essere visto dal punto di vista ambientale, intendendo un'agricoltura
        rispettosa delle risorse naturali quali acqua, fertilità del suolo, biodiversità e che non
        utilizzi sostanze chimiche inquinanti. Si può parlare di agricoltura sostenibile dal punto
        di vista sociale, cioè la capacità dell'intera produzione agroalimentare mondiale di far
        fronte alla domanda globale, non solo dei paesi industrializzati, ma anche di quelli in via
        di sviluppo. oppure intenderla dal punto di vista economico, cioè vantaggiosa per
        l'agricoltore favorendo un reddito equo, la tutela della salute dell'operatore e il
        miglioramento della qualità della vita degli agricoltori e dell'intera società. Gli
        obiettivi dell'agricoltura sono migliorare le condizioni di vita e promuovere opportunità di
        sviluppo per i produttori, proteggere i diritti umani.
    </span>
);
const body_3 = (
    <span>
        <Typography variant="h5" gutterBottom sx={{ xs: 'center', md: 'left' }}>
            Consigli
        </Typography>
    </span>
);
const body_4 = (
    <span>
        Scegliere un tipo di agricoltura sostenibile nella nostra alimentazione anche quando ci si
        trova in un paese estero è molto importante, non solo per noi stessi, ma anche per tutto il
        sistema economico e di sviluppo del paese in questione.{' '}
    </span>
);
const body_5 = (
    <span>
        Quando parliamo di sicurezza alimentare parliamo del riuscir a garantire le giuste dosi di
        acqua e cibo in modo sicuro, igienico, costante ed omogeneo a tutta la popolazione. La
        sicurezza alimentare è strettamente legata anche allo scopo principale dell’obiettivo 2,
        cioè porre fine alla fame. Si stima che entro il 2050 la produzione di cibo sarà raddoppiata
        data la grande domanda di esso a livello mondiale.
    </span>
);
const body_6 = (
    <span>
        Cercare assolutamente di non sprecare alimenti e bevande in nessun contesto, data la loro
        importanza e la fortuna che si ha nel poterne usufruire.
        <br />
        <br />
        <br />
        --add quiz
    </span>
);
const Obiettivo6: React.FC = () => (
    <Page title="Obiettivo 6 | InterculturaMarconi">
        <ObjectivePage
            title="Obiettivo 6"
            description="Acqua pulita e servizi igenico-sanitari"
            backgroundObb="obb6/img1obb6.jpg"
            squareId={6}
            immagine_2="obb2/img2obb2.png"
            body_1={body_1}
            sottotitolo_1="Agricoltura sostenibile"
            body_2={body_2}
            body_3={body_3}
            body_4={body_4}
            body_5={body_5}
            immagine_3="obb2/img3obb2.jpg"
            sottotitolo_2="Sicurezza alimentare e porre fine alla fame"
            immagine_4="obb2/img4obb2.jpg"
            sottotitolo_3=" "
        />
        <Box sx={{ py: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ObjectiveCard img={useImage('obb2/img5obb2.jpg')}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="h4" gutterBottom fontWeight={500}>
                        <strong>Consigli</strong>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {body_6}
                    </Typography>
                </Box>
            </ObjectiveCard>
        </Box>
        <ObjectiveGridData
            num1="circa 1000"
            text1="I bambini che muoiono ogni giorno per malattie legate all'acqua e all'igiene"
            num2="1,8 miliardi"
            text2="Le persone che utilizzano fonti d'acqua potabile contaminate"
            num3="40%"
            text3="Popolazione globale colpita dalla scarsità d'acqua"
            num4="2,4 miliardi"
            text4="Persone che non dispongono di servizi igienici di base"
        />
        <ObjectiveBanner
            img={useImage('obb6/img7obb6.jpg')}
            title={
                <span>
                    <Typography variant="h3" gutterBottom sx={{ xs: 'center', md: 'left' }}>
                        <strong>Sull'Italia</strong>
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ xs: 'center', md: 'left' }}>
                        Di seguito verranno riportati i progressi dell'Italia sull'Obiettivo 6, per
                        comprendere la nostra realtà e usarla come metro di comparazione per capire
                        meglio le situazioni estere.
                    </Typography>
                </span>
            }
        />
        <Box sx={{ mt: 4 }}>
            <ObjectiveGridData
                num1="96%"
                text1="Delle persone utilizza un servizio di acqua potabile gestito in sicurezza"
                num2="96%"
                text2="Delle persone utilizza servizi igienici gestiti in sicurezza"
                num3="95%"
                text3="Delle acque domestiche reflue è trattato in sicurezza"
                num4="49$/m³"
                text4="È il valore risparmiato dalle famiglie e dall'economia italiana"
            />
            <ObjectiveGridData
                num1="30%"
                text1="Delle risorse idriche rinnovabili viene ritirato, tenendo conto delle esigenze di flusso ambientale"
                num2="77%"
                text2="È il livello di attuazione della gestione integrata delle risorse idriche"
                num3="100%"
                text3="Dell'area del bacino transfrontaliero dispone di un accordo per la cooperazione idrica"
                num4="8%"
                text4="Dei bacini idrici italiani sta subendo rapidi cambiamenti nell'area coperta dalle acque superficiali"
            />
        </Box>
    </Page>
);

export default Obiettivo6;
