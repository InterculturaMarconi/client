import { Avatar, IconButton, styled, Tooltip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from '~/hooks/Store';
import { getUser } from '~/reducers/user';

const StyledLink = styled(Link)(({ theme }) => ({
    color: 'white',
    textDecoration: 'none',
    ...theme.typography.body1,
    fontWeight: 'bold',
    transition: theme.transitions.create('color', {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover': {
        color: '#e3f1ffz',
    },
}));

const MenuAccountButton: React.FC = () => {
    const userState = useSelector(getUser);

    if (!userState.user) {
        return <StyledLink to="/login">ACCEDI</StyledLink>;
    }

    return (
        <Tooltip title="Vai al profilo">
            <IconButton component="a" href="/profile" sx={{ p: 0 }}>
                <Avatar
                    alt={`${userState.user.nome} ${userState.user.cognome}`}
                    src={`${
                        !userState.user?.img
                            ? '/avatar.png'
                            : `data:image/png;base64,${userState.user?.img}`
                    }`}
                />
            </IconButton>
        </Tooltip>
    );
};

export default MenuAccountButton;
