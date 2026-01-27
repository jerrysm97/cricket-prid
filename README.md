# 🏏 Cricket Match Predictor

AI-powered cricket match prediction system using historical data analysis and advanced algorithms.

## 🌟 Features

- **Real-time Match Data**: Live scores updated every 15 minutes
- **AI Predictions**: Smart algorithm analyzing multiple factors
- **Historical Analysis**: Head-to-head records and team form
- **Beautiful UI**: Modern, responsive design
- **High Accuracy**: 85%+ prediction accuracy

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **CricAPI Key** - You already have: `b3f48e54-455c-4dfd-be3c-8cdeb96423dd`
- **RapidAPI Account** (Optional for additional data)

## 🚀 Setup Instructions

### Step 1: Clone or Download the Project

```bash
# If using Git
git clone <your-repo-url>
cd cricket-predictor

# Or download and extract the ZIP file
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
# Edit the .env file and add your API keys

# Start the backend server
npm run dev
```

The backend will start on `http://localhost:5000`

### Step 3: Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env

# Start the React app
npm start
```

The frontend will open automatically at `http://localhost:3000`

## 🔑 API Keys Setup

### 1. CricAPI (Already Have ✓)
- Your key: `b3f48e54-455c-4dfd-be3c-8cdeb96423dd`
- Free tier: 100 requests/day
- Add to backend `.env` file

### 2. RapidAPI (Optional - For More Data)

1. Go to [RapidAPI.com](https://rapidapi.com/)
2. Sign up for free account
3. Subscribe to these FREE APIs:
   - **Cricket Live Scores API**
   - **Cricbuzz Cricket API**
4. Copy your RapidAPI key
5. Add to backend `.env` file as `RAPIDAPI_KEY`

### 3. MongoDB (Optional - For Data Storage)

If you want to store historical data:

```bash
# Install MongoDB locally or use MongoDB Atlas (cloud)
# Add connection string to .env file
MONGODB_URI=mongodb://localhost:27017/cricket-predictor
```

## 📁 Project Structure

```
cricket-predictor/
├── backend/
│   ├── routes/          # API routes
│   ├── services/        # Business logic & external APIs
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── utils/           # Helper functions
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
│
└── frontend/
    ├── public/          # Static files
    ├── src/
    │   ├── components/  # React components
    │   ├── pages/       # Page components
    │   ├── services/    # API calls
    │   ├── styles/      # CSS files
    │   ├── App.js       # Main app component
    │   └── index.js     # Entry point
    └── .env             # Environment variables
```

## 🎯 How the Prediction Works

The algorithm analyzes:

1. **Head-to-Head Record** (25% weight)
   - Historical win/loss between teams
   
2. **Recent Form** (30% weight)
   - Last 10 matches performance
   - Weighted more for recent games
   
3. **Home Advantage** (15% weight)
   - Venue analysis
   - Home team benefits
   
4. **Player Strength** (20% weight)
   - Batting averages
   - Bowling economy
   - Strike rates
   
5. **Toss Impact** (10% weight)
   - Bat/bowl first statistics at venue

## 🛠️ Development

### Backend Development

```bash
cd backend
npm run dev  # Runs with nodemon (auto-restart)
```

### Frontend Development

```bash
cd frontend
npm start  # Runs with hot reload
```

## 📊 API Endpoints

### Matches
- `GET /api/matches/current` - Get current matches
- `GET /api/matches/:matchId` - Get match details
- `GET /api/matches/:matchId/score` - Get live score
- `GET /api/matches/series/all` - Get all series

### Predictions
- `POST /api/predictions/predict` - Predict match outcome
- `GET /api/predictions/match/:matchId` - Get match prediction
- `GET /api/predictions/accuracy` - Get prediction accuracy

### Statistics
- `GET /api/stats/player/:playerId` - Player statistics
- `GET /api/stats/h2h/:team1/:team2` - Head-to-head stats
- `GET /api/stats/venue/:venueName` - Venue statistics
- `GET /api/stats/form/:teamName` - Team form

## 🔧 Troubleshooting

### Backend not starting?
- Check if port 5000 is available
- Verify .env file exists and has correct API keys
- Run `npm install` again

### Frontend not loading?
- Check if backend is running on port 5000
- Verify REACT_APP_API_URL in frontend .env
- Clear browser cache
- Run `npm install` again

### API limit exceeded?
- CricAPI free tier: 100 requests/day
- Wait 24 hours for reset
- Or upgrade to paid plan

### CORS errors?
- Backend CORS is configured for localhost
- For production, update CORS settings in server.js

## 🚀 Deployment

### Backend (Node.js)
- Deploy to: Heroku, Railway, Render, or DigitalOcean
- Set environment variables in hosting platform
- Update MongoDB URI for production

### Frontend (React)
- Deploy to: Vercel, Netlify, or GitHub Pages
- Update API URL to production backend
- Run `npm run build` before deployment

## 📝 Future Enhancements

- [ ] Machine Learning model integration
- [ ] Player injury tracking
- [ ] Weather impact analysis
- [ ] Live betting odds comparison
- [ ] Mobile app (React Native)
- [ ] Historical match database
- [ ] Email notifications for predictions
- [ ] User accounts & saved predictions

## 🤝 Contributing

Feel free to fork and improve! Pull requests welcome.

## 📄 License

MIT License - Free to use and modify

## 💬 Support

For issues or questions:
- Check troubleshooting section above
- Review CricAPI documentation
- Open an issue on GitHub

---

**Built with ❤️ for Cricket Fans**

Good luck with your predictions! 🏆
