import { Box, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface IObjectiveButton {
    id: number;
    icon: string;
}

interface IIcon {
    href: string;
}

const Icon = styled('span')<IIcon>(({ theme, href }) => ({
    backgroundImage: `url(${href})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '9rem',
    height: '9rem',
    display: 'block',
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
        <Icon href={icon} />
    </Link>
);

export default ObjectiveButton;
