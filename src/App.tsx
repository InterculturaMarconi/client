import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Table from '~/components/Table';

import '~/styles/index.css';

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Table />} />
    </Routes>
);

export default App;
