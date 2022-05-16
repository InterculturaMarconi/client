import { Avatar, Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Page from '~/components/Page';
import { useDispatcher, useSelector } from '~/hooks/Store';
import { getUser, IUser, SignOut } from '~/reducers/user';

const Profile: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>();
    const userState = useSelector(getUser);
    const navigate = useNavigate();
    const dispatch = useDispatcher();

    const onSubmit = handleSubmit(async data => {});

    const LogOut = async () => {
        dispatch(SignOut());
        navigate('/', { replace: true });
    };

    return (
        <Page title={`${userState.user?.nome} ${userState.user?.cognome} | InterculturaMarconi`}>
            <Container maxWidth="sm" sx={{ my: 10, px: { xs: 3, md: 0 } }}>
                <Box
                    component="form"
                    onSubmit={onSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}
                >
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            fullWidth
                            label="Nome"
                            autoComplete="nome"
                            {...register('nome', { value: userState.user?.nome })}
                        />
                        <TextField
                            fullWidth
                            label="Cognome"
                            autoComplete="cognome"
                            {...register('cognome', { value: userState.user?.cognome })}
                        />
                    </Box>
                    <Box>
                        <Avatar
                            sx={{ width: 100, height: 100 }}
                            alt={`${userState.user?.nome} ${userState.user?.cognome}`}
                            src={`${
                                !userState.user?.img
                                    ? '/avatar.png'
                                    : `data:image/png;base64,${userState.user?.img}`
                            }`}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="contained" type="submit">
                                AGGIORNA
                            </Button>
                            <Button variant="contained" color="error">
                                ELIMINAMI
                            </Button>
                        </Box>
                        <Button variant="outlined" onClick={LogOut}>
                            ESCI
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Page>
    );
};

export default Profile;
