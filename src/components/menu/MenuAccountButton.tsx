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
    const state = useSelector(getUser);

    if (!state.user) {
        return <StyledLink to="/login">ACCEDI</StyledLink>;
    }

    return (
        <Tooltip title="Vai al profilo">
            <IconButton component="a" href="/profile" sx={{ p: 0 }}>
                <Avatar
                    alt={`${state.user.nome} ${state.user.cognome}`}
                    src="static/images/avatar/2.jpg"
                />
            </IconButton>
        </Tooltip>
    );
};

export default MenuAccountButton;
