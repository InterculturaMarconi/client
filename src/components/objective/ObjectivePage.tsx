import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@mui/system';

import ObjectiveCover from '~/components/objective/ObjectiveCover';
import { useImage } from '~/hooks/Image';
import ObjectiveCard from '~/components/objective/ObjectiveCard';
import { Container, Typography } from '@mui/material';
import ObjectiveBanner from '~/components/objective/ObjectiveBanner';
import ObjectiveCaption from '~/components/objective/ObjectiveCaption';

interface IObjectivePage {
    title: string;
    description: string;
    backgroundObb: string;
    squareId: number;
    immagine_2: string;
    body_1: string;
    sottotitolo_1: string;
    body_2: string;
    body_3: string;
    body_4: string;
    immagine_3: string;
    sottotitolo_2: string;
    immagine_4: string;
    sottotitolo_3: string;
    body_5: string;
}

const ObjectivePage: React.FC<IObjectivePage> = ({
    title,
    description,
    backgroundObb,
    squareId,
    immagine_2,
    body_1,
    sottotitolo_1,
    body_2,
    body_3,
    body_4,
    immagine_3,
    sottotitolo_2,
    immagine_4,
    sottotitolo_3,
    body_5,
}) => {
    return (
        <Box>
            <ObjectiveCover img={useImage(backgroundObb)} id={squareId}>
                <div>
                    <strong>{title}</strong>
                </div>
                <div>{description}</div>
            </ObjectiveCover>
            <Box sx={{ py: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ObjectiveCard img={useImage(immagine_2)}>
                    <Typography variant="body1" gutterBottom sx={{ xs: 'center', md: 'left' }}>
                        {body_1}
                    </Typography>
                </ObjectiveCard>
            </Box>
            <ObjectiveCaption sx={{ p: 4, color: 'white' }} title={sottotitolo_1}>
                <Typography variant="h2" gutterBottom textAlign="center">
                    {sottotitolo_1}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }} textAlign="center">
                    {body_2}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }} textAlign="center">
                    {body_3}
                </Typography>
                <Typography variant="body1" textAlign="center">
                    {body_4}
                </Typography>
            </ObjectiveCaption>
            <ObjectiveBanner img={useImage(immagine_3)} title={sottotitolo_2} />
            <Box sx={{ py: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ObjectiveCard img={useImage(immagine_4)}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant="h4" gutterBottom fontWeight={500}>
                            <strong>{sottotitolo_3}</strong>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {body_5}
                        </Typography>
                    </Box>
                </ObjectiveCard>
            </Box>
            {/* <Container sx={{ mt: 5 }}>
                <ReactPlayer url="https://www.youtube.com/watch?v=CcNWGKsCSTc" />
            </Container> */}
        </Box>
    );
};

export default ObjectivePage;
