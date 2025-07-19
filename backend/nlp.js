/**
 * NLP Processing Module
 * Simulates natural language processing for flight search queries
 */

/**
 * Parse user input and extract flight search parameters
 * @param {string} input - The user's search query
 * @returns {object} - Parsed flight parameters
 */
function parseUserInput(input) {
  // For now, return hardcoded sample parameters
  // In a real implementation, this would analyze the input text
  // and extract actual parameters like dates, locations, price, etc.
  
  return {
    origin: "Berlin",
    destination: "Spain",
    date_from: "2025-07-19",
    date_to: "2025-07-21",
    max_price: 150,
    currency: "EUR"
  };
}

module.exports = {
  parseUserInput
}; 