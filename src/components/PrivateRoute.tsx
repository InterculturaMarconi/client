import React from 'react';
import { Route, RouteProps, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from '~/hooks/Store';
import { getUser } from '~/reducers/user';

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
    const { entity } = useSelector(getUser);
    const location = useLocation();

    if (entity === null) {
        return <Navigate to="/login" state={{ location }} replace />;
    }

    return <Route {...props} />;
};

export default PrivateRoute;
