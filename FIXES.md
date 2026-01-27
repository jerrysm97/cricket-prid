# 🔧 Quick Fixes for Common Errors

## ❌ Error 1: "Port 5000 already in use" (EADDRINUSE)

### Solution (Choose one):

### Option A: Kill the Process (Mac/Linux)
```bash
cd cricket-predictor/backend
chmod +x start.sh
./start.sh
```

### Option B: Kill the Process (Windows)
```bash
cd cricket-predictor\backend
start.bat
```

### Option C: Manual Kill (Mac/Linux)
```bash
# Find and kill the process
lsof -ti:5000 | xargs kill -9

# Then start normally
npm run dev
```

### Option D: Manual Kill (Windows)
```bash
# Find the process
netstat -ano | findstr :5000

# Kill it (replace XXXX with PID from above)
taskkill /PID XXXX /F

# Then start normally
npm run dev
```

### Option E: Use Different Port
Edit `backend/.env` and change:
```
PORT=5001
```

Then also update `frontend/.env`:
```
REACT_APP_API_URL=http://localhost:5001/api
```

---

## ❌ Error 2: "Missing script: start" (Frontend)

This is fixed! But if you still see it:

### Solution:
```bash
cd cricket-predictor/frontend

# Delete package-lock.json
rm package-lock.json

# Reinstall
npm install

# Try again
npm start
```

---

## ❌ Error 3: "Module not found"

### Solution:
```bash
# In backend
cd cricket-predictor/backend
rm -rf node_modules package-lock.json
npm install

# In frontend
cd cricket-predictor/frontend
rm -rf node_modules package-lock.json
npm install
```

---

## ❌ Error 4: "react-scripts: command not found"

### Solution:
```bash
cd cricket-predictor/frontend
npm install react-scripts --save
npm start
```

---

## 🎯 Foolproof Setup (Fresh Start)

If nothing works, try this complete reset:

### Backend:
```bash
cd cricket-predictor/backend

# Clean everything
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Kill port 5000
lsof -ti:5000 | xargs kill -9  # Mac/Linux
# OR
# netstat -ano | findstr :5000 then taskkill /F /PID XXXX  # Windows

# Start
npm run dev
```

### Frontend:
```bash
cd cricket-predictor/frontend

# Clean everything
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Start
npm start
```

---

## 🚀 Easy Startup Commands

### Mac/Linux Users:
```bash
# Backend (in one terminal)
cd cricket-predictor/backend && chmod +x start.sh && ./start.sh

# Frontend (in another terminal)
cd cricket-predictor/frontend && npm start
```

### Windows Users:
```bash
# Backend (in one terminal)
cd cricket-predictor\backend
start.bat

# Frontend (in another terminal)  
cd cricket-predictor\frontend
npm start
```

---

## ✅ Verify Everything Works

### 1. Check Backend:
Open browser: `http://localhost:5000/api/health`

Should see:
```json
{"status":"OK","message":"Cricket Predictor API is running"}
```

### 2. Check Frontend:
Should automatically open at `http://localhost:3000`

### 3. Check Connection:
- Frontend loads without errors
- Can see homepage
- Console has no red errors

---

## 🆘 Still Having Issues?

### Check Node Version:
```bash
node --version
# Should be v16 or higher

npm --version
# Should be 8 or higher
```

### Update Node if needed:
Download from: https://nodejs.org/

### Check if servers are running:
```bash
# Check backend
curl http://localhost:5000/api/health

# Check frontend
curl http://localhost:3000
```

---

## 💡 Pro Tip

Create a `.npmrc` file in both backend and frontend folders:
```
legacy-peer-deps=true
```

This helps with dependency conflicts.

---

## 📞 Emergency Reset

If absolutely nothing works:

1. **Delete entire project folder**
2. **Re-download the ZIP**
3. **Extract fresh copy**
4. **Follow QUICK_START.md exactly**

---

Hope this helps! 🏏🎯
