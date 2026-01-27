const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cron = require('node-cron');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Advanced CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Explicitly allow your React dev server
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Route Imports
const matchRoutes = require('./routes/matches');
const predictionRoutes = require('./routes/predictions');
const statsRoutes = require('./routes/stats');

// Route Declaration with /api prefix
app.use('/api/matches', matchRoutes);
app.use('/api/predictions', predictionRoutes);
app.use('/api/stats', statsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Cricket Predictor API is active' });
});

// Cron Job for Data Updates
cron.schedule('*/15 * * * *', async () => {
  try {
    console.log('--- Cron Job Started: Updating Match Data ---');
    // Logic to fetch from external Cricket API would go here
  } catch (err) {
    console.error('Cron Error:', err.message);
  }
});

// Advanced Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});