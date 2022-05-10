import React from 'react';
import { styled } from '@mui/material';

const Filter = styled('div')<{ opacity: number }>(({ opacity }) => ({
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    zIndex: 1,
}));

export default Filter;
