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
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import { useLocation, useNavigate, Location, Link } from 'react-router-dom';
import Page from '~/components/Page';
import { useDispatcher, useSelector } from '~/hooks/Store';
import { getUser, SignIn } from '~/reducers/user';

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

    const from = location.state?.from?.pathname ?? '/';

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const email = data.get('email') as string;
        const password = data.get('password') as string;

        dispatch(SignIn({ email, password }));
    };

    React.useEffect(() => {
        if (user.status === 'succeeded' && user.entity) {
            navigate(from, { replace: true });
        }
    }, [user.status]);

    return (
        <Page title="Login | InterculturaMarconi">
            <Container maxWidth="sm" sx={{ my: { xs: 6, md: 'auto' } }}>
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
                        Accedi
                    </Typography>
                    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            sx={{ my: 1 }}
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
