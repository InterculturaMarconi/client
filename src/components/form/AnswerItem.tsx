import { Divider, ListItem, ListItemText } from '@mui/material';
import React from 'react';

export interface IAnswerItem {
    id_risposta: number;
    id_utente: number;
    id_domanda: number;
    testo: string;
    i: number;
}

const AnswerItem: React.FC<IAnswerItem> = ({ i, testo }) => {
    return (
        <>
            <ListItem sx={{ pl: 9, py: 2 }}>
                <ListItemText primary={`${i + 1}. ${testo}`} />
            </ListItem>
            <Divider sx={{ ml: 7 }} />
        </>
    );
};

export default AnswerItem;
