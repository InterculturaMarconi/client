import { Grid, GridProps, styled } from '@mui/material';
import React from 'react';

const FooterContent = styled(({ children, ...props }: GridProps) => (
    <Grid item xs={4} md={3} spacing={3} {...props}>
        {children}
    </Grid>
))<GridProps>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
}));

export default FooterContent;
