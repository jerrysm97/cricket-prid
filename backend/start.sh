#!/bin/bash

echo "🏏 Starting Cricket Predictor Backend..."
echo ""

# Kill any process using port 5000
echo "Checking if port 5000 is in use..."
if lsof -Pi :5000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  Port 5000 is in use. Killing the process..."
    kill -9 $(lsof -t -i:5000) 2>/dev/null
    sleep 1
    echo "✅ Port 5000 is now free"
else
    echo "✅ Port 5000 is available"
fi

echo ""
echo "🚀 Starting backend server..."
npm run dev
