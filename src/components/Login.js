/**
 * Component: Login
 *
 * Sets up token auth with username/password
 */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/auth';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { setIsAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        const result = await authenticateUser(username, password);
        if (!result.error) {
            setIsAuthenticated(true);
            navigate('/');
        } else {
            console.error('Login failed:', result.error);
        }
        setLoading(false);
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
