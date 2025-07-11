import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
});

/**
 * Fetches a random quote from the ZenQuotes API.
 * @returns {Promise<object>} A promise that resolves to a quote object { q: text, a: author }.
 * @throws {Error} Throws an error if the API call fails.
 */
export const fetchRandomQuote = async () => {
  try {
    const response = await apiClient.get("/random");

    if (response.data && response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error("Invalid API response format.");
    }
  } catch (error) {
    console.error("Failed to fetch quote:", error);

    throw new Error(
      "Could not retrieve a motivational quote. Please try again later."
    );
  }
};
