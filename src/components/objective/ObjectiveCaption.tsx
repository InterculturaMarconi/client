import { Box, Container, SxProps } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Theme } from '@mui/system';

export interface IObjectiveCaption {
    sx?: SxProps<Theme>;
    title: string;
    children: React.ReactNode;
}

const ObjectiveCaption: React.FC<IObjectiveCaption> = ({ children, sx, title }) => {
    return (
        <Container fixed sx={sx}>
            <Divider variant="middle" color="white" />
            <Box
                sx={{
                    py: 4,
                    px: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {children}
            </Box>
            <Divider variant="middle" color="white" />
        </Container>
    );
};
export default ObjectiveCaption;
