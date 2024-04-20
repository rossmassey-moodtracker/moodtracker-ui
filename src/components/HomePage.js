/**
 * Component: HomePage
 *
 * Main page
 */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { logOut } from '../services/auth';

const HomePage = () => {
    const { isAuthenticated, setIsAuthenticated, authenticatedUser } = useContext(AuthContext);

    const handleLogout = async () => {
        setIsAuthenticated(false);
        await logOut();
    };

    return (
        <div>
            <h1>Moodtracker</h1>
            <p>This site lets you track your mood over time!</p>
            {isAuthenticated ? (
                <AuthenticatedView user={authenticatedUser} onLogout={handleLogout}/>
            ) : (
                <UnauthenticatedView/>
            )}
        </div>
    );
};

const AuthenticatedView = ({ user, onLogout }) => (
    <div>
        <p>You are logged in as {user}!</p>
        <Link to="/moods">Moods</Link>
        <div style={{ paddingTop: '10px' }}>
            <button onClick={onLogout}>Log out</button>
        </div>
    </div>
);

const UnauthenticatedView = () => (
    <div>
        <p>You are not logged in, <Link to="/login">login here</Link></p>
    </div>
);

export default HomePage;
