import { Box, List, Typography, Divider } from '@mui/material';
import React from 'react';
import api from '~/api';
import FormItem from './FormItem';

export interface IForm {
    id: number;
    id_obiettivo: number;
    visibile_il: string;
}

const FormViewer: React.FC = () => {
    const [forms, setForms] = React.useState<IForm[]>([]);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const fetch = async () => {
            const res = await api.get('/forms');
            const { data, success } = await res.json();

            if (success) {
                setForms(data);
                setVisible(true);
            }
        };
        fetch();
    }, []);

    return visible ? (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Controlla le risposte!
            </Typography>
            <Divider />
            <List disablePadding>
                {forms.map(form => (
                    <React.Fragment key={form.id}>
                        <FormItem {...form} />
                    </React.Fragment>
                ))}
            </List>
        </Box>
    ) : null;
};

export default FormViewer;
