import { useEffect, useState } from "react";

const useMovies = (apiFunction) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await apiFunction();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [apiFunction]);

  return {
    movies,
    loading,
    error,
  };
};

export default useMovies;