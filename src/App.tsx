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
import ObjectiveBanner from './components/objective/ObjectiveBanner';
import { useImage } from './hooks/Image';
// import Obiettivo15 from '~/pages/Obiettivo15';
// import Obiettivo16 from '~/pages/Obiettivo16';
// import Obiettivo17 from '~/pages/Obiettivo17';
// import Obiettivo18 from '~/pages/Obiettivo18';

const App: React.FC = () => (
    <Routes>
        <Route path="/">
            <Route index element={<Home />} />
            <Route path="obiettivo">
                <Route path="1" element={<Obiettivo1 />} />
                <Route path="2" element={<Obiettivo1 />} />
                <Route path="3" element={<Obiettivo1 />} />
                <Route path="4" element={<Obiettivo1 />} />
                <Route path="5" element={<Obiettivo1 />} />
                <Route path="6" element={<Obiettivo1 />} />
                <Route path="7" element={<Obiettivo1 />} />
                <Route path="8" element={<Obiettivo1 />} />
                <Route path="9" element={<Obiettivo1 />} />
                <Route path="10" element={<Obiettivo1 />} />
                <Route path="11" element={<Obiettivo1 />} />
                <Route path="12" element={<Obiettivo1 />} />
                <Route path="13" element={<Obiettivo1 />} />
                <Route path="14" element={<Obiettivo14 />} />
                <Route path="15" element={<Obiettivo1 />} />
                <Route path="16" element={<Obiettivo1 />} />
                <Route path="17" element={<Obiettivo1 />} />
                <Route path="18" element={<Obiettivo1 />} />
            </Route>
        </Route>
        {/* <Route path="/test" element={<ObjectiveBanner img={useImage("obb14/img3obb14.png")} title="- Scopriamo l'obiettivo! -" />} /> */}
    </Routes>
);

export default App;
