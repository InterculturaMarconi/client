import { Paper, Container, Avatar, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import Page from '~/components/Page';

interface ILocation extends Location {
    state: { from?: Location } | undefined;
}

const Login: React.FC = () => {
    const location = useLocation() as ILocation;
    const navigate = useNavigate();

    const from = location.state?.from?.pathname ?? '/';

    return (
        <Page title="Login | InterculturaMarconi">
            <Container maxWidth="xs">
                <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" fontWeight={500} color="primary">
                        Entra
                    </Typography>
                    <Box component="form"></Box>
                </Paper>
            </Container>
        </Page>
    );
};

export default Login;
