import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Match endpoints
  async getCurrentMatches() {
    const response = await this.api.get('/matches/current');
    return response.data;
  }

  async getMatchInfo(matchId) {
    const response = await this.api.get(`/matches/${matchId}`);
    return response.data;
  }

  async getMatchScore(matchId) {
    const response = await this.api.get(`/matches/${matchId}/score`);
    return response.data;
  }

  async getSeriesList() {
    const response = await this.api.get('/matches/series/all');
    return response.data;
  }

  async getSeriesInfo(seriesId) {
    const response = await this.api.get(`/matches/series/${seriesId}`);
    return response.data;
  }

  // Prediction endpoints
  async predictMatch(team1, team2, matchContext) {
    const response = await this.api.post('/predictions/predict', {
      team1,
      team2,
      matchContext,
    });
    return response.data;
  }

  async getMatchPrediction(matchId) {
    const response = await this.api.get(`/predictions/match/${matchId}`);
    return response.data;
  }

  async getPredictionAccuracy() {
    const response = await this.api.get('/predictions/accuracy');
    return response.data;
  }

  // Stats endpoints
  async getPlayerStats(playerId) {
    const response = await this.api.get(`/stats/player/${playerId}`);
    return response.data;
  }

  async getHeadToHead(team1, team2) {
    const response = await this.api.get(`/stats/h2h/${team1}/${team2}`);
    return response.data;
  }

  async getVenueStats(venueName) {
    const response = await this.api.get(`/stats/venue/${encodeURIComponent(venueName)}`);
    return response.data;
  }

  async getTeamForm(teamName, matchType = 'all', limit = 10) {
    const response = await this.api.get(`/stats/form/${encodeURIComponent(teamName)}`, {
      params: { matchType, limit },
    });
    return response.data;
  }
}

export default new ApiService();
