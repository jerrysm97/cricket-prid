# ✅ Setup Checklist

Follow this checklist to get your Cricket Predictor running!

## 📋 Pre-Setup Checklist

- [ ] Node.js installed (v16+) - Check: `node --version`
- [ ] npm installed - Check: `npm --version`
- [ ] CricAPI Key ready: `b3f48e54-455c-4dfd-be3c-8cdeb96423dd`
- [ ] Two terminal windows ready

## 🔧 Backend Setup Checklist

- [ ] Navigate to backend folder: `cd cricket-predictor/backend`
- [ ] Install dependencies: `npm install`
- [ ] Verify .env file exists with CricAPI key
- [ ] Start backend: `npm run dev`
- [ ] Confirm message: "🚀 Server running on port 5000"
- [ ] Test API: Open `http://localhost:5000/api/health` in browser
- [ ] Should see: `{"status":"OK","message":"Cricket Predictor API is running"}`

## 🎨 Frontend Setup Checklist

- [ ] Open NEW terminal window
- [ ] Navigate to frontend folder: `cd cricket-predictor/frontend`
- [ ] Install dependencies: `npm install`
- [ ] Create .env file with: `REACT_APP_API_URL=http://localhost:5000/api`
- [ ] Start frontend: `npm start`
- [ ] Browser opens automatically at `http://localhost:3000`
- [ ] See homepage with "Cricket Match Predictor" title

## 🧪 Testing Checklist

- [ ] Homepage loads successfully
- [ ] Navigate to "Live Matches" page
- [ ] Navigate to "Predictions" page
- [ ] Navigate to "Statistics" page
- [ ] Try selecting a match for prediction
- [ ] Prediction shows win probability
- [ ] All styling looks correct

## 🔑 Optional: Additional APIs

### RapidAPI Setup (Optional)
- [ ] Go to [rapidapi.com](https://rapidapi.com/)
- [ ] Create free account
- [ ] Subscribe to "Cricket Live Scores API"
- [ ] Subscribe to "Cricbuzz Cricket API"
- [ ] Copy your RapidAPI key
- [ ] Add to backend `.env`: `RAPIDAPI_KEY=your_key_here`

### MongoDB Setup (Optional)
- [ ] Install MongoDB locally OR
- [ ] Sign up for MongoDB Atlas (cloud)
- [ ] Get connection string
- [ ] Add to backend `.env`: `MONGODB_URI=your_connection_string`

## 🎯 Feature Testing

### Test Current Matches
- [ ] Click "Live Matches" in navigation
- [ ] See list of current cricket matches
- [ ] Match cards show teams, venue, date
- [ ] Status badges show Live/Upcoming/Completed

### Test Predictions
- [ ] Go to "Predictions" page
- [ ] Select a match from left sidebar
- [ ] Wait for prediction to load (2-3 seconds)
- [ ] See win probability percentages
- [ ] See confidence level (High/Medium/Low)
- [ ] See pie chart visualization
- [ ] See factor analysis breakdown

### Test Statistics
- [ ] Go to "Statistics" page
- [ ] Try "Head to Head" search
- [ ] Enter two team names
- [ ] Click search button
- [ ] See results (may be empty if no data)

## 🐛 Troubleshooting

### Backend Issues
- [ ] Check if port 5000 is available
- [ ] Verify .env file has correct API key
- [ ] Check terminal for error messages
- [ ] Try: `npm install` again

### Frontend Issues
- [ ] Check if backend is running on port 5000
- [ ] Verify .env has correct API URL
- [ ] Clear browser cache
- [ ] Try: `npm install` again

### API Issues
- [ ] Check if you've exceeded 100 requests/day limit
- [ ] Verify API key is correct
- [ ] Check internet connection
- [ ] Try different match

## 📊 Success Criteria

Your setup is successful if:

✅ Backend server starts without errors
✅ Frontend loads in browser
✅ Can navigate between all pages
✅ Can see current matches
✅ Can get predictions for matches
✅ No console errors in browser

## 🚀 Next Steps

After successful setup:

1. **Explore Features**
   - Try predicting different matches
   - Check various team statistics
   - Compare head-to-head records

2. **Customize**
   - Adjust prediction weights in `prediction.service.js`
   - Add your own team logos
   - Modify color scheme in CSS files

3. **Enhance**
   - Add more data sources
   - Implement machine learning
   - Add user authentication
   - Store prediction history

4. **Deploy**
   - Deploy backend to Heroku/Railway
   - Deploy frontend to Vercel/Netlify
   - Share with friends!

## 📞 Getting Help

If you're stuck:

1. Check the full README.md
2. Review QUICK_START.md
3. Check error messages in terminal
4. Check browser console (F12)
5. Verify all dependencies installed
6. Make sure both servers are running

## 🎉 Congratulations!

If all boxes are checked, your Cricket Predictor is ready to use!

Start predicting matches and may the odds be ever in your favor! 🏏

---

**Tips:**
- Data updates every 15 minutes
- Free tier = 100 API requests/day
- Higher confidence = better prediction
- Historical data improves accuracy

**Enjoy!** 🎯
