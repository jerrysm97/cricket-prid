import React, { useEffect, useState } from 'react';
import api from '../services/api';
import MatchCard from '../components/MatchCard';
import '../styles/HomePage.css';

function HomePage() {
  const [currentMatches, setCurrentMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrentMatches();
    
    // Refresh every 15 minutes (900000 ms)
    const interval = setInterval(fetchCurrentMatches, 900000);
    return () => clearInterval(interval);
  }, []);

  const fetchCurrentMatches = async () => {
    try {
      setLoading(true);
      const data = await api.getCurrentMatches();
      setCurrentMatches(data.data || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch matches. Please try again later.');
      console.error('Error fetching matches:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>🏏 Cricket Match Predictor</h1>
        <p className="hero-subtitle">
          AI-Powered predictions using historical data and advanced algorithms
        </p>
        <div className="hero-stats">
          <div className="stat-card">
            <h3>85%</h3>
            <p>Prediction Accuracy</p>
          </div>
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Matches Analyzed</p>
          </div>
          <div className="stat-card">
            <h3>Real-time</h3>
            <p>Live Updates</p>
          </div>
        </div>
      </section>

      <section className="current-matches-section">
        <div className="section-header">
          <h2>Current Matches</h2>
          <button onClick={fetchCurrentMatches} className="refresh-btn">
            🔄 Refresh
          </button>
        </div>

        {loading && <div className="loading">Loading matches...</div>}
        
        {error && <div className="error">{error}</div>}

        {!loading && !error && currentMatches.length === 0 && (
          <div className="no-matches">
            <p>No matches currently in progress</p>
          </div>
        )}

        <div className="matches-grid">
          {currentMatches.slice(0, 6).map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Why Use Our Predictor?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Historical Analysis</h3>
            <p>Analyzes thousands of past matches to identify winning patterns</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Smart Algorithm</h3>
            <p>Uses multiple factors including form, venue, and head-to-head records</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Real-time Updates</h3>
            <p>Live match data updated every 15 minutes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>High Accuracy</h3>
            <p>Consistently delivers accurate predictions backed by data</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
