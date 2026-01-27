import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MatchCard.css';

function MatchCard({ match }) {
  const navigate = useNavigate();

  const handlePredictClick = () => {
    navigate('/predictions');
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      'live': 'status-live',
      'completed': 'status-completed',
      'upcoming': 'status-upcoming',
    };

    return (
      <span className={`status-badge ${statusClasses[status.toLowerCase()] || ''}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="match-card">
      <div className="match-header">
        <span className="match-type">{match.matchType}</span>
        {getStatusBadge(match.status)}
      </div>

      <div className="match-teams">
        <div className="team">
          <h3>{match.teams[0]}</h3>
          {match.score && match.score[0] && (
            <p className="score">{match.score[0].r}/{match.score[0].w} ({match.score[0].o})</p>
          )}
        </div>

        <div className="vs-divider">
          <span>VS</span>
        </div>

        <div className="team">
          <h3>{match.teams[1]}</h3>
          {match.score && match.score[1] && (
            <p className="score">{match.score[1].r}/{match.score[1].w} ({match.score[1].o})</p>
          )}
        </div>
      </div>

      <div className="match-info">
        <p className="venue">📍 {match.venue}</p>
        <p className="date">📅 {new Date(match.dateTimeGMT).toLocaleDateString()}</p>
      </div>

      {match.status && (
        <div className="match-status-text">
          <p>{match.status}</p>
        </div>
      )}

      <button className="predict-btn" onClick={handlePredictClick}>
        🎯 Predict Winner
      </button>
    </div>
  );
}

export default MatchCard;
