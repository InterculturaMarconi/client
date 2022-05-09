import { Box, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export interface IObjectiveButton {
    id: number;
    icon: string;
}

const Icon = styled('img')(({ theme }) => ({
    width: '9rem',
    height: '9rem',
    borderRadius: '.25rem',
    transition: theme.transitions.create('box-shadow', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
    }),
    boxShadow: theme.shadows[4],
    '&:hover': {
        boxShadow: theme.shadows[8],
    },
}));

const ObjectiveButton: React.FC<IObjectiveButton> = ({ id, icon }) => (
    <Link to={`/obbiettivi/${id}`}>
        <Icon src={icon} alt={`${id}`} />
    </Link>
);

export default ObjectiveButton;
