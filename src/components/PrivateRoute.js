/**
 * Component: PrivateRoute
 *
 * Guards route from unauthenticated access
 */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, tokenLoading } = useContext(AuthContext);
    const location = useLocation();

    console.log(tokenLoading)
    console.log(isAuthenticated);

    if (tokenLoading) {
        return <div>Checking credentials...</div>;
    }

    if (!isAuthenticated) {
        console.log(`NOT AUTHORIZED TO ACCESS ${location.pathname}`)
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }

    return children;
};

export default PrivateRoute;