/**
 * Context: AuthContext
 *
 * Provides auth status
 */
import React, { createContext, useEffect, useState } from 'react';
import { loadAuth, setAxiosHeader } from '../services/auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [tokenLoading, setTokenLoading] = useState(true);

    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [authenticatedEmail, setAuthenticatedEmail] = useState(null);

    // grab token if already logged in
    useEffect(() => {
        const auth = loadAuth();

        if (auth) {
            console.log('Authenticating with stored token');
            const { token, user, email } = auth;

            setIsAuthenticated(true);

            setAxiosHeader(token);
            setAuthenticatedUser(user);
            setAuthenticatedEmail(email);
        } else {
            console.log('Stored token not found');
        }
        setTokenLoading(false);
    }, []);

    return (
        // passes these values to all children
        <AuthContext.Provider
            value={{ setIsAuthenticated, isAuthenticated, tokenLoading, authenticatedUser, authenticatedEmail }}>
            {children}
        </AuthContext.Provider>
    );
};
