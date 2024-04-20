/**
 * Component: HomePage
 *
 * Main page
 */
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { logOut } from '../services/auth';

const HomePage = () => {
    const { isAuthenticated, setIsAuthenticated, authenticatedUser } = useContext(AuthContext);

    const handleLogout = async (event) => {
        setIsAuthenticated(false);
        logOut();
    };

    return (
        <div>
            <h1>Moodtracker</h1>
            <p>This site lets you track your mood over time!</p>
            {isAuthenticated ? (
                <div>
                    <p>You are logged in as {authenticatedUser}!</p>
                    <Link to="/moods">Moods</Link>
                    <div style={{ paddingTop: '10px' }}>
                        <button onClick={handleLogout}>Log out</button>
                    </div>
                </div>
            ) : (
                <div>
                    <p>You are not logged in, <Link to="/login">login here</Link></p>
                </div>

            )}
        </div>
    );
};


export default HomePage;