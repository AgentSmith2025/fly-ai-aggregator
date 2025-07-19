require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { parseUserInput } = require('./nlp');
const { searchFlights } = require('./kiwi');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/search', (req, res) => {
  const { user_input } = req.body;
  
  // Check if user_input is missing, null, undefined, or empty string
  if (!user_input || typeof user_input !== 'string' || user_input.trim() === '') {
    return res.status(400).json({ status: 'error', message: 'user_input is required' });
  }
  
  // Use NLP module to parse user input
  const parsed_params = parseUserInput(user_input);
  
  // Use Kiwi API module to search for flights
  const flights = searchFlights(parsed_params);
  
  res.json({ 
    status: 'ok', 
    echo: user_input,
    parsed_params: parsed_params,
    flights: flights
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 