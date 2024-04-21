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

    console.log(`Checking credentials for ${location.pathname}`);

    if (tokenLoading) {
        return <div>Checking credentials...</div>;
    }

    if (!isAuthenticated) {
        console.warn('NOT AUTHORIZED, REDIRECTING TO LOGIN');
        return <Navigate to="/login" state={{ from: location }} replace/>;
    }

    console.log('AUTHORIZED');
    return children;
};

export default PrivateRoute;
