@echo off
echo Starting Cricket Predictor Backend...
echo.

echo Checking if port 5000 is in use...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":5000" ^| find "LISTENING"') do (
    echo Killing process using port 5000...
    taskkill /F /PID %%a >nul 2>&1
    timeout /t 1 >nul
)

echo.
echo Starting backend server...
npm run dev
