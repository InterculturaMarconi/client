import React from 'react';
import {
    Paper,
    Container,
    Avatar,
    Typography,
    Box,
    TextField,
    Button,
    Grid,
    styled,
    Alert,
    Collapse,
} from '@mui/material';
import { useLocation, useNavigate, Location, Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';

import Page from '~/components/Page';
import { useDispatcher, useSelector } from '~/hooks/Store';
import { getUser, SignIn, ILogin, UserError } from '~/reducers/user';

interface ILocation extends Location {
    state: { from?: Location } | undefined;
}

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

const Login: React.FC = () => {
    const location = useLocation() as ILocation;
    const navigate = useNavigate();
    const dispatch = useDispatcher();
    const user = useSelector(getUser);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<ILogin>();

    const from = location.state?.from?.pathname ?? '/';

    const onSubmit = async (data: ILogin) => {
        await dispatch(SignIn(data));
    };

    React.useEffect(() => {
        if (user.status === 'loged') {
            navigate(from, { replace: true });
        }

        if (user.status === 'failed' && user.error === UserError.INVALID_BODY) {
            setError('email', { type: 'manual' });
            setError('password', { type: 'manual' });
        }
    }, [user.status]);

    return (
        <Page title="Login | InterculturaMarconi">
            <Container maxWidth="sm" sx={{ my: 10 }}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        px: 4,
                        py: 4,
                    }}
                    elevation={3}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" fontWeight={500}>
                        Accedi
                    </Typography>
                    <Collapse in={errors.email && errors.email.type === 'manual'}>
                        <Alert severity="error" sx={{ mt: 1 }}>
                            L'email o la password sono invalide!
                        </Alert>
                    </Collapse>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            required
                            fullWidth
                            label="Email"
                            autoComplete="email"
                            sx={{ my: 1 }}
                            error={!!errors.email}
                            helperText={errors.email?.message || ' '}
                            {...register('email', {
                                required: { value: true, message: 'Questo campo è obbligatorio.' },
                                pattern: {
                                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                    message: "L'email inserita non ha un formato valido!",
                                },
                            })}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Password"
                            autoComplete="current-password"
                            type="password"
                            sx={{ my: 1 }}
                            error={!!errors.password}
                            helperText={errors.password?.message || ' '}
                            {...register('password', {
                                required: { value: true, message: 'Questo campo è obbligatorio.' },
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
                            {/* <Grid item xs>
                                <StyledLink to="/">Password dimenticata?</StyledLink>
                            </Grid> */}
                            <Grid item>
                                <StyledLink to="/register">
                                    Non hai un account? Iscriviti.
                                </StyledLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Page>
    );
};

export default Login;
