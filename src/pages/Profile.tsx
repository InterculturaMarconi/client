import React from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import { Avatar, Box, Button, Container, TextField, Paper, styled, useTheme } from '@mui/material';

import Page from '~/components/Page';
import { useDispatcher, useSelector } from '~/hooks/Store';
import { getUser, IUser, SignOut } from '~/reducers/user';

const RootDiv = styled('div')(({ theme }) => ({
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
}));

const Profile: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>();
    const userState = useSelector(getUser);
    const navigate = useNavigate();
    const dispatch = useDispatcher();
    const theme = useTheme();

    const [newImage, setNewImage] = React.useState(userState.user?.img ?? '');

    const onSubmit = handleSubmit(async data => {});

    const LogOut = async () => {
        dispatch(SignOut());
        navigate('/', { replace: true });
    };

    const onDrop = (data: any) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64 = (reader.result as string).replace(/^data:.+;base64,/, '');
            setNewImage(base64);
        };

        reader.readAsDataURL(data[0]);
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
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Avatar
                            sx={{ width: 100, height: 100 }}
                            alt={`${userState.user?.nome} ${userState.user?.cognome}`}
                            src={`${
                                !newImage ? '/avatar.png' : `data:image/png;base64,${newImage}`
                            }`}
                        />
                        <Dropzone onDrop={onDrop}>
                            {({ getRootProps, getInputProps, isDragActive }) => (
                                <Paper
                                    sx={{
                                        bgcolor:
                                            theme.palette.mode === 'dark' ? 'grey.900' : 'inherit',
                                    }}
                                    variant="outlined"
                                >
                                    <RootDiv {...getRootProps()}>
                                        <ImageIcon sx={{ mr: 2 }} />
                                        <input {...getInputProps()} />
                                        {isDragActive ? 'Drag file here' : 'Click or drag a file.'}
                                    </RootDiv>
                                </Paper>
                            )}
                        </Dropzone>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="contained" type="submit">
                                AGGIORNA INFORMAZIONI
                            </Button>
                            <Button variant="contained" color="error">
                                ELIMINA PROFILO
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
