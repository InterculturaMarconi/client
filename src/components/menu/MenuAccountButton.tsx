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
    const user = useSelector(getUser);

    if (!user.entity) {
        return <StyledLink to="/login">ENTRA</StyledLink>;
    }

    return (
        <Tooltip title="Open settings">
            <IconButton component="a" href="/profile" sx={{ p: 0 }}>
                <Avatar
                    alt={`${user.entity.nome} ${user.entity.cognome}`}
                    src="static/images/avatar/2.jpg"
                />
            </IconButton>
        </Tooltip>
    );
};

export default MenuAccountButton;
