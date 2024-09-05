// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use('/api/bids', require('./routes/bidRoutes'));
// Improved CORS configuration
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from React frontend
    credentials: true
  }));
app.use(express.json());

// MongoDB connection with improved error handling
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });
  
  // Basic route for testing
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Bidding System API' });
  });
  
  // Import and use routes
  const bidRoutes = require('./routes/bidRoutes');
  app.use('/api/bids', require('./routes/bidRoutes'));
  
  // Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
  });
  
  // Graceful shutdown
  process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
      console.log('Http server closed.');
      mongoose.connection.close(false, () => {
        console.log('MongoDb connection closed.');
        process.exit(0);
      });
    });
  });
  
  const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));