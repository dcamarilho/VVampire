import { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((response) => setData(response.data))
      .catch((err) => setError(err));
  }, [url]);

  return { data, error };
};