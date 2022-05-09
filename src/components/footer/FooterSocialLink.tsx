import React from 'react';
import { styled } from '@mui/material';

interface SocialLinkProps {
    size: 'big' | 'medium';
}

const FooterSocialLink = styled('a')<SocialLinkProps>(({ theme, size }) => ({
    ...theme.typography[size === 'big' ? 'h5' : 'body1'],
    marginRight: theme.spacing(1.5),
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    transition: theme.transitions.create('color', {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover': {
        color: '#e3f1ff',
    },
}));

export default FooterSocialLink;
