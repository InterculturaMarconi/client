import React from 'react';

import Navbar from '~/components/Navbar';
import Page from '~/components/Page';
import TrePersoneMondo from '~/img/TrePersoneMondo.png';

const Home: React.FC = () => (
    <Page title="Home | InterculturaMarconi">
        <Navbar />
        <img src={TrePersoneMondo} height={400} alt="" />
    </Page>
);

export default Home;
