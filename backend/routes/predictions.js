const express = require('express');
const router = express.Router();
const predictionService = require('../services/prediction.service');
const cricAPIService = require('../services/cricapi.service');

// Predict match outcome
router.post('/predict', async (req, res) => {
  try {
    const { team1, team2, matchContext } = req.body;

    if (!team1 || !team2) {
      return res.status(400).json({ error: 'Team data required' });
    }

    const prediction = predictionService.predictMatch(team1, team2, matchContext || {});
    res.json(prediction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get prediction for a specific match
router.get('/match/:matchId', async (req, res) => {
  try {
    const { matchId } = req.params;
    
    // Fetch match info
    const matchInfo = await cricAPIService.getMatchInfo(matchId);
    
    if (!matchInfo.data) {
      return res.status(404).json({ error: 'Match not found' });
    }

    const match = matchInfo.data;

    // Prepare team data (you'll need to enhance this with historical data)
    const team1Data = {
      name: match.teams[0],
      h2h: { wins: 0 }, // Fetch from database
      recentMatches: [], // Fetch from database
      players: [] // Fetch from API or database
    };

    const team2Data = {
      name: match.teams[1],
      h2h: { wins: 0 }, // Fetch from database
      recentMatches: [], // Fetch from database
      players: [] // Fetch from API or database
    };

    const matchContext = {
      venue: match.venue,
      format: match.matchType,
      tossStats: {}
    };

    const prediction = predictionService.predictMatch(team1Data, team2Data, matchContext);
    
    res.json({
      match: {
        id: match.id,
        name: match.name,
        teams: match.teams,
        venue: match.venue,
        date: match.dateTimeGMT
      },
      prediction
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Calculate prediction accuracy
router.get('/accuracy', async (req, res) => {
  try {
    // Fetch historical predictions from database
    const historicalPredictions = []; // TODO: Fetch from database
    
    const accuracy = predictionService.calculateAccuracy(historicalPredictions);
    
    res.json({
      accuracy: Math.round(accuracy * 10) / 10,
      totalPredictions: historicalPredictions.length,
      correctPredictions: historicalPredictions.filter(p => p.predictedWinner === p.actualWinner).length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
