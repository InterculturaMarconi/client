import { Collapse, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React from 'react';
import { IForm } from './FormViewer';
import { IUser } from '~/reducers/user';
import api from '~/api';
import ResponderItem from './ResponderItem';

interface IFormItem extends IForm {}

const FormItem: React.FC<IFormItem> = ({ id, id_obiettivo, visibile_il }) => {
    const [open, setOpen] = React.useState(false);
    const [responders, setResponders] = React.useState<IUser[]>([]);

    React.useEffect(() => {
        const fetch = async () => {
            const res = await api.get(`/form/${id}/responders`);
            const { data, success } = await res.json();

            if (success) {
                setResponders(data);
            }
        };
        fetch();
    }, []);

    return (
        <>
            <ListItemButton onClick={() => setOpen(prev => !prev)} sx={{ py: 2 }}>
                <ListItemText
                    primary={`Form ${id} | Obiettivo ${id_obiettivo} | Visibile dal ${visibile_il}`}
                />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Divider />
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {responders.map(responder => (
                        <ResponderItem {...responder} form={id} key={responder.id} />
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default FormItem;
