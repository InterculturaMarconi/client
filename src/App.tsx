import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Test from '~/pages/Test';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';
import Obiettivo1 from '~/pages/obiettivo/Obiettivo1';
import Obiettivo2 from './pages/obiettivo/Obiettivo2';
import Obiettivo6 from './pages/obiettivo/Obiettivo6';
import Obiettivo14 from '~/pages/obiettivo/Obiettivo14';
import Obiettivo15 from '~/pages/obiettivo/Obiettivo15';

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
                    <Route path="3" element={<Obiettivo1 />} />
                    <Route path="4" element={<Obiettivo1 />} />
                    <Route path="5" element={<Obiettivo1 />} />
                    <Route path="6" element={<Obiettivo6 />} />
                    <Route path="7" element={<Obiettivo1 />} />
                    <Route path="8" element={<Obiettivo1 />} />
                    <Route path="9" element={<Obiettivo1 />} />
                    <Route path="10" element={<Obiettivo1 />} />
                    <Route path="11" element={<Obiettivo1 />} />
                    <Route path="12" element={<Obiettivo1 />} />
                    <Route path="13" element={<Obiettivo1 />} />
                    <Route path="14" element={<Obiettivo14 />} />
                    <Route path="15" element={<Obiettivo15 />} />
                    <Route path="16" element={<Obiettivo1 />} />
                    <Route path="17" element={<Obiettivo1 />} />
                </Route>
                <Route path="test" element={<Test />} />
            </Route>
        </Routes>
    );
};

export default App;
