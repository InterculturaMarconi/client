import React from 'react';
import { Box } from '@mui/system';
import { Grid, styled, Typography, TypographyProps, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import FooterTitle from '~/components/footer/FooterTitle';
import FooterContent from '~/components/footer/FooterContent';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                        <FooterTitle>Informazioni</FooterTitle>
                        <StyledLink to="/privacy">Infromativa Privacy</StyledLink>
                        <StyledLink to="/tou">Termini di Utilizzo</StyledLink>
                    </FooterContent>
                    <FooterContent>
                        <FooterTitle>Supporto</FooterTitle>
                        <Typography variant="body1" fontWeight={700}>
                            Inviaci una mail:
                        </Typography>
                        <FooterSocialLink size="medium" href="mailto:interculturamarconi@gmail.com">
                            interculturamarconi@gmail.com
                        </FooterSocialLink>
                        <Grid
                            item
                            sx={{
                                mt: 3,
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <FooterSocialLink size="big" href="">
                                <FontAwesomeIcon icon={faInstagram} />
                            </FooterSocialLink>
                            <FooterSocialLink
                                size="big"
                                href="https://github.com/InterculturaMarconi"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </FooterSocialLink>
                        </Grid>
                    </FooterContent>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
