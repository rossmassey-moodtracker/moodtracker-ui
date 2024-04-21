/**
 * Component: HomePage
 *
 * Main entrypoint to app
 */
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
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
                <Typography component="h1" variant="h2" color="primary" gutterBottom>
                    Moodtracker
                </Typography>
                <Typography variant="body1" paragraph>
                    This site lets you track your mood over time!
                </Typography>
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
    <Typography variant="body2" paragraph>
        Please log in
    </Typography>
);

export default HomePage;
