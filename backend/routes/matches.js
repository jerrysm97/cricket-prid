const express = require('express');
const router = express.Router();
const cricAPIService = require('../services/cricapi.service');

// Get all current matches
router.get('/current', async (req, res) => {
  try {
    const matches = await cricAPIService.getCurrentMatches();
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific match info
router.get('/:matchId', async (req, res) => {
  try {
    const { matchId } = req.params;
    const matchInfo = await cricAPIService.getMatchInfo(matchId);
    res.json(matchInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get match score
router.get('/:matchId/score', async (req, res) => {
  try {
    const { matchId } = req.params;
    const score = await cricAPIService.getMatchScore(matchId);
    res.json(score);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get series list
router.get('/series/all', async (req, res) => {
  try {
    const series = await cricAPIService.getSeriesList();
    res.json(series);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get series info
router.get('/series/:seriesId', async (req, res) => {
  try {
    const { seriesId } = req.params;
    const seriesInfo = await cricAPIService.getSeriesInfo(seriesId);
    res.json(seriesInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
