import React from 'react';
import { styled, Typography } from '@mui/material';

const FooterTitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.caption,
    marginBottom: '1rem',
}));

export default FooterTitle;
