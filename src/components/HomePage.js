/**
 * Component: HomePage
 *
 * Main page
 */
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from "react";

const HomePage = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <home>
            <h1>Moodtracker</h1>
            <p>This site lets you track your mood over time!</p>
            {isAuthenticated ? (
                <div>
                    <Link to="/moods">Moods</Link>
                </div>
            ) : (
                <div>
                    <p>You are not logged in, <Link to="/login">login here</Link></p>
                </div>

            )}
        </home>
    );
}


export default HomePage;