import axios from 'axios';

// The base URL for our API calls, using the Vite proxy we set up.
// This keeps the actual API URL out of our application code.
const apiClient = axios.create({
  baseURL: '/api', // This corresponds to the proxy path in vite.config.js
});

/**
 * Fetches a random quote from the ZenQuotes API.
 * @returns {Promise<object>} A promise that resolves to a quote object { q: text, a: author }.
 * @throws {Error} Throws an error if the API call fails.
 */
export const fetchRandomQuote = async () => {
  try {
    const response = await apiClient.get('/random');
    
    // The API returns an array with a single quote object.
    // We extract it here so the rest of the app doesn't have to.
    if (response.data && response.data.length > 0) {
      return response.data[0];
    } else {
      // This handles cases where the API returns an empty or invalid response
      throw new Error('Invalid API response format.');
    }
  } catch (error) {
    console.error('Failed to fetch quote:', error);
    // Re-throw a more specific error for the calling function to handle.
    throw new Error('Could not retrieve a motivational quote. Please try again later.');
  }
};

// You can add other API functions here in the future
// e.g., export const fetchWeather = async () => { ... };