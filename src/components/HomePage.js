/**
 * Component: HomePage
 *
 * Main entrypoint to app
 */
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import AuthBar from './AuthBar';
import StyledLink from './StyledLink';

const HomeContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    paddingTop: '50px',
    backgroundColor: theme.palette.background.default,
}));

const HomePage = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <AuthBar/>
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
    <div>
        <StyledLink to="/moods">
            <Button variant="contained" color="primary">Moods</Button>
        </StyledLink>
    </div>
);

const UnauthenticatedView = () => (
    <p>Please log in</p>
);

export default HomePage;
