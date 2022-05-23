import { Box, LinkProps, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export interface IObjectiveButton {
    id: number;
    icon: string;
}

const ObjectiveButton = styled(({ id, icon, ...props }: IObjectiveButton) => {
    if (id == 18) {
        return <a href="https://unric.org/it/agenda-2030/" {...props} />;
    }

    return <Link to={`/obiettivo/${id}`} reloadDocument {...props} />;
})<IObjectiveButton>(({ theme, icon }) => ({
    width: '9rem',
    height: '9rem',
    display: 'inline-block',
    borderRadius: theme.spacing(0.5),
    backgroundImage: `url(${icon})`,
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    transition: theme.transitions.create('box-shadow', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
    }),
    boxShadow: theme.shadows[4],
    '&:hover': {
        boxShadow: theme.shadows[8],
    },
}));

export default ObjectiveButton;
