import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from '~/hooks/Store';
import { getUser } from '~/reducers/user';

const PrivateRoute: React.FC<React.PropsWithChildren<{}>> = props => {
    const { status, user } = useSelector(getUser);
    const location = useLocation();

    if (status === 'logedout' || status === 'failed') {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <>{props.children}</>;
};

export default PrivateRoute;
