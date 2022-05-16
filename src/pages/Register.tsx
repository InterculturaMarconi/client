import React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    styled,
    Avatar,
    Alert,
} from '@mui/material';
import { useLocation, useNavigate, Location, Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';

import Page from '~/components/Page';
import { useDispatcher, useSelector } from '~/hooks/Store';
import { getUser, IRegister, UserError, SignUp } from '~/reducers/user';

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    ...theme.typography.body2,
    transition: theme.transitions.create('color', {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover': {
        color: theme.palette.primary.light,
    },
}));

interface ILocation extends Location {
    state: { from?: Location } | undefined;
}

const Register: React.FC = () => {
    const location = useLocation() as ILocation;
    const navigate = useNavigate();
    const dispatch = useDispatcher();
    const user = useSelector(getUser);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IRegister>();

    const from = location.state?.from?.pathname ?? '/';

    React.useEffect(() => {
        if (user.status === 'loged') {
            navigate(from, { replace: true });
        }

        if (user.status === 'failed' && user.error === UserError.ALREADY_REGISTERED) {
            setError('email', { type: 'manual', message: 'Questa email è già stata utilizzata!' });
        }
    }, [user.status]);

    const onSubmit = async (data: IRegister) => {
        dispatch(SignUp(data));
    };

    return (
        <Page title="Registrazione | InterculturaMarconi">
            <Container maxWidth="sm" sx={{ my: 10 }}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        px: 2,
                        py: 4,
                    }}
                    elevation={3}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" fontWeight={500}>
                        Registrazione
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <Grid container spacing={{ xs: 0, md: 2 }}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Nome"
                                    autoComplete="nome"
                                    sx={{ my: 1 }}
                                    required
                                    error={!!errors.nome}
                                    helperText={errors.nome?.message || ' '}
                                    {...register('nome', {
                                        required: {
                                            value: true,
                                            message: 'Questo campo è obbligatorio.',
                                        },
                                    })}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Cognome"
                                    autoComplete="cognome"
                                    required
                                    sx={{ my: 1 }}
                                    error={!!errors.cognome}
                                    helperText={errors.cognome?.message || ' '}
                                    {...register('cognome', {
                                        required: {
                                            value: true,
                                            message: 'Questo campo è obbligatorio.',
                                        },
                                    })}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            label="Email"
                            autoComplete="email"
                            required
                            sx={{ my: 1 }}
                            error={!!errors.email}
                            helperText={errors.email?.message || ' '}
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Questo campo è obbligatorio.',
                                },
                                pattern: {
                                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                    message: "L'email inserita non ha un formato valido!",
                                },
                            })}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            autoComplete="current-password"
                            type="password"
                            required
                            sx={{ my: 1 }}
                            error={!!errors.password}
                            helperText={errors.password?.message || ' '}
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Questo campo è obbligatorio.',
                                },
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                    message: 'La password deve ...',
                                },
                            })}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
                            Entra
                        </Button>
                        <Grid container sx={{ mt: 2 }}>
                            <Grid item>
                                <StyledLink to="/login">Hai già un account? Accedi!</StyledLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Page>
    );
};

export default Register;
