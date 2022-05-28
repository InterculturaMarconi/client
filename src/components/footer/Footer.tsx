import React from 'react';
import { Box } from '@mui/system';
import { Grid, styled, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FooterTitle from '~/components/footer/FooterTitle';
import FooterContent from '~/components/footer/FooterContent';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useImage } from '~/hooks/Image';
import FooterSocialLink from './FooterSocialLink';

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

const StyledImg = styled('img')(({ theme }) => ({
    maxWidth: theme.spacing(32),
    [theme.breakpoints.down('sm')]: {
        maxWidth: theme.spacing(14),
    },
}));

const pages = [
    { page: 'Home', link: '/' },
    { page: 'Crediti', link: '/credits' },
    // { page: 'Pricing', link: '/pricing' },
    // { page: 'Blog', link: '/blog' },
];

const Footer: React.FC<{ color?: string }> = ({ color }) => {
    const theme = useTheme();
    const bgcolor = theme.palette.mode === 'dark' ? '#39393D' : color ? color : '#007bb8';

    return (
        <Box
            sx={{
                bgcolor,
                mt: 'auto',
                width: '100%',
                height: 'max-content',
                py: 13,
                color: 'white',
            }}
            component="footer"
        >
            <Grid
                container
                sx={{
                    mx: 'auto',
                    px: { xs: 4, md: '0' },
                    maxWidth: { md: '60rem !important', lg: '70rem !important' },
                    width: '100%',
                    height: '100%',
                }}
                justifyContent="space-between"
                flexDirection={{ xs: 'column', md: 'row' }}
            >
                <Grid
                    item
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'row', md: 'column' },
                        justifyContent: 'space-around',
                        alignItems: 'left',
                    }}
                >
                    <StyledImg src={useImage('Logo_Marconi_Vet.svg')} alt="LOGO" />
                    <Typography variant="body2" sx={{ my: 'auto' }}>
                        &copy; {new Date().getFullYear()} InterculturaMarconi
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    sx={{
                        mt: { xs: 6, md: '0' },
                        pr: { xs: 0, md: 10, lg: 5 },
                        width: { xs: '100%', md: '60%' },
                    }}
                    columns={{ xs: 11, md: 12 }}
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
                        <StyledLink to="/privacy">Informativa Privacy</StyledLink>
                        <StyledLink to="/tou">Termini di Utilizzo</StyledLink>
                    </FooterContent>
                    <FooterContent sx={{ mt: { xs: 3, md: 0 } }}>
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
