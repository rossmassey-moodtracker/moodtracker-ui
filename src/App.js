import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Moods from './components/Moods/Moods';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moods" element={<Moods />} />
      </Routes>
    </Router>
  );
}

export default App;
