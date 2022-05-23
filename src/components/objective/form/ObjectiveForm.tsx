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
import { useForm, UseFormRegisterReturn } from 'react-hook-form';
import api from '~/api';
import ObjectiveText from './ObjectiveText';
import ObjectiveRadio from './ObjectiveRadio';

const ModalBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

interface IQuestion {
    id: number;
    testo: string;
    tipo: number;
}

export type InputProps = IQuestion & UseFormRegisterReturn;

const ObjectiveForm: React.FC<{ id: number }> = ({ id }) => {
    const [isOpen, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();
    const [hasPermission, setPermission] = React.useState(false);
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

            const roles = await api.get(`/user/${id}/roles`);
            const rolesData = await roles.json();

            if (!rolesData.success) {
                return;
            }

            const role = rolesData.data.find(
                (role: Record<string, unknown>) =>
                    role.denominazione === 'admin' ||
                    role.denominazione === `obiettivo_${id}` ||
                    role.denominazione === `obiettivo_${id}_admin`,
            );

            setPermission(!!role);
        };

        fetch();
    }, []);

    const onSubmit = handleSubmit(() => {});

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
            <Button variant="contained" disabled={!hasPermission} onClick={() => setOpen(true)}>
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
                                    width: { xs: '90vw', md: '75vw', lg: '50vw' },
                                    display: 'flex',
                                    gap: 2,
                                    flexDirection: 'column',
                                }}
                                onSubmit={onSubmit}
                            >
                                {questions.map(btn => (
                                    <Box key={btn.id}>
                                        {btn.tipo === 1 ? (
                                            <ObjectiveText {...btn} {...register('')} />
                                        ) : (
                                            <ObjectiveRadio {...btn} {...register('')} />
                                        )}
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
