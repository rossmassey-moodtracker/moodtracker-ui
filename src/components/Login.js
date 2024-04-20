/**
 * Component: Login
 *
 * Login page
 */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/auth';
import { AuthContext } from '../contexts/AuthContext';
import { Alert, Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';

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
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress/>
            </Box>
        );
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Moodtracker Login Page
                </Typography>
                <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log In
                    </Button>
                    {failed && (
                        <Alert severity="error">Login failed, try again.</Alert>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
