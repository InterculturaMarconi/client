import { Box, Typography } from '@mui/material';
import React from 'react';
import ObjectiveCaption from '~/components/objective/ObjectiveCaption';
import ObjectiveCard from '~/components/objective/ObjectiveCard';
import { useImage } from '~/hooks/Image';

const Test: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            <ObjectiveCaption>
                <Typography variant="h2" gutterBottom>
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
        </Box>
    );
};

export default Test;
