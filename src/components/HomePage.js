/**
 * Component: HomePage
 * 
 * Main page
 */
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Moodtracker UI</h1>
      <nav>
        <ul>
          <li><Link to="/moods">Moods</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;