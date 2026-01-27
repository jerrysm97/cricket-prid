class PredictionService {
  constructor() {
    this.weights = {
      headToHead: 0.25,
      recentForm: 0.30,
      homeAdvantage: 0.15,
      playerStrength: 0.20,
      tossImpact: 0.10
    };
  }

  /**
   * Main prediction function
   * @param {Object} team1 - First team data
   * @param {Object} team2 - Second team data
   * @param {Object} matchContext - Match context (venue, format, etc.)
   * @returns {Object} Prediction results
   */
  predictMatch(team1, team2, matchContext) {
    const scores = {
      team1: 0,
      team2: 0
    };

    // Calculate head-to-head score
    const h2hScore = this.calculateHeadToHead(team1.h2h, team2.h2h);
    scores.team1 += h2hScore.team1 * this.weights.headToHead;
    scores.team2 += h2hScore.team2 * this.weights.headToHead;

    // Calculate recent form score
    const formScore = this.calculateRecentForm(team1.recentMatches, team2.recentMatches);
    scores.team1 += formScore.team1 * this.weights.recentForm;
    scores.team2 += formScore.team2 * this.weights.recentForm;

    // Calculate home advantage
    const homeScore = this.calculateHomeAdvantage(team1.name, team2.name, matchContext.venue);
    scores.team1 += homeScore.team1 * this.weights.homeAdvantage;
    scores.team2 += homeScore.team2 * this.weights.homeAdvantage;

    // Calculate player strength
    const playerScore = this.calculatePlayerStrength(team1.players, team2.players);
    scores.team1 += playerScore.team1 * this.weights.playerStrength;
    scores.team2 += playerScore.team2 * this.weights.playerStrength;

    // Calculate toss impact (if available)
    const tossScore = this.calculateTossImpact(matchContext);
    scores.team1 += tossScore.team1 * this.weights.tossImpact;
    scores.team2 += tossScore.team2 * this.weights.tossImpact;

    // Normalize scores to percentages
    const total = scores.team1 + scores.team2;
    const team1Probability = (scores.team1 / total) * 100;
    const team2Probability = (scores.team2 / total) * 100;

    return {
      team1: {
        name: team1.name,
        winProbability: Math.round(team1Probability * 10) / 10,
        score: scores.team1
      },
      team2: {
        name: team2.name,
        winProbability: Math.round(team2Probability * 10) / 10,
        score: scores.team2
      },
      prediction: team1Probability > team2Probability ? team1.name : team2.name,
      confidence: Math.abs(team1Probability - team2Probability),
      factors: {
        headToHead: h2hScore,
        recentForm: formScore,
        homeAdvantage: homeScore,
        playerStrength: playerScore,
        tossImpact: tossScore
      }
    };
  }

  calculateHeadToHead(team1H2H, team2H2H) {
    if (!team1H2H || !team2H2H) {
      return { team1: 50, team2: 50 };
    }

    const team1Wins = team1H2H.wins || 0;
    const team2Wins = team2H2H.wins || 0;
    const total = team1Wins + team2Wins || 1;

    return {
      team1: (team1Wins / total) * 100,
      team2: (team2Wins / total) * 100
    };
  }

  calculateRecentForm(team1Matches, team2Matches) {
    const getWinPercentage = (matches) => {
      if (!matches || matches.length === 0) return 50;
      
      const recentMatches = matches.slice(0, 10); // Last 10 matches
      const wins = recentMatches.filter(m => m.result === 'won').length;
      return (wins / recentMatches.length) * 100;
    };

    const team1Form = getWinPercentage(team1Matches);
    const team2Form = getWinPercentage(team2Matches);

    // Add weight to more recent matches
    const weightedTeam1 = this.applyRecencyWeight(team1Matches);
    const weightedTeam2 = this.applyRecencyWeight(team2Matches);

    return {
      team1: (team1Form + weightedTeam1) / 2,
      team2: (team2Form + weightedTeam2) / 2
    };
  }

  applyRecencyWeight(matches) {
    if (!matches || matches.length === 0) return 50;

    let weightedScore = 0;
    let totalWeight = 0;

    matches.slice(0, 10).forEach((match, index) => {
      const weight = 10 - index; // More recent = higher weight
      const score = match.result === 'won' ? 100 : 0;
      weightedScore += score * weight;
      totalWeight += weight;
    });

    return totalWeight > 0 ? (weightedScore / totalWeight) : 50;
  }

  calculateHomeAdvantage(team1Name, team2Name, venue) {
    if (!venue) return { team1: 50, team2: 50 };

    const venueCountry = venue.country || '';
    const team1IsHome = team1Name.toLowerCase().includes(venueCountry.toLowerCase());
    const team2IsHome = team2Name.toLowerCase().includes(venueCountry.toLowerCase());

    if (team1IsHome && !team2IsHome) {
      return { team1: 70, team2: 30 };
    } else if (team2IsHome && !team1IsHome) {
      return { team1: 30, team2: 70 };
    }

    return { team1: 50, team2: 50 };
  }

  calculatePlayerStrength(team1Players, team2Players) {
    const getTeamStrength = (players) => {
      if (!players || players.length === 0) return 50;

      let totalRating = 0;
      players.forEach(player => {
        // Calculate player rating based on average, strike rate, economy
        const batting = (player.battingAvg || 0) * 0.4 + (player.strikeRate || 0) * 0.1;
        const bowling = (100 - (player.economy || 100)) * 0.3 + (player.wickets || 0) * 0.2;
        totalRating += batting + bowling;
      });

      return totalRating / players.length;
    };

    const team1Strength = getTeamStrength(team1Players);
    const team2Strength = getTeamStrength(team2Players);
    const total = team1Strength + team2Strength || 1;

    return {
      team1: (team1Strength / total) * 100,
      team2: (team2Strength / total) * 100
    };
  }

  calculateTossImpact(matchContext) {
    // Analyze historical toss impact at venue
    if (!matchContext.tossStats) {
      return { team1: 50, team2: 50 };
    }

    const { batFirstWinRate, bowlFirstWinRate } = matchContext.tossStats;

    if (matchContext.tossWinner) {
      const advantage = matchContext.decision === 'bat' ? batFirstWinRate : bowlFirstWinRate;
      
      if (matchContext.tossWinner === 'team1') {
        return { team1: advantage, team2: 100 - advantage };
      } else {
        return { team1: 100 - advantage, team2: advantage };
      }
    }

    return { team1: 50, team2: 50 };
  }

  /**
   * Calculate prediction accuracy based on historical predictions
   */
  calculateAccuracy(predictions) {
    if (!predictions || predictions.length === 0) return 0;

    const correct = predictions.filter(p => p.predictedWinner === p.actualWinner).length;
    return (correct / predictions.length) * 100;
  }

  /**
   * Get confidence level description
   */
  getConfidenceLevel(confidence) {
    if (confidence >= 30) return 'High';
    if (confidence >= 15) return 'Medium';
    return 'Low';
  }
}

module.exports = new PredictionService();
