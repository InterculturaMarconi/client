import React from 'react';
import Navbar from '@components/Navbar';
import { Card } from '@mui/material';
import TrePersoneMondo from '@/img/TrePersoneMondo.png';

const Home = () => {
    return (
        <>
            <Navbar />
            <img src={TrePersoneMondo} height={400} />
        </>
    )
}

export default Home;