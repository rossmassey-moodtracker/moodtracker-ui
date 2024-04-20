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
    const [failed, setFailed] = useState(false);

    const { setIsAuthenticated, setAuthenticatedUser, setAuthenticatedEmail } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);

        const result = await authenticateUser(username, password);

        if (!result.error) {
            setIsAuthenticated(true);
            setAuthenticatedUser(result.authUser);
            setAuthenticatedEmail(result.authEmail);

            setFailed(false);
            navigate('/');
        } else {
            console.error('Login failed:', result.error);
            setFailed(true);
        }
        setLoading(false);
    };

    if (loading) {
        return <div>Logging in...</div>;
    }

    return (
        <div>
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
            {failed ? <p>Login failed, try again</p> : null}
        </div>
    );
};

export default Login;
