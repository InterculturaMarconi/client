import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Footer from '~/components/footer/Footer';
import ObjectivesTable from './components/objective/ObjectivesTable';

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<ObjectivesTable />} />
    </Routes>
);

export default App;
