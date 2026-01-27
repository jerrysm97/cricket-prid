# 💻 Terminal Commands Cheat Sheet

Copy and paste these commands exactly as shown!

## 🚀 Initial Setup

### 1️⃣ First Time Setup - Backend

```bash
# Navigate to the backend folder
cd cricket-predictor/backend

# Install all required packages
npm install

# Start the backend server
npm run dev
```

**Expected Output:**
```
🚀 Server running on port 5000
📊 Cricket Prediction API ready
```

**Keep this terminal open!**

---

### 2️⃣ First Time Setup - Frontend

Open a **NEW terminal window** and run:

```bash
# Navigate to the frontend folder
cd cricket-predictor/frontend

# Install all required packages
npm install

# Start the React app
npm start
```

**Expected Output:**
```
Compiled successfully!

You can now view cricket-predictor-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

Browser will open automatically!

---

## 🔄 Daily Usage (After First Setup)

### Start Backend
```bash
cd cricket-predictor/backend
npm run dev
```

### Start Frontend (in new terminal)
```bash
cd cricket-predictor/frontend
npm start
```

---

## 🛑 Stopping the Servers

In each terminal window:
- **Windows**: Press `Ctrl + C`
- **Mac/Linux**: Press `Ctrl + C`

---

## 🔧 Troubleshooting Commands

### Backend Not Working?

```bash
# Go to backend folder
cd cricket-predictor/backend

# Delete old packages
rm -rf node_modules package-lock.json

# Reinstall packages
npm install

# Try starting again
npm run dev
```

### Frontend Not Working?

```bash
# Go to frontend folder
cd cricket-predictor/frontend

# Delete old packages
rm -rf node_modules package-lock.json

# Reinstall packages
npm install

# Try starting again
npm start
```

### Port Already in Use?

**Backend (Port 5000 busy):**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

**Or change port in backend/.env:**
```bash
PORT=5001
```

**Frontend (Port 3000 busy):**
- When prompted, type `y` to use another port

---

## 📊 Testing Commands

### Check if Node.js is installed
```bash
node --version
# Should show: v16.x.x or higher
```

### Check if npm is installed
```bash
npm --version
# Should show: 8.x.x or higher
```

### Test Backend API
```bash
# In a new terminal
curl http://localhost:5000/api/health

# Should return:
# {"status":"OK","message":"Cricket Predictor API is running"}
```

### Check Backend Logs
```bash
# Backend terminal will show:
# - API requests
# - Errors (if any)
# - Match data updates
```

---

## 🧹 Cleanup Commands

### Clear npm cache
```bash
npm cache clean --force
```

### Remove all node_modules (fresh start)
```bash
# Backend
cd cricket-predictor/backend
rm -rf node_modules package-lock.json

# Frontend
cd cricket-predictor/frontend
rm -rf node_modules package-lock.json

# Then reinstall both
cd ../backend && npm install
cd ../frontend && npm install
```

---

## 📦 Build Commands (For Production)

### Build Frontend for Production
```bash
cd cricket-predictor/frontend
npm run build
```

Creates optimized production files in `frontend/build/`

### Run Production Build
```bash
# Install serve globally (one time)
npm install -g serve

# Serve the production build
serve -s build -l 3000
```

---

## 🔍 Debugging Commands

### View Backend Logs in Detail
```bash
cd cricket-predictor/backend
npm run dev 2>&1 | tee backend.log
```

### Check Frontend Build Errors
```bash
cd cricket-predictor/frontend
npm run build --verbose
```

### List All Running Node Processes
```bash
# Windows
tasklist | findstr node

# Mac/Linux
ps aux | grep node
```

---

## 📝 Environment Setup Commands

### Create Backend .env File
```bash
cd cricket-predictor/backend

# Windows
echo CRICAPI_KEY=b3f48e54-455c-4dfd-be3c-8cdeb96423dd > .env
echo PORT=5000 >> .env

# Mac/Linux
cat > .env << EOF
CRICAPI_KEY=b3f48e54-455c-4dfd-be3c-8cdeb96423dd
PORT=5000
EOF
```

### Create Frontend .env File
```bash
cd cricket-predictor/frontend

# Windows
echo REACT_APP_API_URL=http://localhost:5000/api > .env

# Mac/Linux
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
```

---

## 🚀 Quick Commands Reference

| Task | Command |
|------|---------|
| Start Backend | `cd backend && npm run dev` |
| Start Frontend | `cd frontend && npm start` |
| Stop Server | `Ctrl + C` |
| Install Packages | `npm install` |
| Clean Install | `rm -rf node_modules && npm install` |
| Check Port | `lsof -ti:5000` (Mac/Linux) |
| Kill Port | `kill -9 $(lsof -ti:5000)` (Mac/Linux) |

---

## 💡 Pro Tips

### Run Both Servers with One Command

Create this file: `start.sh` (Mac/Linux)
```bash
#!/bin/bash
cd backend && npm run dev &
cd frontend && npm start &
```

Then run:
```bash
chmod +x start.sh
./start.sh
```

### Windows Alternative
Create `start.bat`:
```batch
start cmd /k "cd backend && npm run dev"
start cmd /k "cd frontend && npm start"
```

Then double-click `start.bat`

---

## 🎯 Command Shortcuts

### Backend Only
```bash
# One line setup and start
cd cricket-predictor/backend && npm install && npm run dev
```

### Frontend Only
```bash
# One line setup and start
cd cricket-predictor/frontend && npm install && npm start
```

### Full Stack (Sequential)
```bash
# Install and start backend first
cd cricket-predictor/backend && npm install && npm run dev

# Then in another terminal:
cd cricket-predictor/frontend && npm install && npm start
```

---

## ❓ Common Issues & Solutions

### Issue: "npm: command not found"
**Solution:**
```bash
# Install Node.js from nodejs.org
# Then restart terminal
```

### Issue: "Cannot find module"
**Solution:**
```bash
npm install
```

### Issue: "Port already in use"
**Solution:**
```bash
# Kill the process or change port in .env
```

### Issue: "CORS error"
**Solution:**
- Make sure backend is running
- Check REACT_APP_API_URL in frontend/.env

---

## 📌 Save These Commands!

Bookmark this file for quick reference when running your app!

**Happy Predicting! 🏏🎯**
