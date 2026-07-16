import tmdb from "../api/tmdb";

export const getTrendingMovies = async () => {
  const { data } = await tmdb.get("/trending/movie/week");
  return data.results;
};

export const getPopularMovies = async () => {
  const { data } = await tmdb.get("/movie/popular");
  return data.results;
};

export const getTopRatedMovies = async () => {
  const { data } = await tmdb.get("/movie/top_rated");
  return data.results;
};

export const getUpcomingMovies = async () => {
  const { data } = await tmdb.get("/movie/upcoming");
  return data.results;
};