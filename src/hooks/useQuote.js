import { useState, useEffect } from 'react';
import { fetchRandomQuote } from '../utils/api'; // <-- 1. Import from your new api file

export const useQuote = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      try {
        // 2. Use the clean, abstracted function
        const fetchedQuote = await fetchRandomQuote();
        setQuote({ text: fetchedQuote.q, author: fetchedQuote.a });
      } catch (err) {
        setError(err.message); // Use the error message from our api file
        // Set a default quote on failure
        setQuote({
          text: 'The secret of getting ahead is getting started.',
          author: 'Mark Twain',
        });
      } finally {
        setLoading(false);
      }
    };

    getQuote();
  }, []); // The empty dependency array ensures this runs only once

  return { quote, loading, error };
};