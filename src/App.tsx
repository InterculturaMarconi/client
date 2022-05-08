import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Footer from '~/components/Footer';

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Footer />} />
    </Routes>
);

export default App;
