import React from 'react';

import Navbar from '~/components/Navbar';
import Table from '~/components/Table';
import Page from '~/components/Page';
import TrePersoneMondo from '~/img/TrePersoneMondo.png';

const Home: React.FC = () => (
    <Page title="Home | InterculturaMarconi">
        <Navbar />
        <img src={TrePersoneMondo} height={400} alt="" />
        <Table />
    </Page>
);

export default Home;
