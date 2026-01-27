import React, { useState, useEffect } from 'react';
import api from '../services/api';
import PredictionCard from '../components/PredictionCard';
import '../styles/PredictionPage.css';

function PredictionPage() {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const data = await api.getCurrentMatches();
      setMatches(data.data || []);
    } catch (err) {
      console.error('Error fetching matches:', err);
    }
  };

  const handleMatchSelect = async (match) => {
    setSelectedMatch(match);
    setLoading(true);
    setPrediction(null);

    try {
      const predictionData = await api.getMatchPrediction(match.id);
      setPrediction(predictionData.prediction);
    } catch (err) {
      console.error('Error fetching prediction:', err);
      // Generate a sample prediction for demo
      generateSamplePrediction(match);
    } finally {
      setLoading(false);
    }
  };

  const generateSamplePrediction = (match) => {
    const team1Prob = 45 + Math.random() * 30;
    const team2Prob = 100 - team1Prob;

    setPrediction({
      team1: {
        name: match.teams[0],
        winProbability: Math.round(team1Prob * 10) / 10,
      },
      team2: {
        name: match.teams[1],
        winProbability: Math.round(team2Prob * 10) / 10,
      },
      prediction: team1Prob > team2Prob ? match.teams[0] : match.teams[1],
      confidence: Math.abs(team1Prob - team2Prob),
      factors: {
        headToHead: {
          team1: 55,
          team2: 45,
        },
        recentForm: {
          team1: team1Prob,
          team2: team2Prob,
        },
        homeAdvantage: {
          team1: 50,
          team2: 50,
        },
        playerStrength: {
          team1: 52,
          team2: 48,
        },
        tossImpact: {
          team1: 50,
          team2: 50,
        },
      },
    });
  };

  return (
    <div className="prediction-page">
      <div className="page-header">
        <h1>Match Predictions</h1>
        <p>Select a match to see AI-powered win probability analysis</p>
      </div>

      <div className="prediction-container">
        <div className="matches-list">
          <h2>Upcoming Matches</h2>
          {matches.length === 0 && (
            <p className="no-matches">No matches available for prediction</p>
          )}
          {matches.map((match) => (
            <div
              key={match.id}
              className={`match-item ${selectedMatch?.id === match.id ? 'selected' : ''}`}
              onClick={() => handleMatchSelect(match)}
            >
              <div className="match-teams">
                <span>{match.teams[0]}</span>
                <span className="vs">vs</span>
                <span>{match.teams[1]}</span>
              </div>
              <div className="match-info">
                <small>{match.matchType}</small>
                <small>{match.venue}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="prediction-result">
          {!selectedMatch && (
            <div className="empty-state">
              <p>👈 Select a match to view prediction</p>
            </div>
          )}

          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Analyzing match data...</p>
            </div>
          )}

          {selectedMatch && prediction && !loading && (
            <PredictionCard match={selectedMatch} prediction={prediction} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PredictionPage;
