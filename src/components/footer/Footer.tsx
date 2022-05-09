import React from 'react';
import { Box } from '@mui/system';
import { Grid, styled, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import FooterTitle from '~/components/footer/FooterTitle';
import FooterContent from '~/components/footer/FooterContent';

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
        color: '#e3f1ff',
    },
}));

const pages = [
    { page: 'Home', link: '/' },
    { page: 'Products', link: '/products' },
    { page: 'Pricing', link: '/pricing' },
    { page: 'Blog', link: '/blog' },
];

const Footer: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                position: 'absolute',
                bottom: 0,
                width: '100vw',
                height: '20rem',
                py: '3.5rem',
                color: 'white',
            }}
            component="footer"
        >
            <Grid
                container
                sx={{
                    mx: 'auto',
                    px: { xs: '1.25rem', md: '0' },
                    maxWidth: { md: '60rem !important', lg: '70rem !important' },
                    width: '100%',
                    height: '100%',
                }}
                justifyContent="space-between"
                flexDirection={{ xs: 'column', md: 'row' }}
            >
                <Grid item>
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} InterculturaMarconi
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    sx={{
                        mt: { xs: '1.5rem', md: '0' },
                        width: { xs: '100%', md: '60%' },
                    }}
                    justifyContent="space-between"
                >
                    <FooterContent>
                        <FooterTitle>Sezioni</FooterTitle>
                        {pages.map(({ page, link }) => (
                            <StyledLink key={page} to={link}>
                                {page}
                            </StyledLink>
                        ))}
                    </FooterContent>
                    <FooterContent>
                        <FooterTitle>Testo a caso</FooterTitle>
                    </FooterContent>
                    <FooterContent>
                        <FooterTitle>Supporto</FooterTitle>
                        <StyledLink to="mailto:interculturamarconi@gmail.com">
                            interculturamarconi@gmail.com
                        </StyledLink>
                        <Grid
                            item
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        ></Grid>
                    </FooterContent>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
