import * as React from 'react';
import { useTheme, Card, CardContent, CardMedia, Box } from '@mui/material';

export interface IObjectiveCard {
    img?: string;
    children: React.ReactNode;
}

const ObjectiveCard: React.FC<IObjectiveCard> = ({ children, img }) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                minWidth: { xs: '90%', md: '30%' },
                maxWidth: '55%',
                borderRadius: 2,
                // backgroundColor: theme.palette.mode === 'dark' ? '#045389' : 'inherit',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
                    alignItems: 'center',
                    py: { xs: 2, md: 3 },
                    px: { xs: 1, md: 3 },
                    gap: { xs: 2, md: 4 },
                }}
            >
                <CardMedia
                    component="img"
                    image={img}
                    sx={{
                        borderRadius: 1,
                        maxWidth: '18rem',
                        // borderColor: 'text.secondary',
                        // borderStyle: 'solid',
                        // borderWidth: theme.palette.mode === 'dark' ? '2px' : 0
                    }}
                />
                <CardContent>{children}</CardContent>
            </Box>
        </Card>
    );
};
export default ObjectiveCard;
