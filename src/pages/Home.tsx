import React from 'react';
<<<<<<< HEAD

import Navbar from '~/components/Navbar';
import Page from '~/components/Page';
=======
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
>>>>>>> f8d23340f832dd81132192f515f5fb0ba27ec7a6

const Home: React.FC = () => (
    <Page title="Home | InterculturaMarconi">
        <Navbar />
    </Page>
);

export default Home;
