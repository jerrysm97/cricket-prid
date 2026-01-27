import React, { useEffect, useState } from 'react';
import api from '../services/api';
import MatchCard from '../components/MatchCard';

function MatchesPage() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchMatches();
    
    const interval = setInterval(fetchMatches, 900000); // 15 minutes
    return () => clearInterval(interval);
  }, []);

  const fetchMatches = async () => {
    try {
      setLoading(true);
      const data = await api.getCurrentMatches();
      setMatches(data.data || []);
    } catch (err) {
      console.error('Error fetching matches:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredMatches = matches.filter((match) => {
    if (filter === 'all') return true;
    return match.status.toLowerCase() === filter;
  });

  return (
    <div className="matches-page">
      <div className="page-header">
        <h1>Cricket Matches</h1>
        <p>Live and upcoming cricket matches from around the world</p>
      </div>

      <div className="filter-bar">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All Matches
        </button>
        <button
          className={filter === 'live' ? 'active' : ''}
          onClick={() => setFilter('live')}
        >
          Live
        </button>
        <button
          className={filter === 'upcoming' ? 'active' : ''}
          onClick={() => setFilter('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {loading && <div className="loading">Loading matches...</div>}

      {!loading && filteredMatches.length === 0 && (
        <div className="no-matches">No matches found</div>
      )}

      <div className="matches-grid">
        {filteredMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default MatchesPage;
