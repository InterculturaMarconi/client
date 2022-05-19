import React from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import {
    Avatar,
    Box,
    Button,
    Container,
    TextField,
    Paper,
    styled,
    useTheme,
    Typography,
} from '@mui/material';

import Page from '~/components/Page';
import { useDispatcher, useSelector } from '~/hooks/Store';
import { getUser, SignOut, Update } from '~/reducers/user';

const RootDiv = styled('div')(({ theme }) => ({
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    flexGrow: 2,
    height: '100px',
}));

const Profile: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{
        nome?: string;
        cognome?: string;
    }>();

    const userState = useSelector(getUser);
    const navigate = useNavigate();
    const dispatch = useDispatcher();
    const theme = useTheme();

    const [newImage, setNewImage] = React.useState(userState.user?.img || '');

    const onSubmit = handleSubmit(async data => {
        if (!userState.user) return;

        const body: Record<string, string> = {};

        if (data.nome && data.nome !== userState.user.nome) {
            body['nome'] = data.nome;
        }

        if (data.cognome && data.cognome !== userState.user.cognome) {
            body['cognome'] = data.cognome;
        }

        if (newImage && newImage !== userState.user.img) {
            body['img'] = newImage;
        }

        await dispatch(Update({ id: userState.user.id, body }));
    });

    const LogOut = async () => {
        dispatch(SignOut());
        navigate('/', { replace: true });
    };

    const onDrop = (data: any) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64 = reader.result as string;
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
                    <Box
                        sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}
                    >
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
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            flexDirection: { xs: 'column', md: 'row' },
                        }}
                    >
                        <Avatar
                            sx={{ width: 100, height: 100 }}
                            alt={`${userState.user?.nome} ${userState.user?.cognome}`}
                            src={`${!newImage ? '/avatar.png' : `${newImage}`}`}
                        />
                        <Dropzone
                            onDrop={onDrop}
                            accept={{
                                'image/png': ['.png'],
                                'image/gif': ['.jpeg', '.jpg'],
                                'image/jpg': ['.gif'],
                            }}
                            minSize={0}
                            maxFiles={1}
                        >
                            {({ getRootProps, getInputProps, isDragActive, fileRejections }) => (
                                <Paper
                                    sx={{
                                        bgcolor:
                                            theme.palette.mode === 'dark' ? 'grey.900' : 'inherit',
                                        flexGrow: 1,
                                    }}
                                    variant="outlined"
                                >
                                    <RootDiv {...getRootProps()}>
                                        <ImageIcon sx={{ mr: 2 }} />
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                            <Typography>Rilascia il file qui.</Typography>
                                        ) : (
                                            <Typography>
                                                Clicca per selezionare un file o trascinalo.
                                            </Typography>
                                        )}
                                    </RootDiv>
                                </Paper>
                            )}
                        </Dropzone>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'flex-start', md: 'space-between' },
                            gap: 2,
                            flexDirection: { xs: 'column', md: 'row' },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                flexDirection: { xs: 'column', md: 'row' },
                            }}
                        >
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
