import React, { useState } from 'react';
import api from '../services/api';
import '../styles/StatsPage.css';

function StatsPage() {
  const [searchType, setSearchType] = useState('h2h');
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!team1 || (searchType === 'h2h' && !team2)) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      if (searchType === 'h2h') {
        const data = await api.getHeadToHead(team1, team2);
        setResults(data);
      } else {
        const data = await api.getTeamForm(team1);
        setResults(data);
      }
    } catch (err) {
      console.error('Error fetching stats:', err);
      alert('Failed to fetch statistics');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="stats-page">
      <div className="page-header">
        <h1>Team Statistics</h1>
        <p>Explore historical performance and head-to-head records</p>
      </div>

      <div className="search-section">
        <div className="search-type-tabs">
          <button
            className={searchType === 'h2h' ? 'active' : ''}
            onClick={() => setSearchType('h2h')}
          >
            Head to Head
          </button>
          <button
            className={searchType === 'form' ? 'active' : ''}
            onClick={() => setSearchType('form')}
          >
            Team Form
          </button>
        </div>

        <form onSubmit={handleSearch} className="search-form">
          <div className="form-group">
            <label>Team 1</label>
            <input
              type="text"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
              placeholder="Enter team name (e.g., India)"
              required
            />
          </div>

          {searchType === 'h2h' && (
            <div className="form-group">
              <label>Team 2</label>
              <input
                type="text"
                value={team2}
                onChange={(e) => setTeam2(e.target.value)}
                placeholder="Enter team name (e.g., Australia)"
                required
              />
            </div>
          )}

          <button type="submit" className="search-btn" disabled={loading}>
            {loading ? 'Searching...' : '🔍 Search'}
          </button>
        </form>
      </div>

      {results && (
        <div className="results-section">
          {searchType === 'h2h' ? (
            <div className="h2h-results">
              <h2>{results.team1} vs {results.team2}</h2>
              <div className="stats-grid">
                <div className="stat-box">
                  <h3>Total Matches</h3>
                  <p className="stat-value">{results.totalMatches}</p>
                </div>
                <div className="stat-box">
                  <h3>{results.team1} Wins</h3>
                  <p className="stat-value">{results.team1Wins}</p>
                </div>
                <div className="stat-box">
                  <h3>{results.team2} Wins</h3>
                  <p className="stat-value">{results.team2Wins}</p>
                </div>
                <div className="stat-box">
                  <h3>Draws</h3>
                  <p className="stat-value">{results.draws}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="form-results">
              <h2>{results.team} - Recent Form</h2>
              <div className="form-display">
                {results.recentResults && results.recentResults.length > 0 ? (
                  results.recentResults.map((result, index) => (
                    <span
                      key={index}
                      className={`result-badge ${result === 'W' ? 'win' : 'loss'}`}
                    >
                      {result}
                    </span>
                  ))
                ) : (
                  <p>No recent results available</p>
                )}
              </div>
              <div className="win-percentage">
                <h3>Win Percentage</h3>
                <p className="stat-value">{results.winPercentage}%</p>
              </div>
            </div>
          )}
        </div>
      )}

      {!results && !loading && (
        <div className="empty-state">
          <p>🔍 Search for team statistics to view detailed analysis</p>
        </div>
      )}
    </div>
  );
}

export default StatsPage;
