const axios = require('axios');

class CricAPIService {
  constructor() {
    this.baseURL = 'https://api.cricapi.com/v1';
    this.apiKey = process.env.CRICAPI_KEY;
  }

  async getCurrentMatches() {
    try {
      const response = await axios.get(`${this.baseURL}/currentMatches`, {
        params: { apikey: this.apiKey, offset: 0 }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching current matches:', error.message);
      throw error;
    }
  }

  async getMatchInfo(matchId) {
    try {
      const response = await axios.get(`${this.baseURL}/match_info`, {
        params: { apikey: this.apiKey, id: matchId }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching match info:', error.message);
      throw error;
    }
  }

  async getSeriesInfo(seriesId) {
    try {
      const response = await axios.get(`${this.baseURL}/series_info`, {
        params: { apikey: this.apiKey, id: seriesId }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching series info:', error.message);
      throw error;
    }
  }

  async getMatchScore(matchId) {
    try {
      const response = await axios.get(`${this.baseURL}/match_score`, {
        params: { apikey: this.apiKey, id: matchId }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching match score:', error.message);
      throw error;
    }
  }

  async getPlayerInfo(playerId) {
    try {
      const response = await axios.get(`${this.baseURL}/players_info`, {
        params: { apikey: this.apiKey, id: playerId }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching player info:', error.message);
      throw error;
    }
  }

  async getSeriesList() {
    try {
      const response = await axios.get(`${this.baseURL}/series`, {
        params: { apikey: this.apiKey, offset: 0 }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching series list:', error.message);
      throw error;
    }
  }
}

module.exports = new CricAPIService();
