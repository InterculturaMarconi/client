import {
    ListItemButton,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Collapse,
    List,
    Divider,
} from '@mui/material';
import React from 'react';
import { IUser } from '~/reducers/user';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AnswerItem, { IAnswerItem } from './AnswerItem';
import api from '~/api';

interface IResponderItem extends IUser {
    form: number;
}

const ResponderItem: React.FC<IResponderItem> = ({ form, id, nome, cognome, img }) => {
    const [open, setOpen] = React.useState(false);
    const [anwsers, setAnswers] = React.useState<IAnswerItem[]>([]);

    React.useEffect(() => {
        const fetch = async () => {
            const res = await api.get(`/form/${form}/answers/${id}`);
            const { data, success } = await res.json();

            if (success) {
                setAnswers(data);
            }
        };
        fetch();
    }, []);

    return (
        <>
            <ListItemButton onClick={() => setOpen(prev => !prev)} sx={{ pl: 5, py: 2 }}>
                <ListItemAvatar>
                    <Avatar alt={`${nome} ${cognome}`} src={`${!img ? '/avatar.png' : `${img}`}`} />
                </ListItemAvatar>
                <ListItemText primary={`${nome} ${cognome}`} />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Divider sx={{ ml: 3 }} />
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {anwsers.map((answer, i) => (
                        <AnswerItem {...answer} i={i} key={answer.id_risposta} />
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default ResponderItem;
