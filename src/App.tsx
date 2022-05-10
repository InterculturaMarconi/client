import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Obiettivo1 from '~/pages/obiettivo/Obiettivo1';
// import Obiettivo2 from '~/pages/Obiettivo2';
// import Obiettivo3 from '~/pages/Obiettivo3';
// import Obiettivo4 from '~/pages/Obiettivo4';
// import Obiettivo5 from '~/pages/Obiettivo5';
// import Obiettivo6 from '~/pages/Obiettivo6';
// import Obiettivo7 from '~/pages/Obiettivo7';
// import Obiettivo8 from '~/pages/Obiettivo8';
// import Obiettivo9 from '~/pages/Obiettivo9';
// import Obiettivo10 from '~/pages/Obiettivo10';
// import Obiettivo11 from '~/pages/Obiettivo11';
// import Obiettivo12 from '~/pages/Obiettivo12';
// import Obiettivo13 from '~/pages/Obiettivo13';
import Obiettivo14 from '~/pages/obiettivo/Obiettivo14';
import ObjectiveCover from './components/objective/ObjectiveCover';
// import Obiettivo15 from '~/pages/Obiettivo15';
// import Obiettivo16 from '~/pages/Obiettivo16';
// import Obiettivo17 from '~/pages/Obiettivo17';
// import Obiettivo18 from '~/pages/Obiettivo18';

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obiettivo/1" element={<Obiettivo1 />} />
        <Route path="/obiettivo/2" element={<Obiettivo1 />} />
        <Route path="/obiettivo/3" element={<Obiettivo1 />} />
        <Route path="/obiettivo/4" element={<Obiettivo1 />} />
        <Route path="/obiettivo/5" element={<Obiettivo1 />} />
        <Route path="/obiettivo/6" element={<Obiettivo1 />} />
        <Route path="/obiettivo/7" element={<Obiettivo1 />} />
        <Route path="/obiettivo/8" element={<Obiettivo1 />} />
        <Route path="/obiettivo/9" element={<Obiettivo1 />} />
        <Route path="/obiettivo/10" element={<Obiettivo1 />} />
        <Route path="/obiettivo/11" element={<Obiettivo1 />} />
        <Route path="/obiettivo/12" element={<Obiettivo1 />} />
        <Route path="/obiettivo/13" element={<Obiettivo1 />} />
        <Route path="/obiettivo/14" element={<Obiettivo14 />} />
        <Route path="/obiettivo/15" element={<Obiettivo1 />} />
        <Route path="/obiettivo/16" element={<Obiettivo1 />} />
        <Route path="/obiettivo/17" element={<Obiettivo1 />} />
        <Route path="/obiettivo/18" element={<Obiettivo1 />} />

        <Route path="/test" element={<ObjectiveCover />} />
    </Routes>
);

export default App;
