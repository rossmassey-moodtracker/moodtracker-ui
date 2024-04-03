import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Moods from './components/Moods';
import HomePage from './components/HomePage';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moods" element={<Moods />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
