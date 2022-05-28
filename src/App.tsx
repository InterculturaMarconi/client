import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';
import Credits from '~/pages/Credits';
import Obiettivo1 from '~/pages/obiettivo/Obiettivo1';
import Obiettivo2 from './pages/obiettivo/Obiettivo2';
import Obiettivo3 from './pages/obiettivo/Obiettivo3';
import Obiettivo6 from './pages/obiettivo/Obiettivo6';
import Obiettivo14 from '~/pages/obiettivo/Obiettivo14';
import Obiettivo15 from '~/pages/obiettivo/Obiettivo15';
import ObjectiveNotFound from '~/pages/obiettivo/ObjectiveNotFound';

import PrivateRoute from '~/components/PrivateRoute';

import { getUser, Fetch } from '~/reducers/user';
import { useDispatcher, useSelector } from '~/hooks/Store';

const App: React.FC = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatcher();

    React.useEffect(() => {
        if (user.status === 'logedout') {
            dispatch(Fetch());
        }
    }, []);

    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="credits" element={<Credits />} />
                <Route
                    path="profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route path="obiettivo">
                    <Route path="1" element={<Obiettivo1 />} />
                    <Route path="2" element={<Obiettivo2 />} />
                    <Route path="3" element={<Obiettivo3 />} />
                    <Route path="6" element={<Obiettivo6 />} />
                    <Route path="14" element={<Obiettivo14 />} />
                    <Route path="15" element={<Obiettivo15 />} />
                    <Route path="*" element={<ObjectiveNotFound />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
