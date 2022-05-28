import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Divider,
    Container,
    styled,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PaletteModeButton from '~/components/PaletteModeButton';
import MenuAccountButton from '~/components/menu/MenuAccountButton';
import MenuIconButton from '~/components/menu/MenuIconButton';
import { Link } from 'react-router-dom';

interface IPage {
    name: string;
    path: string;
}

const pages: Array<IPage> = [
    { name: 'Crediti', path: '/credits' },
    // { name: 'Pricing', path: '/pricing' },
    // { name: 'Blog', path: '/blog' },
];

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

const isKeyboardEvent = (
    event: React.KeyboardEvent | React.MouseEvent,
): event is React.KeyboardEvent => event.type === 'keydown';

const Menu: React.FC<{ color?: string }> = ({ color }) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (isKeyboardEvent(event) && ['Tab', 'Shift'].includes(event.key)) {
            return;
        }

        setOpen(open);
    };

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: theme.palette.mode === 'light' && color ? color : undefined,
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ py: { xs: 1, md: 0 } }}>
                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                justifyContent: 'space-between',
                                flexGrow: 1,
                                alignItems: 'center',
                            }}
                        >
                            <IconButton onClick={toggleDrawer(!open)} sx={{ color: 'white' }}>
                                <MenuIcon />
                            </IconButton>
                            <MenuIconButton />
                            <MenuAccountButton />
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                <MenuIconButton />
                                <Box sx={{ display: 'flex', gap: 3 }}>
                                    {pages.map(page => (
                                        <StyledLink to={page.path} reloadDocument key={page.name}>
                                            {page.name.toUpperCase()}
                                        </StyledLink>
                                    ))}
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <PaletteModeButton />
                                <MenuAccountButton />
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <SwipeableDrawer
                open={open}
                anchor="left"
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                variant="temporary"
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
            >
                <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(false)}>
                    <List>
                        <ListItem>
                            <ListItemButton onClick={toggleDrawer(false)}>
                                <ListItemIcon>
                                    <CloseIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        {pages.map(page => (
                            <ListItem key={page.name}>
                                <ListItemButton
                                    component="a"
                                    href={page.path}
                                    onClick={toggleDrawer(false)}
                                >
                                    <ListItemText primary={page.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Box sx={{ display: 'flex', py: 2, px: 3 }}>
                        <PaletteModeButton />
                    </Box>
                </Box>
            </SwipeableDrawer>
        </>
    );
};

export default Menu;
