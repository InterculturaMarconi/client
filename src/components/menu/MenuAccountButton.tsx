import { Avatar, styled, Tooltip } from '@mui/material';
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

const IconButton = styled(Link)(({ theme }) => ({
    p: '0',
    ...theme.components?.MuiIconButton,
}));

const MenuAccountButton: React.FC = () => {
    const userState = useSelector(getUser);

    if (!userState.user) {
        return (
            <StyledLink to="/login" reloadDocument>
                ACCEDI
            </StyledLink>
        );
    }

    return (
        <Tooltip title="Vai al profilo">
            <IconButton to="/profile" reloadDocument>
                <Avatar
                    alt={`${userState.user.nome} ${userState.user.cognome}`}
                    src={`${!userState.user?.img ? '/avatar.png' : `${userState.user?.img}`}`}
                />
            </IconButton>
        </Tooltip>
    );
};

export default MenuAccountButton;
