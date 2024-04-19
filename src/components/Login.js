/**
 * Component: Login
 *
 * Sets up token auth with username/password
 */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setAxiosAuthToken, setToken } from '../services/auth';
import { AuthContext } from '../contexts/AuthContext';
import { API_BASE_URL } from '../config.js';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/login/`, { username, password });
            const { token } = response.data;
            setToken(token);
            setAxiosAuthToken(token);
            setIsAuthenticated(true);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.response?.data || 'No response');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Logging in...</div>;
    }

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;
