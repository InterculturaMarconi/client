import {
    Box,
    Button,
    Modal,
    Paper,
    Typography,
    styled,
    Fade,
    Backdrop,
    TextField,
} from '@mui/material';
import React from 'react';
import api from '~/api';

const ModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

interface IObjectiveForm {
    id: number;
}

interface IQuestion {
    id: number;
    testo: string;
    tipo: number;
}

const ObjectiveForm: React.FC<IObjectiveForm> = ({ id }) => {
    const [isOpen, setOpen] = React.useState(false);
    const [questions, setQuestions] = React.useState<IQuestion[]>([]);

    React.useEffect(() => {
        const fetch = async () => {
            const form = await api.get(`/forms/${id}/visible`);
            const formData = await form.json();

            if (!formData.success) {
                return;
            }

            const res = await api.get(`/form/${formData.data.id}/questions`);
            const { data, success } = await res.json();

            if (!success) {
                return;
            }

            setQuestions(data);
        };

        fetch();
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                py: 5,
                gap: 3,
            }}
        >
            <Typography variant="h4">Pronto a farci sapere la tua?</Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>
                COMPILA IL QUESTIONARIO
            </Button>
            <Modal
                open={isOpen}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpen}>
                    <ModalBox>
                        <Paper sx={{ p: 4 }} elevation={4}>
                            <Box
                                component="form"
                                sx={{
                                    width: '20vw',
                                    display: 'flex',
                                    gap: 2,
                                    flexDirection: 'column',
                                }}
                            >
                                {questions.map(({ id, testo, tipo }) => (
                                    <Box>
                                        <Typography variant="body1" gutterBottom>
                                            {testo}
                                        </Typography>
                                        <TextField variant="outlined" key={id} fullWidth />
                                    </Box>
                                ))}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Button variant="outlined">INVIA</Button>
                                    <Button
                                        variant="text"
                                        color="secondary"
                                        onClick={() => setOpen(false)}
                                    >
                                        CHIUDI
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </ModalBox>
                </Fade>
            </Modal>
        </Box>
    );
};

export default ObjectiveForm;
