import { useState, useEffect } from 'react';
import { fetchRandomQuote } from '../utils/api'; 

export const useQuote = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      try {
        
        const fetchedQuote = await fetchRandomQuote();
        setQuote({ text: fetchedQuote.q, author: fetchedQuote.a });
      } catch (err) {
        setError(err.message); 
        setQuote({
          text: 'The secret of getting ahead is getting started.',
          author: 'Mark Twain',
        });
      } finally {
        setLoading(false);
      }
    };

    getQuote();
  }, []); 
  return { quote, loading, error };
};