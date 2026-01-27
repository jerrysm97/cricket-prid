const express = require('express');
const router = express.Router();
const cricAPIService = require('../services/cricapi.service');

// Get player statistics
router.get('/player/:playerId', async (req, res) => {
  try {
    const { playerId } = req.params;
    const playerInfo = await cricAPIService.getPlayerInfo(playerId);
    res.json(playerInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get team head-to-head stats
router.get('/h2h/:team1/:team2', async (req, res) => {
  try {
    const { team1, team2 } = req.params;
    
    // TODO: Fetch from database or calculate from historical matches
    const h2hStats = {
      team1: team1,
      team2: team2,
      totalMatches: 0,
      team1Wins: 0,
      team2Wins: 0,
      draws: 0,
      lastFiveResults: []
    };

    res.json(h2hStats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get venue statistics
router.get('/venue/:venueName', async (req, res) => {
  try {
    const { venueName } = req.params;
    
    // TODO: Fetch from database
    const venueStats = {
      name: venueName,
      totalMatches: 0,
      avgFirstInningsScore: 0,
      avgSecondInningsScore: 0,
      batFirstWinPercentage: 0,
      bowlFirstWinPercentage: 0,
      highestScore: 0,
      lowestScore: 0
    };

    res.json(venueStats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get team recent form
router.get('/form/:teamName', async (req, res) => {
  try {
    const { teamName } = req.params;
    const { matchType = 'all', limit = 10 } = req.query;

    // TODO: Fetch from database
    const recentForm = {
      team: teamName,
      matchType,
      matches: [],
      winPercentage: 0,
      recentResults: [] // ['W', 'L', 'W', 'W', 'L']
    };

    res.json(recentForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
