/**
 * Component: AuthBar
 *
 * Provides auth status and login/logout
 */
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { clearAuthStorage } from '../services/auth';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import StyledLink from './StyledLink';

const AuthBarContainer = styled('div')(({ theme }) => ({
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

const AuthBar = () => {
    const { isAuthenticated, setIsAuthenticated, authenticatedUser } = useContext(AuthContext);

    const handleLogout = async () => {
        setIsAuthenticated(false);
        clearAuthStorage();
    };

    return (
        <AuthBarContainer>
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
        </AuthBarContainer>
    );
};

export default AuthBar;
