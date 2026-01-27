import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import '../styles/PredictionCard.css';

function PredictionCard({ match, prediction }) {
  const chartData = [
    { name: prediction.team1.name, value: prediction.team1.winProbability },
    { name: prediction.team2.name, value: prediction.team2.winProbability },
  ];

  const COLORS = ['#00C49F', '#FF8042'];

  const getConfidenceLevel = (confidence) => {
    if (confidence >= 30) return { text: 'High', color: '#00C49F' };
    if (confidence >= 15) return { text: 'Medium', color: '#FFA500' };
    return { text: 'Low', color: '#FF8042' };
  };

  const confidenceLevel = getConfidenceLevel(prediction.confidence);

  return (
    <div className="prediction-card">
      <div className="prediction-header">
        <h2>Match Prediction</h2>
        <div className="confidence-badge" style={{ backgroundColor: confidenceLevel.color }}>
          {confidenceLevel.text} Confidence
        </div>
      </div>

      <div className="match-details">
        <h3>{match.teams[0]} vs {match.teams[1]}</h3>
        <p>{match.venue}</p>
      </div>

      <div className="winner-prediction">
        <div className="winner-box">
          <p className="label">Predicted Winner</p>
          <h2 className="winner-name">🏆 {prediction.prediction}</h2>
        </div>
      </div>

      <div className="probability-chart">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="probability-bars">
        <div className="team-probability">
          <div className="team-info">
            <span className="team-name">{prediction.team1.name}</span>
            <span className="probability">{prediction.team1.winProbability}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill team1"
              style={{ width: `${prediction.team1.winProbability}%` }}
            ></div>
          </div>
        </div>

        <div className="team-probability">
          <div className="team-info">
            <span className="team-name">{prediction.team2.name}</span>
            <span className="probability">{prediction.team2.winProbability}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill team2"
              style={{ width: `${prediction.team2.winProbability}%` }}
            ></div>
          </div>
        </div>
      </div>

      {prediction.factors && (
        <div className="prediction-factors">
          <h3>Analysis Factors</h3>
          <div className="factors-grid">
            <div className="factor">
              <span className="factor-name">Head to Head</span>
              <div className="factor-bar">
                <div
                  className="factor-value team1"
                  style={{ width: `${prediction.factors.headToHead.team1}%` }}
                >
                  {Math.round(prediction.factors.headToHead.team1)}%
                </div>
              </div>
            </div>

            <div className="factor">
              <span className="factor-name">Recent Form</span>
              <div className="factor-bar">
                <div
                  className="factor-value team1"
                  style={{ width: `${prediction.factors.recentForm.team1}%` }}
                >
                  {Math.round(prediction.factors.recentForm.team1)}%
                </div>
              </div>
            </div>

            <div className="factor">
              <span className="factor-name">Home Advantage</span>
              <div className="factor-bar">
                <div
                  className="factor-value team1"
                  style={{ width: `${prediction.factors.homeAdvantage.team1}%` }}
                >
                  {Math.round(prediction.factors.homeAdvantage.team1)}%
                </div>
              </div>
            </div>

            <div className="factor">
              <span className="factor-name">Player Strength</span>
              <div className="factor-bar">
                <div
                  className="factor-value team1"
                  style={{ width: `${prediction.factors.playerStrength.team1}%` }}
                >
                  {Math.round(prediction.factors.playerStrength.team1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="disclaimer">
        <p>
          ⚠️ Predictions are based on historical data and statistical analysis. 
          Actual match results may vary due to various factors.
        </p>
      </div>
    </div>
  );
}

export default PredictionCard;
