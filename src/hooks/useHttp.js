import { useState } from 'react';

export const useHttp = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = async (url, options) => {
    try {
      setLoading(true);

      const response = await fetch(url, {
        ...options,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      setData(data);

      return data;
    } catch (error) {
      setError(error);
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};
