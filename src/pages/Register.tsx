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
import React from 'react';
import { useLocation, useNavigate, Location, Link } from 'react-router-dom';
import Page from '~/components/Page';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatcher, useSelector } from '~/hooks/Store';
import { getUser, RegisterError, SignUp } from '~/reducers/user';

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

    const [isAllValid, setAllValid] = React.useState(true);
    const [isEmailValid, setEmailValid] = React.useState(true);
    const [emailHelp, setEmailHelp] = React.useState('');

    const from = location.state?.from?.pathname ?? '/';

    React.useEffect(() => {
        if (user.status === 'succeeded' && user.entity) {
            navigate(from, { replace: true });
        }

        if (user.status === 'failed' && user.error === RegisterError.EXISTS) {
            setEmailValid(false);
            setEmailHelp('Questa email è già in uso.');
        }
    }, [user.status]);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const nome = data.get('nome') as string;
        const cognome = data.get('cognome') as string;
        const email = data.get('email') as string;
        const password = data.get('password') as string;

        if ([nome, cognome, email, password].some(x => !x)) {
            setAllValid(false);
            return;
        }

        dispatch(SignUp({ nome, cognome, email, password }));
    };

    return (
        <Page title="Registrazione | InterculturaMarconi">
            <Container maxWidth="md" sx={{ my: 10 }}>
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
                    {!isAllValid && (
                        <Alert
                            severity="error"
                            sx={{
                                my: 2,
                            }}
                        >
                            Devi inserire tutti campi obligatori!
                        </Alert>
                    )}
                    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 0 }}>
                        <Grid container spacing={{ xs: 0, md: 2 }}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="nome"
                                    label="Nome"
                                    name="nome"
                                    autoComplete="nome"
                                    sx={{ my: 1 }}
                                    error={!isAllValid}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="cognome"
                                    label="Cognome"
                                    name="cognome"
                                    autoComplete="cognome"
                                    sx={{ my: 1 }}
                                    error={!isAllValid}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            sx={{ my: 1 }}
                            error={!isEmailValid || !isAllValid}
                            helperText={emailHelp}
                        />
                        <TextField
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            autoComplete="current-password"
                            type="password"
                            sx={{ my: 1 }}
                            error={!isAllValid}
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
