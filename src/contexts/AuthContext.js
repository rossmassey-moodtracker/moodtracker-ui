/**
 * Context: AuthContext
 *
 * Provides auth status
 */
import React, { createContext, useEffect, useState } from 'react';
import { getToken, setAxiosAuthToken } from '../services/auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [tokenLoading, setTokenLoading] = useState(true);

    // grab token if already logged in
    useEffect(() => {
        const token = getToken();
        if (token) {
            console.log("TOKEN found, authenticating automatically")
            setIsAuthenticated(true);
            setAxiosAuthToken(token);
        }
        setTokenLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, tokenLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
