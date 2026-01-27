# ⚡ Quick Start Guide

Get your Cricket Predictor running in 5 minutes!

## 📦 What You Need

1. **Node.js** installed ([Download here](https://nodejs.org/))
2. **Your CricAPI Key**: `b3f48e54-455c-4dfd-be3c-8cdeb96423dd`

## 🏃 Fast Setup (Copy & Paste)

### Step 1: Backend

Open Terminal/Command Prompt:

```bash
# Go to backend folder
cd cricket-predictor/backend

# Install packages
npm install

# Start server
npm run dev
```

✅ Backend running at `http://localhost:5000`

### Step 2: Frontend

Open a NEW Terminal/Command Prompt:

```bash
# Go to frontend folder
cd cricket-predictor/frontend

# Install packages
npm install

# Start app
npm start
```

✅ Browser opens automatically at `http://localhost:3000`

## 🎉 You're Done!

Your cricket predictor is now running!

### What to do next:

1. **Browse Current Matches** - See live cricket matches
2. **Get Predictions** - Click "Predict Winner" on any match
3. **View Statistics** - Check team form and head-to-head records

## 🔧 If Something Goes Wrong

### Backend won't start?
```bash
# Try this:
cd backend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Frontend won't start?
```bash
# Try this:
cd frontend
rm -rf node_modules package-lock.json
npm install
npm start
```

### Port already in use?

**Backend (Port 5000):**
- Stop other apps using port 5000
- Or change port in `backend/.env`: `PORT=5001`

**Frontend (Port 3000):**
- It will automatically ask to use port 3001
- Click Yes

## 📱 Using the App

### Homepage
- See current matches
- View live scores
- Quick access to predictions

### Matches Page
- Filter: All / Live / Upcoming / Completed
- Auto-refresh every 15 minutes
- Click any match to predict

### Predictions Page
1. Select a match from left sidebar
2. Wait 2-3 seconds for analysis
3. View win probability & confidence
4. See detailed factor analysis

### Statistics Page
- Search Head-to-Head records
- Check team recent form
- Compare team performance

## 🎯 Tips

1. **API Limit**: Free tier = 100 requests/day
2. **Best Time**: Use during live matches
3. **Accuracy**: Higher confidence = more reliable
4. **Updates**: Data refreshes every 15 minutes

## 🆘 Need Help?

Check the full README.md for:
- Detailed setup instructions
- API configuration
- Troubleshooting guide
- Deployment instructions

---

**Enjoy predicting! 🏏🎯**
