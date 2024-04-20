/**
 * Component: HomePage
 *
 * Main entrypoint to app and provides login/logout
 */
import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { clearAuthStorage } from '../services/auth';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const HomeContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    paddingTop: '50px',
    backgroundColor: theme.palette.background.default,
}));

const AuthBar = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const StyledLink = styled(RouterLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
}));

const HomePage = () => {
    const { isAuthenticated, setIsAuthenticated, authenticatedUser } = useContext(AuthContext);

    const handleLogout = async () => {
        setIsAuthenticated(false);
        clearAuthStorage();
    };

    return (
        <>
            <AuthBar>
                {isAuthenticated ? (
                    <>
                        <span>Logged in as <strong>{authenticatedUser}</strong></span>
                        <Button onClick={handleLogout} variant="contained" color="secondary">Log out</Button>
                    </>
                ) : (
                    <>
                        <span>You are not logged in</span>
                        <StyledLink to="/login">
                            <Button variant="contained" color="primary">Login here</Button>
                        </StyledLink>
                    </>
                )}
            </AuthBar>
            <HomeContainer>
                <h1>Moodtracker</h1>
                <p>This site lets you track your mood over time!</p>
                {isAuthenticated ? (
                    <AuthenticatedView/>
                ) : (
                    <UnauthenticatedView/>
                )}
            </HomeContainer>
        </>
    );
};

const AuthenticatedView = () => (
    <StyledLink to="/moods">
        <Button variant="contained" color="primary">Moods</Button>
    </StyledLink>
);

const UnauthenticatedView = () => (
    <p>Please log in</p>
);

export default HomePage;
