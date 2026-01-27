import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MatchesPage from './pages/MatchesPage';
import PredictionPage from './pages/PredictionPage';
import StatsPage from './pages/StatsPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">🏏 Cricket Predictor</Link>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/matches" className="nav-link">Live Matches</Link></li>
            <li><Link to="/predictions" className="nav-link">Predictions</Link></li>
            <li><Link to="/stats" className="nav-link">Statistics</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/predictions" element={<PredictionPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 Cricket Predictor - AI Powered</p>
      </footer>
    </div>
  );
}

export default App;